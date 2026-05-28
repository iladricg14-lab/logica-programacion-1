let num1 = +prompt("Ingresa el primer numero");
let num2 = +prompt("Ingresa el segundo numero");
let num3 = +prompt("Ingresa el tercer numero");

console.log(num1, num2, num3);

// OJO 🧐las || significan "o" y && significa "y" 

if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Hay números iguales");
} else {
    console.log("No hay números iguales");
}

// Atencion 🤓 .sort es para ordenar 

let numeros = [num1, num2, num3];
numeros.sort((a, b) => a - b);

// 🤓 .join es para convertir a texto
//🧐 .slice hace una copia del arreglo y evita modificar el original.
//🧐 .reverse Invierte el orden.

let menorMayor =  numeros.join(", ");
let mayorMenor = numeros.slice().reverse().join(", ");
 
console.log( "De menor a mayor: " + menorMayor );
console.log("De mayor a menor: " +  mayorMenor);