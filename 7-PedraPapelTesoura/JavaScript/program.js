do{	
	var usr = prompt('Digite: \n1-Pedra \n2-Papel \n3-Tesoura \n4-Encerrar');
	
	//caso o usuario digite 4 ou clique no botao cancelar
	if(usr == 4 || usr === null)
		break;
	
	if(usr < 1 || usr > 4)
		alert('Valor Inválido!');
	else{
	
		var pc = Math.random(); 

		if(pc <= 0.33)
			pc = 1;

		if(pc > 0.33 && pc <= 0.66)
			pc = 2;
		else
			pc = 3;

		alert('Escolha da Máquina: ' + pc);    

		//empate
		if(usr == pc)    
			alert('Empate!');

		//Pedra quebra tesoura
		if(usr == 1 && pc == 3)
			alert('Vitória do Usuário');

		else if(usr == 3 && pc == 1)
			alert('Vitória da Máquina');

		//Tesoura corta papel
		else if(usr == 2 && pc == 3)
			alert('Vitória da Máquina');

		else if(usr == 3 && pc == 2)
			alert('Vitória do Usuário');    

		//Papel cobre a pedra
		else if(usr == 2 && pc == 1)
			alert('Vitória do Usuário'); 

		else if(usr == 1 && pc == 2)
			alert('Vitória da Máquina'); 
	}
}while(usr != 4);