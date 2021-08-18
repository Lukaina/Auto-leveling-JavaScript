const numeros = [1, 2, 3, 4];

// document.write(numeros);

//Podría recorrer los números así

// for (numero in numeros) {
//     document.write(numero);
// }

// Pero existe el método Map que recibe un callback. 
//Podría ir el índice si lo queremos usar

numeros.map((numero) => document.write(numero))