<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $naam }} - drankspelletjes.be</title>

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
            <li><a href="{{ action('DrankspelletjesController@showDrankspelletjes') }}" class="active">Drankspelletjes</a></li>
            <li><a href="{{ action('ContactController@showContact') }}">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="drank">
        <div class="flexcontainer">
            <section id="drankspel">
                <h2>{{ $naam }}</h2>
            </section>

            <section id="uitleg"></section>
        </div>
    </main>

    <script src="{{ asset('assets/js/drankspelletjesinfo.js') }}"></script>
    <script src="{{ asset('assets/js/drankspel.js') }}"></script>
</body>
</html>