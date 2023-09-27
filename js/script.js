import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", ()=> verificaCampo(campo));
}); //inseri um ouvidor de eventos em cada elemento da array

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }// se atendidos as condições ele executará a função ehUmCPF(campo)
    if(campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }
}