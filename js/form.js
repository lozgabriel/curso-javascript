var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacienteNovo = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(pacienteNovo);
    //se erro.length for maior que 0 é que existe erro
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(pacienteNovo)
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(pacienteNovo){
    var pacienteTr = montaTr(pacienteNovo);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    //Para cada item do Array
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(montaPaciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(montaPaciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(montaPaciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(montaPaciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(montaPaciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(montaPaciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Campo Nome em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("Campo Gordura em branco!");
    }

    if(paciente.peso.length == 0){
        erros.push("Campo peso em branco!");
    }

    if(paciente.altura.length == 0){
        erros.push("Campo altura em branco!");
    }


    return erros;
}