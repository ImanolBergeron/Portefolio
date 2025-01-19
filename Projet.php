<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imanol Bergeron Portefolio</title>
    <link rel="stylesheet" href="Style.css">
    <link rel="stylesheet" href="Projet.css">
</head>
<body>
    <div id="top">
        <a href="menuPrincipal.php" class="explore-linkBack" id="BackArrow"><img src="BackArrow.webp" alt="back"></a>
        <div id="titre">
            <h1>MES PROJETS</h1>
        </div>
    </div>

    <table>
        <tbody id="tableProjet"></tbody>
        <?php
        $projets = [
            ["name" => "Pacman", "srcImg" => "imageProjet/Pacman.png", "techno" => "Python"],
            ["name" => "2048", "srcImg" => "imageProjet/2048.png", "techno" => "Python"],
            ["name" => "Apexdle", "srcImg" => "imageProjet/Apexdle.png", "techno" => "JS"],
            ["name" => "CarbonTracker", "srcImg" => "imageProjet/CarbonTracker.png", "techno" => "C#"],
            ["name" => "Unideckbuilders", "srcImg" => "imageProjet/Unideckbuilders.png", "techno" => "C#"],
            ["name" => "Labyrinth", "srcImg" => "imageProjet/Labyrinth.png", "techno" => "Java"],
            ["name" => "Towa", "srcImg" => "imageProjet/Towa.jpg", "techno" => "Java"],
            ["name" => "Odomo", "srcImg" => "imageProjet/Odomo.jpg", "techno" => "Java"]
        ];

        for ($i = 0; $i < count($projets); $i++) {
            if ($i % 4 === 0) {
                echo "<tr>";
            }
            
            echo "<td>";
            echo "<a href='Presentation.php' class='explore-linkFront'>";
            echo "<img class='ImageProjet' alt='" . $projets[$i]['name'] . "' src='" . $projets[$i]['srcImg'] . "'>";
            echo "<p>" . $projets[$i]['name'] . " - " . $projets[$i]['techno'] . "</p>";
            echo "</a>";
            echo "</td>";
            
            if (($i + 1) % 4 === 0 || $i === count($projets) - 1) {
                echo "</tr>";
            }
        }

        
        ?>
    </table>

    <div id="vide"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js"></script>
    <script src="etoile.js"></script>
</body>
</html>