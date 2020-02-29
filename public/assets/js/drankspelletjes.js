"use strict";
const ARTICLEPICTURE = "article img";
const ARTICLELINK = "article a";
const ARTICLETITLE = "article h3";
const CLOSEPOPUP = ".close";
const SEARCH = "input[type='search']";
const MAIN = "main";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadArticles();
    addFilters();

    document.querySelectorAll(ARTICLEPICTURE).forEach(picture => {
        picture.addEventListener("click", getDetails);
    });

    document.querySelectorAll(ARTICLELINK).forEach(link => {
        link.addEventListener("click", getDetails);
    });

    document.querySelectorAll(ARTICLETITLE).forEach(title => {
        title.addEventListener("click", getDetails);
    });

    document.querySelector(CLOSEPOPUP).addEventListener("click", closeDetails);

    document.querySelector(SEARCH).addEventListener("keyup", search);

    document.querySelector(MAIN).addEventListener("click", clickOutsidePopup);

}

function loadArticles() {
    let container = document.querySelector(".flexcontainer");

    for (let i = 0; i < drankspelletjes.length; i++) {
        container.innerHTML += `<article data-id="${drankspelletjes[i].toevoegingsdatum}">
                                    <h3>${drankspelletjes[i].naam}</h3>
                                    <figure>
                                        <img src="assets/images/${drankspelletjes[i].img}" alt="${drankspelletjes[i].naam}" title="${drankspelletjes[i].naam}"/>
                                        <figcaption>
                                            ${drankspelletjes[i].categorie}
                                        </figcaption>
                                    </figure>
                                    <div class="info">
                                        <p><span>min. ${drankspelletjes[i].spelers} spelers</span></p>
                                        <a href="#" class="explanation">Uitleg</a>
                                    </div>
                                </article>`;
        
    }
}

function addFilters() {
    let filters = Object.keys(drankspelletjes[1]);

    //Alfabetische volgorde
    filters.sort();
    for (const filter of filters) {
        if (filter != "img" && filter != "uitleg" && filter != "benodigdheden") {
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

    //Popup tonen
    popup.classList.remove("hidden");

    //Blur achtergrond
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    main.className = "isBlurred";
    header.className = "isBlurred";

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