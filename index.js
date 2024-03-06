// Inicializacion Proyecto Git

// 1. Crear un array vacío:
let arrayVacio = [];
console.log(arrayVacio);

// 2. Crear un array con elementos:
let frutas = ['Manzana', 'Pera', 'Mango', 'Banano'];
console.log(frutas);

// 3. Crear un array con elementos de diferentes tipos de datos:
let diferentesDatos = [true, 25, 'Hola']
console.log(diferentesDatos);

// 4. Crear un array utilizando el constructor Array():
const arr = new Array( 3 );
console.log(arr);

// 5. Crear un array con una secuencia numérica usando el método Array.from():
const rango = (inicio, fin, paso) =>
Array.from({ length: ( fin - inicio ) / paso + 1 }, ( _, i ) => inicio + i * paso );
console.log(rango (-2, 3, 1));

// 6. Crear un array mediante la repetición de un valor utilizando el método Array.fill():
const arr1 = new Array( 4 )
arr1.fill( 7 )
console.log(arr1);

// 7. Crear un array a partir de una cadena de texto usando el método String.split():
const cadenaTexto = 'Daniel, Jorge, Diego, José, Miguel';
console.log( cadenaTexto.split( ', ' ) );