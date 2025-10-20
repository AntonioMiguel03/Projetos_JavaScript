const a = parseFloat(prompt('Digite um número: '));

const b = parseFloat(prompt('Digite outro número: '));

var c = prompt('Digite uma das seguintes operações: \n+ \n- \n* \n/');

if(c == '+'){
	const d = a + b;
	document.write(a + " + " + b + " = " + d);
}
else if(c == '-'){
	const d = a - b;
	document.write(a + " - " + b + " = " + d);
}
else if(c == '*'){
	const d = a * b;
	document.write(a + " * " + b + " = " + d);
}
else{
	const d = a / b;
	document.write(a + " / " + b + " = " + d);
}