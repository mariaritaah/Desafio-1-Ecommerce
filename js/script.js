function  validarFormulario() {
	
	if(document.form1.nome.value=="") {
		alert("Por favor, preencha o campo nome");
		document.form1.nome.focus();
		return false;
	}
	if(document.form1.cpf.value=="") {
		alert("Por favor, preencha o campo cpf");
		document.form1.cpf.focus();
		return false;
	}
	
	if(form1.email.value.indexOf("@") == -1 ||
		form1.email.value.indexOf(".") == -1 || form1.email.value == "" ||
		form1.email.value == null) {
		alert("Por favor, informe-nos um e-mail válido.");
		form1.email.focus();
		return false;
	}

	if(document.form1.telefone.value=="") {
		alert("Por favor, preencha o campo telefone");
		document.form1.telefone.focus();
		return false;
	}
	if(document.form1.cidade.value=="") {
		alert("Por favor, preencha o campo cidade");
		document.form1.cidade.focus();
		return false;
	}
	if(document.form1.sexo.value=="") {
		alert("Por favor, preencha o campo sexo");
		document.form1.sexo.focus();
		return false;
	}
	
	
}

function validarForm2() {
	
	var descricao = form2.descricao.value;
	var setor = form2.setor.value;
	var fornecedor = form2.fornecedor.value;
	var tipo = form2.tipo.value;
	
	
	if(document.form2.descricao.value=="") {
		alert("Por favor, preencha o campo descricao");
		document.form2.nome.focus();
		return false;
	}
	if(document.form2.setor.value=="") {
		alert("Por favor, preencha o campo setor");
		document.form2.setor.focus();
		return false;
	}if(document.form2.fornecedor.value=="") {
		alert("Por favor, preencha o campo fornecedor");
		document.form2.fornecedor.focus();
		return false;
	}if(document.form2.tipo.value=="") {
		alert("Por favor, preencha o campo tipo");
		document.form2.tipo.focus();
		return false;
	}

}	

function mascara(telefone){ 
   if(telefone.value.length == 0)
     telefone.value = '(' + telefone.value; 
   if(telefone.value.length == 3)
      telefone.value = telefone.value + ') '; 
 
 if(telefone.value.length == 8)
     telefone.value = telefone.value + '-'; 
  
}
function TestaCPF(strCPF) {
	var Soma;
	var Resto;
	Soma = 0; 
		if (strCPF == "00000000000")
		return false;
		for (i=1; i<=9; i++)
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
		Resto = (Soma * 10) % 11;
	if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
	if (Resto != parseInt(strCPF.substring(9, 10)) )
	return false;
	Soma = 0;
	for (i = 1; i <= 10; i++)
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;
	if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
	if (Resto != parseInt(strCPF.substring(10, 11) ) )
	return false;
	return true;
}



