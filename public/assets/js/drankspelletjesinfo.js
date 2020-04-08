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
    },
    {
        toevoegingsdatum: 12,
        naam: "Avatar",
        img: "avatar.png",
        alias: "ADvatar",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Avatar</span> is een vrij leuk spel, omdat er creativiteit aan te pas komt.</p><p>Je begint het spel door elk een personage te kiezen en dit te schrijven/tekenen op een blad papier. Vervolgens mag je om de beurt een vraag stellen aan elkaar over de avatars. Dit moeten ja/nee-vragen zijn, want telkens je een vraag stelt en dit met nee wordt beantwoord, moet je een slok nemen. Indien het antwoord 'ja' is, moet de ondervraagde een slok nemen.</p><p>Je bent vrijgesteld eens je iemand anders' personage hebt kunnen raden. Als jouw personage geraden wordt, moet je zelf een ad fundum of twee shotjes sterke drank nemen en een nieuwe personage verzinnen.</p>",
        benodigdheden: ["pen/potlood", "papiertjes"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 13,
        naam: "Kaa gent tot je zat bent",
        img: "kaagenttotjezatbent.png",
        alias: "Ajax Atten",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>KAA Gent tot je zat bent</span> begint met het kiezen van een veldspeler naar keuze. Vervolgens kijk je met wat maten deze match. Telkens jouw gekozen speler de bal verovert, moet je een grote slok bier nemen. Wanneer hij de bal kwijtraakt, drink je de rest op van je pint.</p><p>Indien jouw speler scoort, mag je twee ad fundums uitdelen aan een vriend naar keuze!</p>",
        benodigdheden: ["scherm waarop je een voetbalmatch kan kijken"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 14,
        naam: "Spijkerslaan",
        img: "spijkerslaan.png",
        alias: "Nagelen, Kopspijkers, Kloefkappen",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p>Als je bekend bent met het spel <span>Spijkerslaan</span> zonder alcohol, is het eigenlijk hetzelfde, maar met een sanctie voor de verliezer, namelijk dat de verliezer moet drinken.</p><p>Indien je nog niet bekend bent met het spel, het gaat zo:</p><p>Er wordt een aantal nagels, gelijk aan het aantal spelers, even diep in een stuk hout geslaan. Elke speler krijgt vervolgens een nagel toegewezen en erna moet elk om de beurt op een nagel slaan. Belangrijk hierbij is dat je de nagel niet mag vasthouden, maar dat het met de losse hand moet. Zo creëer je het risico de nagel scheef te slaan.</p><p>Het is toegestaan om op andere mensen hun nagel te slaan, indien je ze wil helpen. De verliezer is vanzelfsprekend degene die als laatste zijn/haar spijker volledig in het hout krijgt.</p>",
        benodigdheden: ["boomstronk/groot stuk hout", "nagels", "hamer"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 15,
        naam: "Vingeren",
        img: "vingeren.png",
        alias: "",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Vingeren</span> is enorm simplistisch, maar ook enorm leuk om te spelen. Je legt met alle spelers elk 1 vinger op de rand van het glas en dan kan je beginnen.</p><p>Om de beurt mag 1 van de spelers aftellen en dan een getal roepen. Iedereen beslist net voordat het getal geroepen wordt om zijn/haar vinger op het glas te houden of weg te trekken. Als het geroepen getal gelijk is aan het aantal vingers dat nog op het glas ligt, is degene die het getal riep, vrijgesteld.</p><p>Je speelt dit verder tot er nog 1 persoon over is, die dan als verliezer de volledige inhoud van het glas in 1 keer moet leegdrinken, AD FUNDUM!</p>",
        benodigdheden: ["gevulde glas"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 16,
        naam: "Picolo",
        img: "picolo.png",
        alias: "",
        categorie: "Overig",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p><span>Picolo</span> is een applicatie die je kan downloaden via de Play Store of App Store.</p><p>Je geeft gewoon de naam in van elke deelnemer en vervolgens word je door het spel geleid. Er zijn verschillende leuke opdrachten die variatie in het spel houden.</p><p>Perfect om een leuke avond mee te starten!</p>",
        benodigdheden: ["smartphone", "de app picolo"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 17,
        naam: "Bier estafette",
        img: "bierestafette.png",
        alias: "",
        categorie: "Overig",
        spelers: 4,
        uitleg: "<p><span>Uitleg</span></p><p><span>Bier estafette</span> is gelijkaardig aan andere estafettes.</p><p>Je verdeelt alle deelnemers in 2 of meer groepen en je probeert vervolgens per groep zo snel mogelijk bepaalde opdrachten te voltooien.</p><p>Opdrachten bij een bierestafette kunnen dingen zijn zoals om de beurt een pint ad fundum drinken of een shotje drinken en zo als eerste klaar zijn. Een andere optie is elk team een kan gevuld met bier geven en deze vervolgens zo snel mogelijk leegdrinken met je team.</p><p>Het winnende team kiest het volgende spel!</p>",
        benodigdheden: ["drank"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 18,
        naam: "Mond toe, keelgat open",
        img: "mondtoekeelgatopen.png",
        alias: "",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Mond toe, keelgat open</span> is heel eenvoudig, maar werkt beter met spelers die al aangeschoten zijn.</p><p>Voor je begint, wordt elke speler een groente (of een woord uit een andere categorie) toegewezen. Dan kan het spel beginnen.</p><p>Nu is het belangrijk dat je je tanden niet laat zien aan de andere spelers, want vanaf dat ze je tanden kunnen zien, verlies je en moet je een glas bier of sterke drank in 1 keer leegdrinken.</p><p>De eerste speler zegt de naam van zijn groente, gevolgd door: 'roept *naam groente volgende speler*'. Dan roept de tweede speler de derde, enzovoort... Uiteindelijk zal iemand in de lach schieten of zijn tanden laten zien tijdens het zeggen van de groente.</p><p><span>Voorbeeld met 4 spelers</span></p><p>Speler A (Pompoen): 'Pompoen roept asperge'.</p><p>Speler B (Asperge): 'Asperge roept aubergine'.</p><p>Speler C (Aubergine): 'Aubergine roept komkommer'.</p><p>Speler D (Komkommer): 'Komkommer roept Pompoen'.</p><p><span>Afloop</span></p><p>Dit herhaalt zich totdat een speler zijn tanden toont en deze dus moet drinken.</p><p>Indien je te veel competitieve vrienden hebt of omgaat met mensen die niet gemakkelijk lachen, kan je het proces faciliteren op volgende manieren:</p><ul><li>Gekke bekken proberen trekken naar elkaar, terwijl je je groente zegt</li><li>Afspreken dat bij elke ronde waarbij niemand lacht, iedereeen een slok bier neemt</li></ul><p>Natuurlijk kan je zelf nog regels erbij verzinnen. Laat je verbeelding zijn werk doen!</p>",
        benodigdheden: ["drank"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 19,
        naam: "Bierkoning",
        img: "bierkoning.png",
        alias: "",
        categorie: "Overig",
        spelers: 4,
        uitleg: "<p><span>Uitleg</span></p><p><span>Bierkoning</span> beslist, zoals de naam waarschijnlijk wel doet vermoeden, wie de beste zuiper is van jouw vriendengroep! Het verloopt in 3 rondes, waarbij de traagste drinker(s) steeds afvallen. Er zal snel en veel gezopen worden.</p><p><span>Ronde 1</span></p><p>De eerste ronde begint kalm. Alle spelers krijgen vijf pinten en moeten deze zo snel mogelijk leegdrinken. Je bent pas klaar wanneer al je glazen leeggedronken zijn en je je laatste pint omgekeerd op je hoofd hebt gezet (ook leeggedronken vanzelfsprekend).</p><p>Na de ronde valt iedereen, buiten 3 spelers, af. Die spelers zullen het tegen elkaar opnemen in de tweede ronde.</p><p><span>Ronde 2</span></p><p>Je zit met z'n drietjes naast elkaar met elk 2 gewone pinten en een halve liter sterk bier voor je. Hetzelfde principe van de vorige ronde geldt. Het bier moet wel in de volgorde van pint -> sterk bier -> pint gedronken worden. De traagste drinker valt weer af op het einde van deze ronde.</p><p><span>Ronde 3 (FINALE)</span></p><p>Hiervoor is even voorbereiding nodig (liefst door aanwezigen die nog nuchter zijn). Er worden 4 stoelen in een vierkant gezet met genoeg ruimte rond elke stoel om er rond te kunnen lopen. Op deze stoelen worden pintjes gezet en aangevuld indien nodig. Het kan misschien handig zijn om tussen de stoelen telkens een emmer te zetten, just in case.</p><p>De 2 finalisten beginnen tegenover elkaar bij een stoel. Het is de bedoeling een pint vanop de stoel leeg te drinken, een rondje rond de stoel te lopen en naar de volgende stoel te gaan. Je wint wanneer je de andere finalist hebt kunnen inhalen (en verliest dus als je ingehaald bent).</p>",
        benodigdheden: ["heel veel bier", "gewone bier", "sterke bier"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 20,
        naam: "Heet shotje",
        img: "heetshotje.png",
        alias: "",
        categorie: "Overig",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p><span>Heet shotje</span> is eenvoudig en leuk om te spelen.</p><p>Elke ronde kies je 1 speler uit die met zijn rug naar de andere spelers zit en de muziek bedient. Wanneer de muziek begint te spelen, moet je je shotglas telkens doorgeven. Je stopt met doorgeven wanneer de muziek stopt. Wie dan het shotglaasje vast heeft, moet het leegdrinken.</p><p>Santé!</p>",
        benodigdheden: ["shotglas"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 21,
        naam: "Drinkgeld",
        img: "drinkgeld.png",
        alias: "",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Drinkgeld</span> is een drinkwedstrijd gebaseerd op snelheid en volume.</p><p>Een onpartijdige speler laat een muntje draaien op tafel. Simultaan beginnen de andere spelers zo snel mogelijk te drinken van hun bier. Iedereen stopt wanneer het muntje volledig stil ligt op tafel.</p><p>Degene met het bierglas die het minst vol is, wint.</p><p>Degene die wint, mag kiezen welke andere speler zijn glas volledig moet leegdrinken.</p>",
        benodigdheden: ["muntstuk", "glazen bier van een liter"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 22,
        naam: "Bussen",
        img: "bussen.png",
        alias: "De bus in, In de bus",
        categorie: "Kaartspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Fase I</span></p><p><span>Bussen</span> begin je met een geschud pak kaarten.</p><p>Dan raadt de eerste persoon of de bovenste kaart zwart of rood zal zijn. Hij/zij moet drinken indien fout. Vervolgens raadt de volgende speler of de volgende kaart hoger of lager zal zijn dan deze kaart. Indien fout, drinken. De volgende speler moet dan raden of de volgende kaart tussen de twee zopas gelegde kaarten zal liggen.</p><p>Het patroon wordt waarschijnlijk al duidelijk. Telkens je fout bent, moet je drinken. Nu kijk je naar de symbolen van de drie kaarten die al op tafel liggen en gok je of het symbool van de volgende kaart al op de tafel ligt of niet.</p><p>Hierna ga je over naar de tweede fase, een vorm van de bieramide.</p><p><span>Fase II</span></p><p>Je legt een piramide van 15 kaarten (5 - 4 - 3 - 2 - 1) met de voorkant naar beneden gericht op tafel en je verdeelt de rest van de pak onder de spelers.</p><p>Hierna draai je de onderste rij om en mogen spelers, die een kaart gelijk aan 1 van deze kaarten hebben, hun kaart erop leggen. Per weggelegd kaart mogen ze ook een slok uitdelen. Dan draai je de rij van vier kaarten om en mogen de spelers per weggelegde kaart 2 slokken uitdelen, enzovoort...</p><p>Wie op het einde van het spel de meeste kaarten over heeft, moet de bus in!</p><p>In de bus moet de speler een rij zien te krijgen van 7 kaarten. Deze wordt gevormd door 6 keer te raden of de volgende kaart hoger of lager zal zijn dan die ervoor. Eens dit lukt, mag je uit de bus. Pas op, want wanneer je mist, moet je weer helemaal van in het begin starten en het aantal slokken/ad fundums drinken die de bus al lang was.</p>",
        benodigdheden: ["pak kaarten"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 23,
        naam: "Dronkémon",
        img: "dronkemon.png",
        alias: "Pokémon drankspel",
        categorie: "Bordspel",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Dronkémon</span> is ganzenbord zoals je het al jaren kent, maar met een alcoholische twist. (Pokémon stijl)</p><img src='../assets/images/dronkemonuitleg.jpg' alt='Dronkémon' title='Dronkémon'/>",
        benodigdheden: ["spelbord (afbeelding)", "shotglas", "bierglas", "dobbelstenen"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 24,
        naam: "Pintjes proeven",
        img: "pintjesproeven.png",
        alias: "",
        categorie: "Overig",
        spelers: 2,
        uitleg: "<p><span>Uitleg</span></p><p><span>Pintjes proeven</span> is eigenlijk gewoon wat de naam inhoudt, maar het blijft een leuk idee, zeker wanneer je wil weten wie er nu echt het meest van bier kent.</p><p>Je doet om de beurt een blinddoek om en je raadt vervolgens welk bier er in je glas zit door 1 slok te nemen. De winnaar wordt vanzelfsprekend getrakteerd.</p>",
        benodigdheden: ["Verschillende bieren"],
        credits: "Andrew"
    },
    {
        toevoegingsdatum: 25,
        naam: "De mol",
        img: "demol.png",
        alias: "Wie is de mol",
        categorie: "Overig",
        spelers: 3,
        uitleg: "<p><span>Uitleg</span></p><p>Bij <span>De mol</span> is het de bedoeling dat je op voorhand een aantal papiertjes hebt gelijk aan het aantal spelers. Je vouwt deze op en deelt deze uit.</p><p>Op 1 van deze papiertjes staat <span>De mol</span> geschreven en hij/zij is dus de mol van dit spel. Verder moet je nog de bak bier in het midden zetten met alle deelnemers er rond.</p><p>Vervolgens heb je om de beurt drie kansen om een dopje in de bierbak te gooien. Indien je ze alle drie mist, moeten alle spelers, behalve jij, drinken.</p><p>De mol moet natuurlijk proberen de anderen zo zat mogelijk te krijgen.</p><p>Wanneer iemand vals beschuldigd wordt van de mol te zijn, moet de aanklager dubbel drinken. Wanneer de mol betrapt wordt, moet deze dubbel drinken.</p>",
        benodigdheden: ["papier", "pen", "bak bier"],
        credits: "Andrew"
    }
]