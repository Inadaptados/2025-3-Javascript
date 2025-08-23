// Importa la función 'ask' para pedir datos al usuario.
const { ask } = require('../helpers/input');

// Calcula el promedio de una lista de números.
function obtenerPromedio(numeros) {
  let total = 0; // Variable para sumar todos los números.
  for (let i = 0; i < numeros.length; i++) { // Recorre cada número en la lista.
    total = total + numeros[i]; // Suma el número actual al total.
  }
  const promedio = total / numeros.length; // Divide el total entre la cantidad de números.
  return promedio; // Devuelve el promedio.
}

// Encuentra el número mayor en una lista.
function obtenerMayor(numeros) {
  let mayor = numeros[0]; // Empieza suponiendo que el primer número es el mayor.
  for (let i = 0; i < numeros.length; i++) { // Recorre cada número en la lista.
    if (numeros[i] > mayor) { // Si encuentra un número más grande...
      mayor = numeros[i]; // Lo guarda como el nuevo mayor.
    }
  }
  return mayor; // Devuelve el número mayor encontrado.
}

// Encuentra el número menor en una lista.
function obtenerMenor(numeros) {
  let menor = numeros[0]; // Empieza suponiendo que el primer número es el menor.
  for (let i = 0; i < numeros.length; i++) { // Recorre cada número en la lista.
    if (numeros[i] < menor) { // Si encuentra un número más pequeño...
      menor = numeros[i]; // Lo guarda como el nuevo menor.
    }
  }
  return menor; // Devuelve el número menor encontrado.
}

// Devuelve un resumen estadístico con promedio, mayor y menor.
function resumenEstadistico(numeros) {
  const promedio = obtenerPromedio(numeros); // Calcula el promedio.
  const mayor = obtenerMayor(numeros); // Busca el mayor.
  const menor = obtenerMenor(numeros); // Busca el menor.
  return { promedio, mayor, menor }; // Devuelve los tres valores juntos.
}

// Ejemplo 1: Usando ciclo for anidado para buscar vocales
function nombresConVocalFor(nombres) {
  const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']; // Lista de vocales.
  const resultado = []; // Lista para guardar los nombres que empiezan con vocal.

  for (let i = 0; i < nombres.length; i++) { // Recorre cada nombre en la lista.
    let primerLetra = nombres[i][0].toLowerCase(); // Toma la primera letra y la pone en minúscula.
    // Recorre la lista de vocales y compara con la primera letra
    for (let j = 0; j < vocales.length; j++) { // Recorre cada vocal.
      if (vocales[j] === primerLetra) { // Si la vocal es igual a la primera letra...
        resultado.push(nombres[i]); // Guarda el nombre en la lista de resultados.
        break; // Sale del ciclo de vocales porque ya encontró una coincidencia.
      }
    }
  }
  return resultado; // Devuelve la lista de nombres que empiezan con vocal.
}

// Ejemplo 2: Usando el método includes para buscar vocales
function nombresConVocalIncludes(nombres) {
  const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']; // Lista de vocales.
  const resultado = []; // Lista para guardar los nombres que empiezan con vocal.

  for (let i = 0; i < nombres.length; i++) { // Recorre cada nombre en la lista.
    let primerLetra = nombres[i][0].toLowerCase(); // Toma la primera letra y la pone en minúscula.
    // includes revisa si la primera letra está en la lista de vocales
    if (vocales.includes(primerLetra)) { // Si la primera letra está en la lista de vocales...
      resultado.push(nombres[i]); // Guarda el nombre en la lista de resultados.
    }
  }
  return resultado; // Devuelve la lista de nombres que empiezan con vocal.
}

// Función principal del programa.
async function main() {
  const edades = [20, 18, 25, 30, 22]; // Lista de edades.
  const lista = [5, 20, 8, 99, 3]; // Otra lista de números.
  const datos = [70, 80, 90, 100, 85]; // Otra lista de números.
  const nombres = ['Ana', 'Esteban', 'Luis', 'Óscar', 'María']; // Lista de nombres.

  // Muestra el promedio de las edades.
  console.log(`Promedio de edades = ${obtenerPromedio(edades)}`);
  // Muestra el número mayor de la lista.
  console.log(`El número mayor de: ${lista} = ${obtenerMayor(lista)}`);
  // Muestra el número menor de la lista.
  console.log(`El número menor de: ${lista} = ${obtenerMenor(lista)}`);
  // Calcula el resumen estadístico de los datos.
  const estadisticas = resumenEstadistico(datos);
  // Muestra el resumen estadístico completo.
  console.log(estadisticas);
  // Muestra cada valor del resumen estadístico por separado.
  console.log(`El resumen estadístico de: ${datos} es:`);
  console.log(`Promedio: ${estadisticas.promedio}`);
  console.log(`Mayor: ${estadisticas.mayor}`);
  console.log(`Menor: ${estadisticas.menor}`);

  // Muestra los resultados usando ambas funciones para nombres con vocal.
  console.log(`Nombres con vocal (for anidado): ${nombresConVocalFor(nombres)}`);
  console.log(`Nombres con vocal (includes): ${nombresConVocalIncludes(nombres)}`);
}

// Ejecuta la función principal para iniciar el programa.
main();