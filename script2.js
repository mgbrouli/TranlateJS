
const texto = document.querySelector("#texto");
const resp = document.querySelector(".resposta");
const escolha = document.getElementsByName("escolha")
const converter = document.querySelector("#converter")

converter.addEventListener("click", function(){
    resp.value = ''
    if(escolha[0].checked){
        resp.value = textToBin(texto.value)
    }else{
        resp.value = binaToText(texto.value)
    }
})


function textToBin(entrada){
    
    if(entrada === undefined || entrada.length <= 0 || entrada === null){
        return undefined
    }
    const bin = entrada.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ')
    return bin
}

function binaToText(entrada){
    if(entrada === undefined || entrada.length <= 0 || entrada === null){
        return undefined
    }

    const txt = entrada.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('')
    return txt

}

