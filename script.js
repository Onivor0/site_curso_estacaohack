//Script por Isaac
//recuperando usuario e senha do HTML
var inputUsuario = document.getElementById('usuario')
var inputSenha = document.getElementById('senha')

//manipulação modal
var myModalButton = document.getElementById('myModalButton')
var myModalText = document.getElementById('myModalText')

function autenticar(event){
  //Interromper evento de submit
  event.preventDefault()

  //consistência
  if(inputUsuario.value == 'admin' && inputSenha.value ==  '1234'){
    myModalText.innerText = 'Usuario Logado!'
  }else {
   myModalText.innerText= 'Usuario ou senha inválido' 
  }
  myModalButton.click()
}