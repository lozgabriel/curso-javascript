var pacientesList = document.querySelectorAll(".paciente");

var tabelaList = document.querySelector("table");
// event.target para selecionar o filho de table
tabelaList.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

});