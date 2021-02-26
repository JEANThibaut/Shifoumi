/*

//----Welcome message

alert("Bienvenue!");

//----Name request

var person = prompt("Merci d'entrer votre nom");
console.log("Bienvenue " + person);

//----"Ready to play" message

alert("Bonjour "+ person + ", prêt pour une partie?");

*/

//----Choices

var choices=[

    "pierre",
    "feuille",
    "ciseaux"
];


//-----player choice

var playerChoice = prompt("Veuillez choisir entre: \n pierre \n feuille \n ciseaux") 
console.log(playerChoice)

//----computer choice

var choices =[
    "pierre",
    "feuille",
    "ciseaux"
];

var i= Math.floor(Math.random()*3);
console.log(i);

var computerChoice = choices[i];
console.log("L'ordinateur a choisi " + computerChoice);

//------Compare Choices for winner or looser

if(playerChoice === computerChoice)
    console.log("Match Nul")

    else if ((playerChoice === "ciseaux" && computerChoice === "feuille") || (playerChoice === "pierre" && computerChoice === "feuille")
        || (playerChoice === "feuille" && computerChoice === "pierre"))
        console.log("gagné")

        else
            console.log("perdu")