"use strict";
const ARTICLEPICTURE = "article img";
const ARTICLELINK = "article a";
const ARTICLETITLE = "article h3";
const CLOSEPOPUP = ".close";
const SEARCH = "input[type='search']";
const MAIN = "main";
const CATEGORY = "#category";
const FILTER = "#sortby";
const DIRECTION = "#direction";
const SEARCHFORM = "#filters";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadArticles();
    addFilters();
    showAmount();

    document.querySelectorAll(ARTICLEPICTURE).forEach(picture => {
        picture.addEventListener("click", getDetails);
    });

    document.querySelectorAll(ARTICLETITLE).forEach(title => {
        title.addEventListener("click", getDetails);
    });

    document.querySelector(CLOSEPOPUP).addEventListener("click", closeDetails);

    document.querySelector(SEARCH).addEventListener("keyup", search);

    document.querySelector(CATEGORY).addEventListener("click", sortInCategory);
    document.querySelector(FILTER).addEventListener("click", sortGames);
    document.querySelector(DIRECTION).addEventListener("click", sortGames);

    document.querySelector(SEARCHFORM).addEventListener("submit", disablePost);

}

function showAmount() {
    let aantalTitel = document.querySelector("#aantalSpelletjes");

    aantalTitel.innerHTML = `${drankspelletjes.length} drankspelletjes om met je vrienden te spelen`;
}

function loadArticles() {
    let container = document.querySelector(".flexcontainer");

    for (let i = 0; i < drankspelletjes.length; i++) {
        container.innerHTML += `<article data-id="${drankspelletjes[i].toevoegingsdatum}">
                                    <h3>${drankspelletjes[i].naam}</h3>
                                    <figure>
                                        <img src="assets/images/${drankspelletjes[i].img}" alt="${drankspelletjes[i].naam}" title="${drankspelletjes[i].naam}"/>
                                        <figcaption>${drankspelletjes[i].categorie}</figcaption>
                                    </figure>
                                    <div class="info">
                                        <p><span>min. ${drankspelletjes[i].spelers} spelers</span></p>
                                        <a href="drankspelletjes/${drankspelletjes[i].naam.toLowerCase()}" class="explanation" target="_blank">Uitleg</a>
                                    </div>
                                </article>`;
    }
}

function clearArticles() {
    let container = document.querySelector(".flexcontainer");

    container.innerHTML = "";
}

function addFilters() {
    let filters = Object.keys(drankspelletjes[1]);

    //Alfabetische volgorde
    filters.sort();
    for (const filter of filters) {
        if (filter != "img" && filter != "uitleg" && filter != "benodigdheden" && filter != "credits") {
            document.querySelector("select[id='sortby']").innerHTML += `<option value="${filter}">${filter}</option>\n`;
        }
    };

    //Standaardfilter veranderen naar toevoegingsdatum
    document.querySelector("select[id='sortby']").value = "toevoegingsdatum";
}

function getDetails(e) {
    e.preventDefault();
    let target = e.target;
    let articleCopy = target.closest("article").cloneNode(true);
    let popup = document.querySelector("#popup");
    if (popup.getAttribute("class") != "hidden") {
        closeDetails(e);
    }

    else {
    //Artikel in popup plaatsen
    popup.appendChild(articleCopy);

    //Uitleg link, categorie & aantal spelers verwijderen
    let parent = document.querySelector("#popup .info");
    let parentCategorie = document.querySelector("#popup figure");
    let link = document.querySelector("#popup .info a");
    let spelers = document.querySelector("#popup .info p");
    let categorie = document.querySelector("#popup figure figcaption");
    parent.removeChild(link);
    parent.removeChild(spelers);
    parentCategorie.removeChild(categorie);

    //Info in popup selecteren
    let info = popup.querySelector(".info");

    //Details nemen van aangeklikte maaltijd
    let article = target.closest("article");
    let index = article.getAttribute("data-id") - 1;

    //Details toevoegen
    info.innerHTML += `${drankspelletjes[index].uitleg}`;

    let mainInfo = document.createElement("div");
    mainInfo.className = "mainInfo";
    mainInfo.innerHTML += `<p><span>Categorie:</span> ${drankspelletjes[index].categorie}</p>
                            <p><span>Minimum aantal spelers:</span> ${drankspelletjes[index].spelers}</p>
                            <p><span>Benodigdheden:</span></p>
                            <ul></ul>`;
    info.parentNode.insertBefore(mainInfo, info);

    let list = document.querySelector("#popup .mainInfo ul")

    for (let i=0;i < drankspelletjes[index].benodigdheden.length; i++) {
        list.innerHTML += `<li>${drankspelletjes[index].benodigdheden[i]}</li>`;
    };

    let credits = document.createElement("div");
    credits.className = "credits";
    credits.innerHTML += `<p><span>Credits:</span> ${drankspelletjes[index].credits}</p>`;
    info.parentNode.insertBefore(credits, info);

    //Popup tonen
    popup.classList.remove("hidden");

    //Blur achtergrond
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    main.className = "isBlurred";
    header.className = "isBlurred";

    //Als je buiten de popup klikt, gaat de popup weg
    document.querySelector(MAIN).addEventListener("click", clickOutsidePopup);

    e.stopPropagation();
    }
}

function closeDetails(e) {
    e.preventDefault();
    let close = document.querySelector(CLOSEPOPUP);
    let popup = close.closest("section");
    let article = popup.querySelector("article")
    //Artikel uit popup verwijderen
    popup.removeChild(article);
    //Popup verbergen
    popup.classList.add("hidden");

    //Unblur achtergrond
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    main.className = "";
    header.className = "";

    //Deze event wordt verwijderd
    document.querySelector(MAIN).removeEventListener("click", clickOutsidePopup);
}

function search(e) {
    e.preventDefault();
    let input = e.target;
    //ToUpperCase toegevoegd zodat de zoekopdracht niet hoofdlettergevoelig is
    let searchFilter = input.value.toUpperCase();
    let article = document.querySelectorAll(".flexcontainer article");
    
    for(let i = 0;i < article.length; i++)
    {
        let articleName = article[i].getElementsByTagName("h3")[0];

        if (articleName)
        {
            let textValue = articleName.textContent || articleName.innerHTML;

            if (textValue.toUpperCase().indexOf(searchFilter) > -1)
            {
                article[i].style.display = "";
            }
            else
            {
                article[i].style.display = "none";
            }
        }
    }
}

function clickOutsidePopup(e) {
    e.preventDefault();
    let close = document.querySelector(CLOSEPOPUP);
    let popup = close.closest("section");
    if (popup.className != "hidden") {
        closeDetails(e);
    }
}

function sortGames(e) {
    e.preventDefault();
    let selectorFilter = document.querySelector(FILTER);
    let selectorDirection = document.querySelector(DIRECTION);

    let sortedGames = drankspelletjes;

    let sortDirection = selectorDirection[selectorDirection.selectedIndex].value;
    let sortFilter = selectorFilter[selectorFilter.selectedIndex].value;

    sortedGames.sort(
        function (a, b) {
            if (sortDirection === "asc")
            {
                if (a[sortFilter] > b[sortFilter]) {
                    return 1;
                } else if (a[sortFilter] < b[sortFilter]) {
                    return -1;
                }
                return 0;
            }
            else if (sortDirection === "desc")
            {
                if (a[sortFilter] < b[sortFilter]) {
                    return 1;
                } else if (a[sortFilter] > b[sortFilter]) {
                    return -1;
                }
                return 0;
            }
        }
    )

    clearArticles();
    loadArticles();

    //Moet weer uitgevoerd worden, omdat er een nieuwe sortering is
    document.querySelectorAll(ARTICLEPICTURE).forEach(picture => {
        picture.addEventListener("click", getDetails);
    });

    document.querySelectorAll(ARTICLETITLE).forEach(title => {
        title.addEventListener("click", getDetails);
    });

    sortInCategory(e);
}

function sortInCategory(e) {
    e.preventDefault();
    let selectorCategory = document.querySelector(CATEGORY);
    let sortCategory = selectorCategory[selectorCategory.selectedIndex].value;

    let article = document.querySelectorAll(".flexcontainer article");
    for(let i = 0;i < article.length; i++)
    {
        let articleCategory = article[i].getElementsByTagName("figcaption")[0];

        if (articleCategory)
        {
            let textValue = articleCategory.textContent || articleCategory.innerHTML;

            if (sortCategory.toUpperCase() == "ALLE")
            {
                article[i].style.display = "";
            }
            else if (sortCategory.toUpperCase() == textValue.toUpperCase())
            {
                article[i].style.display = "";
            }
            else
            {
                article[i].style.display = "none";
            }
        }
    }
}

function disablePost(e) {
    e.preventDefault();
}
