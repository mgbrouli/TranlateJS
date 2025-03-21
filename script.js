const campoA = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j',
    'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't',
    'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', ' ']
const campoB = ['01000001', '01100001', '01000010', '01100010', '01000011', '01100011', '01000100', '01100100', '01000101',
    '01100101', '01000110', '01100110', '01000111', '01100111', '01001000', '01101000', '01001001', '01101001',
    '01001010', '01101010', '01001011', '01101011', '01001100', '01101100', '01001101', '01101101', '01001110',
    '01101110', '01001111', '01101111', '01010000', '01110000', '01010001', '01110001', '01010010', '01110010',
    '01010011', '01110011', '01010100', '01110100', '01010101', '01110101', '01010110', '01110110', '01010111',
    '01110111', '01011000', '01111000', '01011001', '01111001', '01011010', '01111010', '00100000']


const texto = document.querySelector("#texto");
const resp = document.querySelector(".resposta");
const escolha = document.getElementsByName("escolha")
const converter = document.querySelector("#converter")
let textoEntrada = []

converter.addEventListener("click", function(){
    resp.value = ''
    if(escolha[0].checked){
        textToBin(texto)
    }else{
        binaToText(texto)
    }
})


function textToBin(entrada){
    
    if(entrada != null){
        for (let i = 0; i < entrada.value.length; i++) {
            resp.value += campoB[campoA.indexOf(entrada.value[i])]
        }
    }
}

function binaToText(entrada){
    let init = 0; 
    let end = 8;
    
    resp.value = ''
    for(let num = 0; num < (entrada.value.length/8); num ++){
        textoEntrada.push(entrada.value.substring(init, end))
        init += 8
        end += 8
        resp.value += campoA[campoB.indexOf(textoEntrada[num])]
    }

}