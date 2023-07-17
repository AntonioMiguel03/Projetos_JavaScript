var fatorial=1;
var expFator = '';
var num = parseInt(prompt("Digite um número: "));
if(num ==0 || num == 1){
	document.write(num + "! = " + 1);
}
else{
	for(var x = num; x >= 1; x--)
	{
		fatorial=fatorial*x;
		if(expFator != ''){
		  expFator = expFator + ' x ';
		}
		expFator = expFator + x;
		
	}
	document.write(num + "! = " + expFator + " = " + fatorial);
}