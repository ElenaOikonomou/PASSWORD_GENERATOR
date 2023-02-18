const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById("generate-button");
let codePlacement = document.getElementById("code-placement");
let codePlacement2 = document.getElementById("code-placement2");

generateButton.addEventListener("click", function(){
    let passWord = "";
    let passWordTwo = "";
    for(let i = 0; i < 12; i++){
        let indexTwo = Math.floor(Math.random() * characters.length);
        let index = Math.floor(Math.random() * characters.length);
        passWordTwo += characters[indexTwo];
        passWord += characters[index];}

        codePlacement.textContent = passWord;
        codePlacement2.textContent = passWordTwo;
})




