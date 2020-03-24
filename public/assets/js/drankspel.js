"use strict";
const NAME = "h2";

document.addEventListener("DOMContentLoaded", init);


function init() {
    loadGameInfo();
}

function loadGameInfo() {
    let title = document.querySelector(NAME).innerHTML;
    let section = document.querySelector("#drankspel");
    let index = 0;

    for (let i=0; i < drankspelletjes.length;i++) {
        if (title == drankspelletjes[i].naam) {
            index = i;
            break;
        }
    }

    section.innerHTML += `<figure>
                            <img src="../assets/images/${drankspelletjes[index].img}" alt="${drankspelletjes[index].naam}" title="${drankspelletjes[index].naam}"/>
                          </figure>`;
    
    if (drankspelletjes[index].alias !== "") {
        section.innerHTML += `<p><span>Alias:</span> ${drankspelletjes[index].alias}</p>`;
    }

    section.innerHTML += `<p><span>Categorie:</span> ${drankspelletjes[index].categorie}</p>
                          <p><span>Minimum aantal spelers:</span> ${drankspelletjes[index].spelers}</p>
                          <p><span>Benodigdheden:</span></p>
                          <ul></ul>
                          <p><span>Credits:</span> ${drankspelletjes[index].credits}</p>`;

    let list = document.querySelector("#drankspel ul")

    for (let i=0;i < drankspelletjes[index].benodigdheden.length; i++) {
        list.innerHTML += `<li>${drankspelletjes[index].benodigdheden[i]}</li>`;
    };

    let sectionInfo = document.querySelector("#uitleg");
    sectionInfo.innerHTML += drankspelletjes[index].uitleg;
}