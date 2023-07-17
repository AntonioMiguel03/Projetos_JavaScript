let btnIniciar = document.getElementById('iniciar');
let btnParar = document.getElementById('parar');
let btnResetar = document.getElementById('resetar');

let hora = 00;
let minuto = 00;
let segundo = 00;
let contador = 00;

btnIniciar.addEventListener('click', function () {
	tempo = true;
	cronometro();
	btnIniciar.innerText = "Iniciado";
});

btnParar.addEventListener('click', function () {
	tempo = false;
	btnIniciar.disabled = false;
	if(contador != 00)
		btnIniciar.innerText = "Continuar";
});

btnResetar.addEventListener('click', function () {
	tempo = false;
	hora = 0;
	minuto = 0;
	segundo = 0;
	contador = 0;
	document.getElementById('hor').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('seg').innerHTML = "00";
	document.getElementById('contador').innerHTML = "00";
	
	btnIniciar.disabled = false;
	btnIniciar.innerText = "Iniciar";
});

function cronometro() {
	if (tempo) {
		contador++;

		if (contador == 100) {
			segundo++;
			contador = 0;
		}

		if (segundo == 60) {
			minuto++;
			segundo = 0;
		}

		if (minuto == 60) {
			hora++;
			minuto = 0;
			segundo = 0;
		}

		let horString = hora;
		let minString = minuto;
		let segString = segundo;
		let contadorString = contador;

		if (hora < 10) {
			horString = "0" + horString;
		}

		if (minuto < 10) {
			minString = "0" + minString;
		}

		if (segundo < 10) {
			segString = "0" + segString;
		}

		if (contador < 10) {
			contadorString = "0" + contadorString;
		}

		document.getElementById('hor').innerHTML = horString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('seg').innerHTML = segString;
		document.getElementById('contador').innerHTML = contadorString;
		setTimeout(cronometro, 10);
	}
}