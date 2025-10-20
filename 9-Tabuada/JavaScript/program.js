const num = parseFloat(prompt("Digite um número: "));

var tabuada = Array(10);

document.write("Tabuada do " + num + "<br></br>");

//calculo
for(var i = 0; i < 10; i++){
	tabuada[i] = (i + 1) * num;
}

//impressao
for(var i = 0; i < 10; i++){
	document.write("</br>" + (i+1) + " * " + num + " = " + tabuada[i]);
}