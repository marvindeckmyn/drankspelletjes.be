<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registratie - drankspelletjes.be</title>

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
                <li><a href="{{ action('MaakController@showMaakJeEigenDrankspelletje') }}">Maak je eigen drankspelletje</a></li>
            </ul>
        </nav>
        <span id="login">Log in</span>
    </header>

    <main>
        <section id="registratie">
            <h2>Registratie</h2>

            <form method="post" action="#">
                @csrf
                <label for="naam">Volledige naam</label>
                <input type="text" id="naam" name="name" required>

                <label for="email">E-mailadres</label>
                <input type="email" id="email" name="email" required>

                <label for="gebruikersnaam">Gebruikersnaam</label>
                <input type="text" id="gebruikersnaam" name="gebruikersnaam" required>

                <label for="wachtwoord">Wachtwoord</label>
                <input type="password" id="wachtwoord" name="wachtwoord" required>

                <label for="wachtwoordbevestigen">Wachtwoord bevestigen</label>
                <input type="password" id="wachtwoordbevestigen" name="wachtwoordbevestigen" required><br>

                <input type="submit" value="Registreer">
            </form>

            <h2 id="geenAccount">Heb je al een account?</h2>
            <a href="{{ action('LoginController@showLogin') }}"><input type="button" value="Log in"></a>

        </section>
    </main>

<script src="{{ asset('assets/js/script.js') }}"></script>
</body>
</html>