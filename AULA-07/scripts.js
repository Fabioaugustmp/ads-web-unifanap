// Convenção - Pascal Case Camel Case

function calculo(min, max) {
    console.log(min.value)
    console.log(max.value)
    sortearNumero(parseInt(min), parseInt(max))

    let number = window.document.getElementById("min").valueAsNumber;
}

function sorteio(min, range, random){
    return min + Math.trunc(range * random)
}

// Precisamos sortear um numero atraves de um dado intervalo, 
// O sorteio precisa ser randomico (random)
//** Função que realizar o sorteio de um número */
function sortearNumero(min, max) {
    //let min = 1; // valor mínimo a ser sorteado
    //let max = 1000; //valor máximo a ser sorteado
    let range = max - min //range (intervalo)

    let random = Math.random(); //Gera um número aleatório
    console.log(random)
    // let result = min + Math.trunc(range * random);
    let result = sorteio(min, range, random);

    //Peguem o result e coloquem em um alert na tela abaixo do card
    
}


function zerarSorteio() {

}