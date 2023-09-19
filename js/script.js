const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", ()=> verificaCampo(campo));
}); //inseri um ouvidor de eventos em cada elemento da array

function verificaCampo(campo){
    
}