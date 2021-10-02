/* 
1) Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
a) Se o número for múltiplo de 5, retornar "Bora".
b) Se o número for múltiplo de 3, retornar "Dale".
c) Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
d) Chamar a função e exibir no console o resultado. 
*/

let valor = (numero) =>{
    if (numero%5 == 0 && numero%3 == 0) {
        console.log("JAVASCRIPT");
    } else if (numero%3 == 0) {
        console.log("Dale");
    } else if (numero%5 == 0) {
        console.log("Bora");
    }  else console.log("Não é multiplo de 5 nem de 3");
}
console.log(valor())

/* 
2) Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário.
a) Escrever o signo referente a data de aniversário de acordo com a tabela acima.
b) Chamar a função e exibir no console o resultado. 
*/

let aniversario = (dia, mes) =>{
    if(dia >= 21 && mes == "Março" || dia <= 20 && mes == "Abril"){
        console.log("Áries")
    }else if(dia >= 21 && mes == "Abril" || dia <= 20 && mes == "Maio"){
        console.log("Touro")
    }else if(dia >= 21 && mes == "Maio" || dia <= 20 && mes == "Junho"){
        console.log("Gêmeos")
    }else if(dia >= 21 && mes == "Junho" || dia <= 20 && mes == "Julho"){
        console.log("Cancer")
    }else if(dia >= 23 && mes == "Julho" || dia <= 22 && mes == "Agosto"){
        console.log("Leão")
    }else if(dia >= 23 && mes == "Agosto" || dia <= 22 && mes == "Setembro"){
        console.log("Virgem")
    }else if(dia >= 23 && mes == "Setembro" || dia <= 22 && mes == "Outubro"){
        console.log("Libra")
    }else if(dia >= 23 && mes == "Outubro" || dia <= 22 && mes == "Novembro"){
        console.log("Escorpião")
    }else if(dia >= 22 && mes == "Novembro" || dia <= 21 && mes == "Dezembro"){
        console.log("Sagitário")
    }else if(dia >= 22 && mes == "Dezembro" || dia <= 19 && mes == "Janeiro"){
        console.log("Capricórnio")
    }else if(dia >= 20 && mes == "Janeiro" || dia <= 18 && mes == "Fevereiro"){
        console.log("Aquário")
    }else if(dia >= 19 && mes == "Fevereiro" || dia <= 20 && mes == "Março"){
        console.log("Peixes")
    }
}
console.log(aniversario(13,"Agosto"))