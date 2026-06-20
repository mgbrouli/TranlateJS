const texto = document.querySelector("#texto");
const resp = document.querySelector(".resposta");
const escolha = document.getElementsByName("escolha")
const converter = document.querySelector("#converter")
let textoEntrada = []

converter.addEventListener("click", function(){
    resp.value = ''
    if(escolha[0].checked){
        resp.value = binaToText(texto.value)
    }else if(escolha[1].checked){
        resp.value = textToBin(texto.value)
    }else if(escolha[2].checked){
        resp.value = textToHex(texto.value);
    }else if(escolha[3].checked){
        resp.value = hexToTex(texto.value)
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

function textToHex(entrada){
    return entrada.split('').map(char =>{
        const hex = char.charCodeAt(0).toString(16);
        return hex.padStart(2, '0')
    }).join(' ');
}

function hexToTex(entrada){
    return entrada.split(' ').map(hex =>{
        const decimal = parseInt(hex, 16);
        return String.fromCharCode(decimal)

    }).join('');
}