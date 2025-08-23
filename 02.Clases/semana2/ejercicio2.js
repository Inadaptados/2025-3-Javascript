// Importa la función 'ask' para pedir datos al usuario.
const { ask } = require('../helpers/input.js');

// Define la función principal del programa.
async function main() {
  // Crea una lista de frutas.
  // Una lista (arreglo) es una colección de elementos ordenados.
  // En este caso, cada elemento es el nombre de una fruta.
  const frutas = ['Fresas', 'Mango', 'Kiwi', 'Manzana', 'Uvas'];

  // Pregunta al usuario qué cajón quiere abrir (del 1 al 5).
  // El usuario debe escribir un número entre 1 y 5.
  // El resultado se convierte a número con Number().
  const cajon = Number(await ask('¿Qué cajón quieres abrir? (1-5)'));

  // Recorre los números del 1 al 5 usando un ciclo for.
  // El ciclo for permite repetir un bloque de código varias veces.
  for (let i = 1; i <= 5; i++) {
    // Si el número actual (i) es igual al cajón elegido por el usuario...
    if (i === cajon) {
      // Muestra qué fruta hay en ese cajón.
      // Las listas en JavaScript empiezan en la posición 0.
      // Por ejemplo, frutas[0] es 'Fresas', frutas[1] es 'Mango', etc.
      // Por eso, para el cajón 1 usamos frutas[0], para el cajón 2 usamos frutas[1], y así sucesivamente.
      // Para lograr esto, usamos i - 1 como el índice de la lista.
      console.log('En el cajón ' + i + ' hay ' + frutas[i - 1]);
    }
  }
}

// Ejecuta la función principal para iniciar el programa.
// Esto hace que el programa empiece a funcionar.
main();