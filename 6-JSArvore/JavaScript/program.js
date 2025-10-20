var qtdLinhas = prompt('Digite a quantidade de linhas: ');

document.write("Total de linhas: " + qtdLinhas + "</br>");

document.write("</br>Arvore Centralizada: ");

for(var i = 0; i < qtdLinhas; i++){
	document.write("</br>");
	for(var j = 0; j < qtdLinhas; j++){	
		if(j < qtdLinhas-i-1){
            document.write("&nbsp;");
        }
		else{
			document.writeln("*");
		}
	}
}

document.write("<br></br> Arvore Alinhada a Esquerda: ");

for(var i = 0; i < qtdLinhas; i++){		
	document.write("</br>");
	
	for(var j = 0; j <= i; j++){
		document.writeln("*");
	}
}

document.write("<br></br> Arvore Alinhada a Direita: ");

var qtdColunas = qtdLinhas - 1;

for(var i = 0; i <= qtdLinhas; i++){
	document.write("</br>");
	
	for(var j = 0; j <= qtdColunas; j++){
		document.write("&nbsp;&nbsp;&nbsp;");
	}	
	qtdColunas = qtdColunas - 1;
	
	for(var c = 0; c < i; c++){
		document.writeln("*");
	}
}