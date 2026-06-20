const texto = document.querySelector("#texto");
const resp = document.querySelector(".resposta");
const escolha = document.getElementsByName("escolha")
const converter = document.querySelector("#converter")
let textoEntrada = []

converter.addEventListener("click", function(){
    resp.value = ''
    if(escolha[0].checked){
        resp.value = textToBin(texto.value)
    }else{
        
        resp.value = binaToText(texto.value)
    }
})


function textToBin(entrada){
    
    return entrada.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
    console.log(entrada)
}

function binaToText(entrada){
    return entrada.split(' ').map(char => {
        const decimal = parseInt(char, 2);
        return String.fromCharCode(decimal);
    }).join("");

}