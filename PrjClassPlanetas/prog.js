const planGasosos = document.getElementsByClassName("pg");
const planRochosos = document.getElementsByClassName("pr");

function exibirAlertaRochosos() {
    //alert("Planetas Rochosos");

    //Planetas Rochosos
    for (let i = 0; i < planRochosos.length; i++) {
        //codigo de CSS no JavaScript
        planRochosos[i].style.display = "block";
    }

    //Planetas Gasosos
    for (let i = 0; i < planGasosos.length; i++) {
        //codigo de CSS no JavaScript
        planGasosos[i].style.display = "none";
    }
}

function exibirAlertaGasosos() {
    //alert("Planetas Gasosos");

    //Planetas Rochosos
    for (let i = 0; i < planRochosos.length; i++) {
        //codigo de CSS no JavaScript
        planRochosos[i].style.display = "none";
    }

    //Planetas Gasosos
    for (let i = 0; i < planGasosos.length; i++) {
        //codigo de CSS no JavaScript
        planGasosos[i].style.display = "block";
    }
}