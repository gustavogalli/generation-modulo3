let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length < 3){
        txtNome.innerHTML = '<p>Nome inválido</p>'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = '<p>Nome válido</p>'
        txtNome.style.color = 'green'
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
    }
}

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length < 10){
        txtMensagem.innerHTML = '<p>Mensagem muito pequena. Digite mais!</p>'
        txtMensagem.style.color = 'gray'
    } else if (mensagem.value.length > 50){
        txtMensagem.innerHTML = '<p>Texto muito grande. Digite menos de 100 caracteres.</p>'
        txtMensagem.style.color = 'red'
    } else {
        txtMensagem.innerHTML = '<p>Mensagem já pode ser enviada!</p>'
        txtMensagem.style.color = 'green'
    }
}