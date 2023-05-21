const nome = document.getElementById("name");
const telefone = document.getElementById("phone");
const email = document.getElementById("email");
const form = document.getElementById("form-contato");
const lista = document.getElementById("lista-contato");
let novaLinha = ' '
const spanSucesso = '<span id="contato-criado" class="sucesso">Contato criado com sucesso!</span>'
const corpo = document.getElementsByClassName('container');

form.addEventListener('submit', salvarContato)

function salvarContato(salvar){
    salvar.preventDefault();
    
    let conteudoLinha = '';
    conteudoLinha += '<tr>'
    conteudoLinha += `<td> ${nome.value} </td>`
    conteudoLinha += `<td> ${telefone.value} </td>`
    conteudoLinha += `<td> ${email.value} </td>`
    conteudoLinha += '</tr>'

    novaLinha += conteudoLinha

    lista.innerHTML = novaLinha;
    nome.value = ''
    telefone.value = ''
    email.value = ''
    nome.focus();
}
