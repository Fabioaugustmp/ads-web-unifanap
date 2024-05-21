// Linguagem de tipagem fraca (Aceita qualquer tipo de valor)
// let (Varíavel pode ser alterada em execução)
// let nome = "Fabio Paula"
// nome = "Fabio"
// const (Variaveis constantes)
// const token = "ValorImutavel"

//Código incremental
let contador = 0;
let divElement = window.document.getElementById("incrementResult")
let alert = window.document.getElementById("alert")
console.log(divElement)

function incrementar(){
    //atribui o novo valor que = valor existente contador + 1
    // contador = contador + 1
    console.time()
    console.log("Entrei na função incrementar")
    console.log("O contador estava em: ", contador)
    contador ++;
    console.log("O contador foi definido para: ", contador)
    console.timeEnd()

    // Manipulação da DOM
    divElement.innerHTML = `<p>O resultado incremental é
     <mark>${contador}</mark></p>`
}   

function zerar() {
    confirm = window.confirm("Deseja mesmo zerar o contador?")
    console.log(confirm)

    if(confirm){
        contador = 0;
        divElement.innerHTML = `<p>O resultado da incrementação foi zerada!</p>`
        
        alert.innerHTML = `<div class="alert alert-success" role="alert">
        Valor zerado com sucesso!
      </div>`

    } else {
        window.alert("Pedido de cancelamento não efetuado!")
    }
}