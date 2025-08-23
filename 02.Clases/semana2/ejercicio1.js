// Importa la función 'ask' desde otro archivo para poder pedir datos al usuario.
const { ask } = require('../helpers/input.js');

// Define una función llamada 'saludar' que recibe un nombre y muestra un saludo en la consola.
// Una función es un bloque de código que realiza una tarea específica.
async function saludar(nombre) {
  // Muestra un mensaje de saludo en la consola usando el nombre recibido.
  console.log(`Hola estimada(o): ${nombre}, espero que tengas un buen día...`);
}

// Define la función principal del programa.
// Aquí se organiza el flujo principal del programa.
async function main() {
  // Crea una lista (arreglo) de nombres de personas.
  // Un arreglo es una colección de elementos ordenados.
  const personas = ["Ana", "Juan", "Karla", "María", "Pedro"];

  // Muestra un mensaje indicando que se va a saludar en orden ascendente.
  console.log("--------------------- Ascendente -----------------------");

  // Recorre la lista de personas desde el principio hasta el final usando un ciclo for.
  // El ciclo for permite repetir un bloque de código varias veces.
  // i empieza en 0 porque los arreglos en JavaScript comienzan en la posición 0.
  for (let i = 0; i < personas.length; i++) {
    // Saluda a cada persona usando la función 'saludar'.
    saludar(personas[i]);
  }

  // Muestra un mensaje indicando que se va a saludar en orden descendente.
  console.log("--------------------- Descendente -----------------------");

  // Recorre la lista de personas desde el final hasta el principio usando otro ciclo for.
  // j empieza en la última posición del arreglo (personas.length - 1) y va disminuyendo hasta 0.
  for (let j = personas.length - 1; j >= 0; j--) {
    // Saluda a cada persona en orden inverso.
    saludar(personas[j]);
  }

  // Pide al usuario que escriba hasta qué número quiere contar.
  // El usuario debe escribir un número y ese valor se guarda en la variable 'limite'.
  // Se usa Number() para convertir el texto que escribe el usuario en un número.
  let limite = Number(await ask('Hasta que número quieres contar: '));

  // Inicializa un contador en 1.
  let x = 1;

  // Mientras el contador sea menor o igual al número que dio el usuario...
  // El ciclo while permite repetir un bloque de código mientras se cumpla una condición.
  while (x <= limite) {
    // Muestra el valor actual del contador.
    console.log('contador actual: ', x);
    // Aumenta el contador en 1.
    x++;
  }
}

// Ejecuta la función principal para que el programa empiece.
// Esto hace que el programa empiece a funcionar.
main();