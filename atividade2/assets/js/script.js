let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

let nomeOk = false
let emailOk = false
let mensagemOk = false

let botao = document.querySelector("#botao")

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length < 3){
        txtNome.innerHTML = '<p>Nome inválido</p>'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = '<p>Nome válido</p>'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = '<p>E-mail inválido</p>'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = '<p>E-mail válido</p>'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')

    txtMensagem.style.display = 'block'

    if(mensagem.value.length < 10){
        txtMensagem.innerHTML = '<p>Digite mais para poder enviar.</p>'
        txtMensagem.style.color = 'gray'
    } else if (mensagem.value.length > 50){
        txtMensagem.innerHTML = '<p>Texto muito grande. Digite menos de 100 caracteres.</p>'
        txtMensagem.style.color = 'red'
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar(){
    if(nomeOk && emailOk && mensagemOk){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha todo o formulário antes de enviar!')
    }
}

function botaoOn(){
    botao.style.backgroundImage = 'linear-gradient(to right, rgb(34, 34, 34), black 50%, rgb(34, 34, 34))'
    botao.style.boxShadow = '4px 4px 5px black'
}

function botaoOff(){
    botao.style.backgroundImage = 'linear-gradient(to right, black, black)'
    botao.style.boxShadow = '2px 2px 2px black'
}