const Projet = [
    {name : "Pacman", srcImg : "imageProjet/Pacman.png", techno : "Python"},
    {name : "2048", srcImg : "imageProjet/2048.png", techno : "Python"},
    {name : "Forgotten", srcImg : "imageProjet/Forgotten.png", techno : "C#/Unity"},
    {name : "Apexdle", srcImg : "imageProjet/Apexdle.png", techno : "JS"},
    {name : "CarbonTracker", srcImg : "imageProjet/CarbonTracker.png", techno : "C#"},
    {name : "Unideckbuilders", srcImg : "imageProjet/Unideckbuilders.png", techno : "C#"},
    {name : "Labyrinth", srcImg : "imageProjet/Labyrinth.png", techno : "Java"},
    {name : "Towa", srcImg : "imageProjet/Towa.jpg", techno : "Java"},
    {name : "Odomo", srcImg : "imageProjet/Odomo.jpg", techno : "Java"}
]
const DIVPROJET = document.getElementById("tableProjet");

for(i=0;i<Projet.length;i++){
    var a = i;
    if( a % 4 === 0){
        var ligne = document.createElement("tr");
    }
    var col = document.createElement("td");
    var link = document.createElement("a");
    link.href = "Presentation.html";
    link.className="explore-linkFront";
   img = document.createElement("img");
   img.className="ImageProjet";
   img.alt = Projet[i].name;
   img.src = Projet[i].srcImg;
   link.appendChild(img);
   var Titre = document.createElement("p");
   Titre.textContent = Projet[i].name + " - " + Projet[i].techno;
   link.appendChild(Titre);
   col.appendChild(link);
   ligne.appendChild(col);
   if( (i+1) % 4 === 0){
    DIVPROJET.appendChild(ligne);
    }
   
}
