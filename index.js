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

// 8. Crear un array combinando dos arrays existentes utilizando el operador spread ( ... ):
const combinacionArrays = [ ...frutas, ...cadenaTexto.split( ', ' ) ];
console.log(combinacionArrays);

// 9. Crear un array con valores únicos utilizando el método Set() y el operador spread ( ... ):
const numeros = [ 1, 2, 4, 8, 12, 20, 1, 2, 44, 12, 20 , 70]
console.log( [...new Set ( numeros )] );

// 10. Crear un array con una función que genere valores dinámicamente:
const generarArray = ( numElementos ) => {
    let array = [];
    for( let i = 0 ; i < numElementos ; i++ ) {
        const valor = Math.floor( Math.random() * 100 );
        array.push(valor);        
    }
    return array;
}
const miArray = generarArray( 5 );
console.log(miArray);

// 11. Obtener la longitud de un array:
const longitudFrutas = frutas.length;
console.log( `La longitud del arreglo frutas es ${longitudFrutas}` );

// 12. Agregar elementos al final del array usando push():

frutas.push( 'Naranja', 'Mango' )
console.log(frutas);

// 13. Eliminar el último elemento del array usando pop():
const nombres = ['Daniel', 'Jorge', 'Jose', 'Miguel', 'Felipe'];
nombres.pop();
console.log(nombres);

// 14. Agregar elementos al principio del array usando unshift():
nombres.unshift('Julian', 'Santiago');
console.log(nombres);

// 15. Eliminar el primer elemento del array usando shift():
nombres.shift()
console.log(nombres);
