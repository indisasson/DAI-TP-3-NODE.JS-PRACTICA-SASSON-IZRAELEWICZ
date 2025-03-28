//ejercicio 1: Mostrar un mensaje por consola.
console.log("hola")

//ejercicio 2: Mostrar los valores de un array en la consola utilizando una función tradicional y una función flecha
let numeros = [1,20,4,55,79,0,20]

function mostrarArray(){
    console.log("funcion tradicional:  ")
    console.log(numeros)
}

const mostrarArray2 = () => {
    console.log("funcion flecha: ")
    numeros.forEach(num => console.log(num));
}
mostrarArray();
mostrarArray2();

//ejercicio 3: Agregar un valor a un array y mostrar el array por consola (usar funciones flecha)
const agregarYMostrarValor = () => {
    console.log("agregamos numero 100 en la ultima posicion")
    numeros.push(100)
    numeros.forEach(num => console.log(num));
}
agregarYMostrarValor();

//ejercicio 4: Encontrar la última posición en la que aparece un elemento dentro de un array (Usar el método lastIndexOf())
const ultimoElementoArray = () => console.log(`el ultimo elemento esta en la posicion ${numeros.lastIndexOf(100)}`);
ultimoElementoArray();

//ejercicio 5: Mostrar la sumatoria de todos los valores de un array de números

const sumarArray = () => {
    let sumaArray = 0;
    numeros.forEach(num => sumaArray += num)
    console.log(`la suma de los elementos del array es: ${sumaArray}`)

};
sumarArray();

//ejercicio 6: Invertir el orden de los elementos de un array (reverse)
const invertirArray = () =>console.log(`array invertido: ${numeros.reverse()}`)
invertirArray();

//ejercicio 7: Ordenar los valores de un array numérico de menor a mayor (sort)
const ordenarArray = () =>console.log(`array ordenado: ${numeros.sort(function(a, b){return a - b})}`)
ordenarArray();

//ejercicio 8:  Filtrar los números mayores a un valor dado dentro de un array (filter)
const mayoresA21 = () => console.log(`los numeros del array mayores a 21 son: ${numeros.filter(n => n>21)}`)
mayoresA21();

//ejercicio 9: Contar cuántas veces aparece un elemento dentro de un array
const contador = numeros.reduce((acumulador, num) => {
    if (!acumulador.hasOwnProperty(num)) {
        acumulador[num] = 1;
    } else {
        acumulador[num]++;
    }
    return acumulador;
}, {});

console.log(contador);