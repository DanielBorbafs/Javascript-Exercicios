

const array = [ 10, 12 , 18 , 14 , 16 , 20, 21, 34, 38, 40, 20, 10]

// 01 -  adicione o numero 5 após o primeiro número do array
let indice = 1 
numeroAdicionado = 11
array.splice(indice,0, numeroAdicionado)
console.log(array)

// 02 - Remova o primeiro e o último número do array
const array = [ 10, 11, 12 , 18 , 14 , 16 , 20, 21, 34, 38, 40, 20, 10]
array.pop() 
array.shift()
console.log(array)

//03 -  altere o valor do terceiro número do array
const array = [ 11, 12 , 10 , 14 , 16 , 20, 21, 34, 38, 40, 20]
array[2] = 10
console.log(array)

// 04 - traga todos números pares do array
const array = [ 11, 12 , 10 , 14 , 16 , 20, 21, 34, 38, 40, 20]
const newArray = array.filter((element) => {
    return element % 2 === 0; // Filtrando apenas os números pares
  });
console.log(newArray)


//05 - some todos os números do array
const array = [ 11, 12 , 10 , 14 , 16 , 20, 21, 34, 38, 40, 20]
const soma = array.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(soma);
