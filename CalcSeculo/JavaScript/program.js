var dataBR = prompt("Digite a data de nascimento: ");

var datearray = dataBR.split("/");

//converte data BR para data em padrao Americano
var dataAmericana = datearray[1] + '/' + datearray[0] + '/' + datearray[2];

//dia = datearray[0]
//mes = datearray[1]
//ano = datearray[2]

const ano = parseInt(datearray[2]);

const seculo = Math.floor((ano-1)/100) + 1;

document.write("Você nasceu no século " + seculo);
