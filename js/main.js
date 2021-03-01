//Déclaration des variables
var playerName
var choices= [
    "pierre",
    "feuille",
    "ciseaux"
];
//function
function askName(){

    var playerName=prompt("Merci d'entrer votre nom:");
        while (playerName.length<0)
            var playerName = prompt("Je n'ai pas compris!")
    return playerName
}


function randomComputerChoice(){
    var computerChoice = Math.floor(Math.random()*choices.length)
    return computerChoice
}


//Déroulement
alert("Bienvenue!")
askName();

alert("Bonjour"+ " "+ playerName +"\nPrêt pour une petite partie?")
var playerChoice= prompt("Veuillez choisir entre:\npierre,\nfeuille\nciseaux")