/* 
1) Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
a)Transformar todos os elementos em letras maiúsculas. 
*/

let capitais = function () {
    let cap = ["Recife", "Maceió", "Alagoas", "Ceára", "Fortaleza"];
    cap = cap.join(", ");
    cap = cap.toUpperCase();
    console.log(cap);
}
console.log(capitais());

/* 
2) Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
a) Chamar a função e exibir no console o retorno da função.
*/
let numeros = function (){
    for(let n = 100; n < 450; n++) {
        if(n%2 == 0) {
            console.log(n);
        }
    }
}
console.log(numeros());

/* 3) Criar uma função anônima que recebe quatro strings:
a) Concatenar as strings e retornar o resultado.
b) Chamar a função e exibir no console o resultado. 
*/

let conc = function(string1,string2,string3,string4) {
    console.log(string1+string2+string3+string4);
}
console.log(conc("Olá ", "mundo ", "como vai ", "você? "));