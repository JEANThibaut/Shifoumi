

//----Welcome message

alert("Bienvenue!");

//----Name request

var person = prompt("Merci d'entrer votre nom");
console.log("Bienvenue " + person);

//----"Ready to play" message

alert("Bonjour "+ person + ", prêt pour une partie contre moi?");


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




 //Variables for results
var result 
var draw = "Match Nul !"
var win = "Gagné !"
var loose = "Perdu!" 
//------Compare Choices for winner or looser

//Match nul  
if(playerChoice === computerChoice){
  
result= draw;
console.log(result)

//Gagné
        }else if ((playerChoice === "ciseaux" && computerChoice === "feuille") || (playerChoice === "pierre" && computerChoice === "feuille")
        || (playerChoice === "feuille" && computerChoice === "pierre")){
            result= win
        console.log(result)

//Perdu
        }else{
            result=loose
            console.log(result)

        }
    
        alert( ("Résultats :") + "\n" + ("Vous : " + playerChoice + "\n") + ("Moi : " + computerChoice + "\n") + result )
       
        
       
