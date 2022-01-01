function enviarDados(){
var nome = document.getElementById("nomeId")
var email = document.getElementById("emailId")
if(nome.value == ""){
    alert("Prezados usuário, favor inserir seus dados!")
} else if(nome.value != ""){
    alert("Olá! " +nome.value+ ", seus dados foram enviados com sucesso! Agradecemos sua atenção! ")
   
} else if(email.value != ""){
alert("Olá! " +email.value+ ", seus dados foram enviados com sucesso! Agradecemos sua atenção! ")

}

}



