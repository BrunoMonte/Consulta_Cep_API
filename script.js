'use strict'

const preencherForm = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('municipio').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
}
const limparForm = (endereco) =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('municipio').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
}
const Enumero = (numero) => /^[0-9]+$/.test(numero)
const valCep = (cep) => cep.length == 8 && Enumero(cep);

const procurarCep = async () => {
    limparForm();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    
    if(valCep(cep)){
    const infor = await fetch(url);                     //pegando todas informações da url(promessas)
    const endereco = await infor.json();                //depois aplicação em json
    
    if(endereco.hasOwnProperty('erro')){
        alert("CEP INVALIDO")
    }else{
        preencherForm(endereco)
    }
    }else{
        alert("CEP INCORRETO !")
    }
}

document.getElementById('cep')
        .addEventListener('focusout', procurarCep);     //quando ele sair do foco,procura o cep! FUNÇÃO CALLBACK