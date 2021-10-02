/* 
1) Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:
a) Chamar a função e exibir o resultado no console. 
*/
/*
let pessoas = function(){
    let aprovados = [
        {candidato: "Renato Soares", nota: 7.8, idade: 29},
        {candidato: "Marcos Texeira", nota: 7.8, idade: 26},
        {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
        {candidato: "João Oliveira", nota: 7.8, idade: 27},
        {candidato: "Adriana Telles", nota: 7.8, idade: 28}

    ];
    for(let valor = 0; valor <= aprovados.length; valor++){
        if(aprovados[valor].idade > 28 && aprovados[valor].idade < 30){
            console.log(aprovados[valor])
        }
    }
}
console.log(pessoas());
*/





/* 
2) Criar um função anônima que recebe uma string como parâmetro:
a) Repetir o valor do parâmetro 37 vezes.
b) Retornar o Resultado.
c) Chamar a função e exibir o resultado no console. 
*/

let repetir = function(string1) {
    for(nome = 0; nome <= 37; nome++) {
        console.log(string1)
    }
}
console.log(repetir("Henrique"));