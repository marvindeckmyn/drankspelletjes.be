<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>drankspelletjes.be</title>

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/reset.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/screen.css') }}" />
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">

    <meta name="description" content="De leukste drankspelletjes"/>
    <meta name="keywords" content="drankspelletjes, drankspellen, drankspel, drankspelletje"/>
</head>
<body>
    <header>
        <h1><a href="#">drankspelletjes.be</a></h1>
        <nav>
            <ul>
                <li><a href="#" class="active">Drankspelletjes</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="drankspelletjes">
            <h2>Drankspelletjes</h2>
            <p>Meer dan 200 drankspelletjes om met je vrienden te spelen</p>

            <form action="{{ action('DrankspelletjesController@showDrankspelletjes') }}" method="post" id="filters">
                @csrf
                <label for="search">Zoek </label><input type="search" name="search" id="search"/>

                <label>Categorie
                    <select id="category" name="category">
                        <option value="all">alle</option>
                        <option value="cards">kaartspel</option>
                        <option value="dice">dobbelspel</option>
                        <option value="board">bordspel</option>
                        <option value="guess">gokspel</option>
                        <option value="ball">balspel</option>
                        <option value="other">overig</option>
                    </select>
                </label>

                <label>Sorteer op
                    <select id="sortby" name="sortby">
                    </select>
                </label>

                    <select id="direction" name="direction">
                        <option value="asc">oplopend</option>
                        <option value="desc">aflopend</option>
                    </select>
            </form>

            <div class="flexcontainer">
            </div>
        </section>
    </main>

    <footer>
    </footer>

    <section id="popup" class="hidden">
        <div class="contentwrapper"></div>
        <a href="#" class="close">X</a>
    </section>

<script src="{{ asset('assets/js/drankspelletjesinfo.js') }}"></script>
<script src="{{ asset('assets/js/drankspelletjes.js') }}"></script>
</body>
</html>