"use strict";

const drankspelletjes = [
    {
        toevoegingsdatum: 1,
        naam: "Mexico",
        img: "mexico.png",
        categorie: "Dobbelspel",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p>Bij het spel <span>Mexico</span> is het de bedoeling dat jullie in een kring staan en dat iedereen om de beurt 2 dobbelstenen werpt. Er wordt tijdens het spel een pot opgebouwd van een bepaald aantal <span>ad fundums</span>. Dit begint over het algemeen bij 1 ad fundum, maar kan natuurlijk meer zijn in een spel met ervaren drinkers.</p><p>Elke ronde gooit elke speler 3 keer na elkaar, waarbij de laatste worp telt. Wanneer dit 21 is, weet de speler al zeker dat hij/zij niet zal moeten drinken. De pot wordt hierbij verdubbeld.</p><p>Indien men voor de laatste worp een 1 of 2 gooit, moet men deze laten liggen. Dit verhoogt de kans om 21 te werpen. Wanneer de eerste of tweede worp al 21 is, stopt de speler met werpen en mogen alle spelers na hem/haar maximaal evenveel werpen als hem/haar.</p><p>Het getal dat je gooit, wordt niet gevormd door de som van het aantal ogen op beide dobbelstenen op te tellen. Dit wordt gevormd door beide cijfers naast elkaar te zetten met het grootste cijfer eerst.</p><p>Voorbeeld: je gooit een 3 en een 5, dan heb je 53</p><br><p><span>Speciale gevallen</span></p><ul><li><span>2 dezelfde cijfers:</span> wanneer er 2 dezelfde cijfers worden gegooid, krijg je eigenlijk het honderdtal van dit cijfer. Voorbeeld: je gooit twee keer een 5, dan heb je 500.</li><li><span>2 keer een 6:</span> dit telt als 600 en de speler mag een ad fundum uitdelen. Hij/zij stopt niet met gooien als dit niet de derde worp was.</li><li><span>Kampen:</span> wanneer 2 spelers eenzelfde getal gegooid hebben (en ook verloren zijn), wordt de pot verdubbeld en spelen ze nog een keer tegen elkaar. Er wordt verder gekampt tot 1 van de spelers verliest.</li><li><span>Iedereen gooit 21:</span> er wordt opnieuw gespeeld maar met het aantal ad fundums van ervoor.</li><li><span>Je gooit een dobbelsteen buiten de bak of op de grond:</span> je moet een ad fundum nemen.</li><li><span>Je neemt dobbelstenen aan van een andere speler:</span> je neemt een ad fundum.</li></ul>",
        benodigdheden: ["2 dobbelstenen", "eventueel een dobbelsteenbakje"]
    },
    {
        toevoegingsdatum: 2,
        naam: "Bierpong",
        img: "bierpong.png",
        categorie: "Balspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p>Bij <span>bierpong</span> worden er aan beide zijden van een lange tafel horizontale piramides opgesteld die naar elkaar wijzen. De piramides bestaan elk uit 10 bekers, dus de top van de piramide bevat 1 beker en de bodem vier. Deze bekers worden gewoonlijk gevuld met bier, maar dit kunnen ook andere alcoholische dranken zijn.</p><p>Het is vervolgens de bedoeling dat elk team om zijn beurt 1 van hun spelers een pingpongballetje laat gooien in een beker van de tegenstanders. Op hetzelfde moment heeft het andere team een verdediger. Deze mag het balletje wegslaan vanaf dat het 1 keer gebotst heeft. Het is dus handiger om voor een rechtstreekse worp te gaan.</p><p>Wanneer het lukt om de pingpongbal in 1 van de tegenstanders hun beker te krijgen, moet de verdediger deze beker in 1 keer opdrinken. Degene die geworpen heeft, mag nog eens werpen.</p><p>Je team wint het spel wanneer je een pingpongbal in <span>elke beker</span> hebt gekregen. Het verloren team moet dan de resterende bekers van het gewonnen team in 1 keer opdrinken.</p><p><span>Extra</span></p><p>Er zullen steeds bekers weggenomen worden, waardoor je geen piramide meer hebt. Je kan op voorhand afspreken dat, wanneer er te veel bekers weg zijn, je het recht hebt de tegenstanders te vragen hun bekers terug in de vorm van een piramide te zetten. Dit keer vanzelfsprekend een kleinere.</p>",
        benodigdheden: ["pingpongballetje", "20 bekers", "lange tafel"]
    },
    {
        toevoegingsdatum: 3,
        naam: "Bierbowling",
        img: "bierbowling.png",
        categorie: "Balspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Bierbowling</span> is helemaal niet zo ingewikkeld, maar kan voor grote problemen zorgen als je niet goed kan bowlen. Het is namelijk zo dat er <span>ad fundums</span> worden gehangen aan bepaalde prestaties of mislukkingen in het spel.</p><p><span>Mislukkingen en prestaties</span></p><ul><li>Wanneer je een strike gooit, mag je een ad fundum uitdelen.</li><li>Wanneer je een turkey (3 strikes na elkaar) gooit, moet iedereen een ad fundum nemen.</li><li>Gooi je in de goot (gutter), dan moet je zelf een ad fundum nemen.</li></ul>",
        benodigdheden: ["bowlingbaan", "bowlingbal"]
    },
    {
        toevoegingsdatum: 4,
        naam: "Ricard petanque",
        img: "ricardpetanque.jfif",
        categorie: "Balspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Ricard petanque</span> is eigenlijk heel eenvoudig. Je speelt een spelletje petanque/jeu de boules, zoals je het normaal zou spelen, maar met een kleine twist.</p><p>De winnaar mag immers een <span>ad fundum ricard</span> uitdelen en de verliezer moet er sowieso 1 nemen. Als je dit spel dus met 2 speelt, drinkt de verliezer telkens 2 ad fundums!</p>",
        benodigdheden: ["petanqueballen", "ricard"]
    },
    {
        toevoegingsdatum: 5,
        naam: "Bierviltje draaien",
        img: "bierviltjedraaien.png",
        categorie: "Kaartspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Bierviltje draaien</span> is een heel eenvoudig spel. Voordat je met het spel begint, schrijft iedereen op meerdere bierkaartjes aan beide zijden een opdracht. Erna stapel je alle bierkaartjes op elkaar en schaffel je ze een beetje.</p><p>Vervolgens begin je met het spel. Elk team neemt op zijn beurt een bierkaartje en laat het spinnen op tafel. De opdracht die naar boven ligt wanneer het kaartje stopt met draaien, moet uitgevoerd worden door het team die het kaartje gedraaid heeft.</p><p><span>Voorbeelden voor opdrachten</span></p><p>Neem een ad fundum, zing een zelfverzonnen liedje, kus de persoon naast je op de wang, speel blad, steen, schaar en de verliezer drinkt een shotje enzovoort.</p>",
        benodigdheden: ["bierviltjes/bierkaartjes/onderleggertjes", "balpen"]
    }
]