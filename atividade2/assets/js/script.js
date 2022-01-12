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