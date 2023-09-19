export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, ""); //procura por . ou - e substitui por nada "".
    validaNumerosRepetidos(cpf);

    console.log(validaNumerosRepetidos(cpf));
};

function validaNumerosRepetidos(cpf){
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numeroRepetidos.includes(cpf);
}