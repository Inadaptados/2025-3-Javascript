// Importa la función 'ask' para pedir datos al usuario.
// Esto permite que el programa pueda interactuar y recibir información escrita por el usuario.
const { ask } = require('../helpers/input.js');

// Define la función principal del programa.
async function main() {
  // Inicializa la variable 'opcion' como una cadena vacía.
  // Esta variable guardará la opción que elija el usuario.
  let opcion = '';
  // Inicializa la lista (arreglo) de frutas como vacía.
  let frutas = [];

  // El ciclo while se repite mientras la opción elegida no sea '3' (Salir).
  while (opcion !== '3') {
    // Muestra el menú de opciones y espera la respuesta del usuario.
    opcion = await ask(`¿Que deseas hacer? \n1. Agregar una fruta. \n2. Eliminar una fruta. \n3. Salir.\n`);

    // Si el usuario elige '1', se agrega una fruta.
    if (opcion === '1') {
      // Pide al usuario el nombre de la fruta que desea agregar.
      let frutaNueva = await ask('¿Qué fruta deseas agregar?: ');
      // Agrega la fruta al final de la lista usando push().
      frutas.push(frutaNueva);
      // Muestra un mensaje confirmando la fruta agregada.
      console.log('Fruta agregada: ', frutaNueva);
      // Muestra la lista actual de frutas.
      console.log(`Frutas disponibles`, frutas);

      // Si el usuario elige '2', se elimina una fruta.
    } else if (opcion === '2') {
      // Si la lista de frutas está vacía, muestra un mensaje y vuelve al menú.
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        // Pide al usuario el nombre de la fruta que desea eliminar.
        let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
        // Busca la posición (índice) de la fruta en la lista.
        let index = frutas.indexOf(frutaEliminar);

        // Si la fruta existe en la lista (índice diferente de -1)...
        if (index !== -1) {
          // Elimina la fruta usando splice().
          frutas.splice(index, 1);
          // Muestra un mensaje confirmando la eliminación.
          console.log(`${frutaEliminar} ha sido eliminada`);
        } else {
          // Si la fruta no se encuentra, muestra un mensaje.
          console.log('Fruta no encontrada');
        }

        // Muestra la lista actual de frutas.
        console.log('Frutas disponibles', frutas);
      }

      // Si el usuario elige '3', muestra un mensaje de despedida.
    } else if (opcion === '3') {
      console.log('Gracias');

      // Si el usuario escribe una opción inválida, muestra un mensaje de error.
    } else {
      console.log('Opción inválida');
    }
  }
}

// Ejecuta la función principal para iniciar el programa.
main();