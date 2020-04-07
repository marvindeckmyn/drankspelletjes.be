"use strict";

const drankspelletjes = [
    {
        toevoegingsdatum: 1,
        naam: "Mexico",
        img: "mexico.png",
        alias: "",
        categorie: "Dobbelspel",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p>Bij het spel <span>Mexico</span> is het de bedoeling dat jullie in een kring staan en dat iedereen om de beurt 2 dobbelstenen werpt. Er wordt tijdens het spel een pot opgebouwd van een bepaald aantal <span>ad fundums</span>. Dit begint over het algemeen bij 1 ad fundum, maar kan natuurlijk meer zijn in een spel met ervaren drinkers.</p><p>Elke ronde gooit elke speler 3 keer na elkaar, waarbij de laatste worp telt. Wanneer dit 21 is, weet de speler al zeker dat hij/zij niet zal moeten drinken. De pot wordt hierbij verdubbeld.</p><p>Indien men voor de laatste worp een 1 of 2 gooit, moet men deze laten liggen. Dit verhoogt de kans om 21 te werpen. Wanneer de eerste of tweede worp al 21 is, stopt de speler met werpen en mogen alle spelers na hem/haar maximaal evenveel werpen als hem/haar.</p><p>Het getal dat je gooit, wordt niet gevormd door de som van het aantal ogen op beide dobbelstenen op te tellen. Dit wordt gevormd door beide cijfers naast elkaar te zetten met het grootste cijfer eerst.</p><p>Voorbeeld: je gooit een 3 en een 5, dan heb je 53</p><br><p><span>Speciale gevallen</span></p><ul><li><span>2 dezelfde cijfers:</span> wanneer er 2 dezelfde cijfers worden gegooid, krijg je eigenlijk het honderdtal van dit cijfer. Voorbeeld: je gooit twee keer een 5, dan heb je 500.</li><li><span>2 keer een 6:</span> dit telt als 600 en de speler mag een ad fundum uitdelen. Hij/zij stopt niet met gooien als dit niet de derde worp was.</li><li><span>Kampen:</span> wanneer 2 spelers eenzelfde getal gegooid hebben (en ook verloren zijn), wordt de pot verdubbeld en spelen ze nog een keer tegen elkaar. Er wordt verder gekampt tot 1 van de spelers verliest.</li><li><span>Iedereen gooit 21:</span> er wordt opnieuw gespeeld maar met het aantal ad fundums van ervoor.</li><li><span>Je gooit een dobbelsteen buiten de bak of op de grond:</span> je moet een ad fundum nemen.</li><li><span>Je neemt dobbelstenen aan van een andere speler:</span> je neemt een ad fundum.</li></ul>",
        benodigdheden: ["2 dobbelstenen", "eventueel een dobbelsteenbakje"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 2,
        naam: "Bierpong",
        img: "bierpong.png",
        alias: "",
        categorie: "Balspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p>Bij <span>Bierpong</span> worden er aan beide zijden van een lange tafel horizontale piramides opgesteld die naar elkaar wijzen. De piramides bestaan elk uit 10 bekers, dus de top van de piramide bevat 1 beker en de bodem vier. Deze bekers worden gewoonlijk gevuld met bier, maar dit kunnen ook andere alcoholische dranken zijn.</p><p>Het is vervolgens de bedoeling dat elk team om zijn beurt 1 van hun spelers een pingpongballetje laat gooien in een beker van de tegenstanders. Op hetzelfde moment heeft het andere team een verdediger. Deze mag het balletje wegslaan vanaf dat het 1 keer gebotst heeft. Het is dus handiger om voor een rechtstreekse worp te gaan.</p><p>Wanneer het lukt om de pingpongbal in 1 van de tegenstanders hun beker te krijgen, moet de verdediger deze beker in 1 keer opdrinken. Degene die geworpen heeft, mag nog eens werpen.</p><p>Je team wint het spel wanneer je een pingpongbal in <span>elke beker</span> hebt gekregen. Het verloren team moet dan de resterende bekers van het gewonnen team in 1 keer opdrinken.</p><p><span>Extra</span></p><p>Er zullen steeds bekers weggenomen worden, waardoor je geen piramide meer hebt. Je kan op voorhand afspreken dat, wanneer er te veel bekers weg zijn, je het recht hebt de tegenstanders te vragen hun bekers terug in de vorm van een piramide te zetten. Dit keer vanzelfsprekend een kleinere.</p>",
        benodigdheden: ["pingpongballetje", "20 bekers", "lange tafel"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 3,
        naam: "Bierbowling",
        img: "bierbowling.png",
        alias: "",
        categorie: "Balspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Bierbowling</span> is helemaal niet zo ingewikkeld, maar kan voor grote problemen zorgen als je niet goed kan bowlen. Het is namelijk zo dat er <span>ad fundums</span> worden gehangen aan bepaalde prestaties of mislukkingen in het spel.</p><p><span>Mislukkingen en prestaties</span></p><ul><li>Wanneer je een strike gooit, mag je een ad fundum uitdelen.</li><li>Wanneer je een turkey (3 strikes na elkaar) gooit, moet iedereen een ad fundum nemen.</li><li>Gooi je in de goot (gutter), dan moet je zelf een ad fundum nemen.</li></ul>",
        benodigdheden: ["bowlingbaan", "bowlingbal"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 4,
        naam: "Ricard petanque",
        img: "ricardpetanque.jfif",
        alias: "",
        categorie: "Balspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Ricard petanque</span> is eigenlijk heel eenvoudig. Je speelt een spelletje petanque/jeu de boules, zoals je het normaal zou spelen, maar met een kleine twist.</p><p>De winnaar mag immers een <span>ad fundum ricard</span> uitdelen en de verliezer moet er sowieso 1 nemen. Als je dit spel dus met 2 speelt, drinkt de verliezer telkens 2 ad fundums!</p>",
        benodigdheden: ["petanqueballen", "ricard"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 5,
        naam: "Bierviltje draaien",
        img: "bierviltjedraaien.png",
        alias: "",
        categorie: "Kaartspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Bierviltje draaien</span> is een heel eenvoudig spel. Voordat je met het spel begint, schrijft iedereen op meerdere bierkaartjes aan beide zijden een opdracht. Erna stapel je alle bierkaartjes op elkaar en schaffel je ze een beetje.</p><p>Vervolgens begin je met het spel. Elk team neemt op zijn beurt een bierkaartje en laat het spinnen op tafel. De opdracht die naar boven ligt wanneer het kaartje stopt met draaien, moet uitgevoerd worden door het team die het kaartje gedraaid heeft.</p><p><span>Voorbeelden voor opdrachten</span></p><ul><li>Neem een ad fundum</li><li>Zing een zelfverzonnen liedje</li><li>Kus de persoon naast je op de wang</li><li>Speel blad, steen, schaar en de verliezer drinkt een shotje</li><li>...</li></ul>",
        benodigdheden: ["bierviltjes/bierkaartjes/onderleggertjes", "balpen"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 6,
        naam: "Kwartjes",
        img: "kwartjes.png",
        alias: "Munten, Centen",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p>De spelregels van <span>Kwartjes</span> zijn vrij eenvoudig, maar het meesteren van de vaardigheden is een stuk moeilijker.</p><p>Je zit in een kring rond een glas en je probeert, om de beurt, een muntje in het glas te kaatsen. Je mag een ad fundum of een slok uitdelen, wanneer je het muntje erin krijgt. Zolang je scoort, mag je tot driemaal toe een slok uitdelen. Eens je mist of eens je 3 keer gescoord hebt, is het de beurt aan de volgende</p>",
        benodigdheden: ["muntstukken", "een glas"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 7,
        naam: "Lachen is drinken",
        img: "lachenisdrinken.png",
        alias: "",
        categorie: "Overig",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p><span>Lachen is drinken</span> wordt eigenlijk heel eenvoudig gespeeld, maar vereist wel wat creativiteit of deelnemers die al wat gedronken hebben.</p><p>2 spelers schrijven allebei dingen op meerdere papiertjes waar de andere volgens hem/haar om zou moeten lachen. De derde persoon moet dan telkens afwisselen tussen het lezen van een briefje van <span>persoon A</span> en <span>persoon B</span>.</p><p>Het vervolg raad je waarschijnlijk al... Wanneer je moet lachen, moet je drinken. Je kan zelf beslissen of je dan met slokken, shotjes of ad fundums werkt. Naarmate hoe zat je wil worden, hoe sneller de deelnemers in de lach schieten en hoe creatiever ze zijn.</p><p><span>BELANGRIJK</span></p><p>Een gniffel of glimlach telt ook als lachen!</p>",
        benodigdheden: ["schrijfmateriaal", "blaadjes papier"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 8,
        naam: "Bullshit",
        img: "bullshit.png",
        alias: "Bluf, Leugenaar, Valsspeler, Ik betwijfel het",
        categorie: "Kaartspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p>Om <span>Bullshit</span> te spelen, moet je eerst alle kaarten van een pak verdelen onder alle spelers. Vervolgens mag de speler met de meeste azen beginnen. Indien er meerdere zijn met evenveel azen, kan je beslissen wie begint met kop of munt/blad, steen, schaar.</p><p>De speler die begint, legt al zijn azen op tafel en de rest van het spel begint dan kloksgewijs. De volgende mag dan de kaart leggen die hoger is dan de vorige kaart, in dit geval een 2. Dit mogen meerdere 2's zijn, indien de speler hierover beschikt. Het speciale aan dit spel is dat de speler de kaart(en) niet (direct) moet tonen, maar deze omgekeerd na de vorige kaar legt.</p><p>Het is toegestaan in dit spel om te liegen, maar wel met een risico. Indien een andere speler je ervan vermoedt niet de juiste kaarten te hebben neergelegd, mag deze <span>bullshit</span> roepen en moet je je kaarten omdraaien</p><p><span>Hier wordt het interessant.</span> Indien je wel de juiste kaarten hebt neergelegd (dus bijvoorbeeld 3 keer een 7 na een 6), moet de aanklager een ad fundum nemen. Indien je betrapt wordt op liegen, moet je er zelf 1 nemen.</p><p>De speler die als eerste al zijn kaarten kwijt is, wint en mag de verliezers nog een laatste ad fundum laten nemen.</p><br><p><span>Extra</span></p><ul><li>Je mag ad fundums vervangen met shotjes of slokjes</li><li>Je moet de rest niet laten weten dat je nog maar 1 kaart hebt (zoals in UNO)</li><li>Je kan het interessanter maken door meerdere pakken kaarten door elkaar te schudden, waardoor er een grotere kans is op ongeloofwaardige combinaties</li>",
        benodigdheden: ["een kaartspel"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 9,
        naam: "De grootste kans",
        img: "degrootstekans.png",
        alias: "",
        categorie: "Overig",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p><span>De grootste kans</span> is een vrij eenvoudig spel. Je kiest eerst een speler die begint en gaat dan kloksgewijs verder. Jullie zeggen om de beurt: 'De grootste kans om...', gevolgd door iets beschamends of ridicuuls wat iemand van de groep ooit nog zou kunnen doen.</p><p>Vervolgens tel je af en wijs je allemaal tegelijk naar de persoon van wie je denkt dat hij/zij de grootste kans heeft om dat ooit te doen/zijn. Hij/zij die door de meeste deelnemers wordt aangewezen, moet een slokje nemen.</p><br><p><span>Voorbeeld</span></p><p>Speler A begint en zegt: 'De grootste kans om ooit een stripclub binnen te wandelen'. Vervolgens telt speler A af en wijzen de speler A, B en C naar iemand. A en B wijzen naar C en C wijst naar B. Dit betekent dat C de grootste kans heeft en dus moet drinken. Santé!</p>",
        benodigdheden: ["drank"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 10,
        naam: "Tornado",
        img: "tornado.jpg",
        alias: "",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Tornado</span> is een heel eenvoudig spel, maar je wordt er wel ongelofelijk snel zat van.</p><p>Je staat in een cirkel met alle deelnemers en je neemt om de beurt een ad fundum. Telkens het aan jou is, moet je onmiddellijk beginnen drinken. Eens je hier niet meer tot in staat bent, ben je af.</p>",
        benodigdheden: ["drank"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 11,
        naam: "Wodka water",
        img: "wodkawater.png",
        alias: "",
        categorie: "Overig",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p><span>Wodka water</span> wordt als volgt gespeeld.</p><p>1 shot glas wordt gevuld met wodka en de andere met water. Hierna moet ofwel een neutraal persoon (iemand die niet meedoet de volgende ronde) de glazen van plaats wisselen of moet iedereen om zijn beurt de glazen wisselen zonder dat de anderen kijken, zodat niemand nog weet waar de wodka zit.</p><p>Vervolgens trekt iedereen het shotje binnen en kijk je elkaar allemaal in de ogen. Erna wordt er gestemd wie de wodka gedronken heeft door allemaal tegelijk te wijzen naar wie je ervan verdenkt schuldig te zijn.</p><p>Indien je het juiste hebt, moet hij/zij nog een shotje wodka drinken. Indien fout, moet iedereen buiten de beschuldigde en de echte wodkadrinker een shotje nemen.</p>",
        benodigdheden: ["shotglaasjes", "water", "witte wodka/appeljenever/appelsap"],
        credits: "Andrew"
    }
]