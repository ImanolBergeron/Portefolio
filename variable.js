const variable =[
    {
        name: "Pacman",
        quickPresentation:"a small replica of the famous Pacman game",
        Language:"Python,Pygame",
        Environment:"VSCode,Thony",
        SoftSkill:[
            'Identifying and resolving issues creatively and efficiently',
            'Guiding the group with a clear vision for the project.',
            'Understanding of the Pygames Library'
        ],
        ProjectDescription:"This Project is as the name implies, a simple replica of the pacman game. I made this Project in HightSchool with 2 friend of mine."+
                            " We took the initial principle of Pacman, changed the fore and back-ground and the sprits of all the differents entity."+
                            "here the Player Control a luigi sprite to navigate across a Labyrinth filled with point that the player will need to get."+
                            "the objective is to get all the point in the labyrinth without getting killed by the 4 gost that are wandering around the labyrinth"+
                            "We implemented nearly everythings in the game : We got the point systeme down with a score that is recorded in a score.txt file after your game"+
                            "and is related to the pseudonyme you enter as you start the game. we also got the super point power up wich is a mechanic that allow you to eat the "+
                            "gost for a short amount of time making the player gain score point and safety (the gost still respawn after a little time), To end it we also got the "+
                            "'TP' mechanique wich is a little hole in the extremity wall that alow you to teleport from one side to the other.We had lots of fun and difficulty during "+
                            "this project trying to adjust the 'gravity' of the game but in the end we managed to get it right.",
        Lien:"https://github.com/ImanolBergeron/Pacman",
        Images:[
            'imageProjet/Pacman.png',
            'imageProjet/2048.png',
            'imageProjet/Apexdle.png'
        ]
    },
    {
        name: "2048",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ],
         ProjectDescription:"",
         Lien:"",
         Images:[
            'adead',
            'adadaz'
        ]
    },
    {
        name: "Apexdle",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ],
        ProjectDescription:"",
        Lien:"",
        Images:[
            'adead',
            'adadaz'
        ]
    },
    {
        name: "CarbonTracker",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ],
        ProjectDescription:"",
        Lien:"",
        Images:[
            'adead',
            'adadaz'
        ]
    },
    {
        name: "Unideckbuilders",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ],
        ProjectDescription:"",
        Lien:"",
        Images:[
            'adead',
            'adadaz'
        ]
    },
    {
        name: "Labyrinth",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ],
        ProjectDescription:"",
        Lien:"",
        Images:[
            'adead',
            'adadaz'
        ]
    },
    {
        name: "Towa",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ],
        ProjectDescription:"",
        Lien:"",
        Images:[
            'adead',
            'adadaz'
        ]
    },
    {
        name: "Odomo",
        quickPresentation:"",
        Language:"",
        Environment:"",
        SoftSkill:[
            'adead',
            'adadaz'
        ], 
        ProjectDescription:"",
        Lien:"",
        Images:[
            'adead',
            'adadaz'
        ]
    }
];

const EltName = document.getElementById("name");
const EltPresentation = document.getElementById("quickPresentation");
const EltNLanguage = document.getElementById("Language");
const EltEnvironment = document.getElementById("Environment");
const EltSkill = document.getElementById("SoftSkill");
const EltDescription = document.getElementById("ProjectDescription");
const EltImages = document.getElementById("Images");

function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}


variable.forEach(projet=>{
    if(projet.name === getCookie('projet')){
        EltName.textContent = projet.name;
        EltPresentation.textContent = projet.quickPresentation;
        EltNLanguage.textContent = projet.Language;
        EltEnvironment.textContent = projet.Environment;
        projet.SoftSkill.forEach(skill=>{
            let elt = document.createElement('li');
            elt.textContent = skill;
            EltSkill.appendChild(elt);
        });
        EltDescription.textContent = projet.ProjectDescription;
        if(projet.Lien != ""){
            let lienProject = document.createElement('a');
            lienProject.href = projet.Lien;
            lienProject.textContent = "You can see the whole project at : " + projet.Lien;
            EltDescription.appendChild(lienProject);
        }
        
        projet.Images.forEach(Image=>{
            let elt = document.createElement('img');
            elt.src = Image;
            elt.alt = projet.name;
            EltImages.appendChild(elt);
        });
    }
});