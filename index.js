const display = document.getElementById("resultat");

function appendToDisplay(input){
    display.value += input;
}

function viderDisplay(){
    display.value = "";
}

function calculer(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "*Invalide*";
    }
}