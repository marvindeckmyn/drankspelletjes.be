<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maak je eigen drankspelletje - drankspelletjes.be</title>

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/reset.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/screen.css') }}" />
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">

    <meta name="description" content="De leukste drankspelletjes"/>
    <meta name="keywords" content="drankspelletjes, drankspellen, drankspel, drankspelletje"/>
</head>
<body>
    <header>
        <h1><a href="{{ action('DrankspelletjesController@showDrankspelletjes') }}">drankspelletjes.be</a></h1>
        <nav>
            <ul>
                <li><a href="{{ action('DrankspelletjesController@showDrankspelletjes') }}">Drankspelletjes</a></li>
                <li><a href="#" class="active">Maak je eigen drankspelletje</a></li>
            </ul>
        </nav>
        <span>Log in</span>
    </header>

    <main>
        <section id="eigenDrankspelletje">
            <h2>Maak je eigen drankspelletje!</h2>
            <p>Heb je een zelfgemaakte drankspelletje of weet je een drankspelletje dat nog niet op onze site staat? Die kan je hier insturen en als deze goedgekeurd is, staat die op de site met jouw naam in de credits!</p>
        </section>
    </main>
</body>
</html>