/**
 * Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que
 * quieren fabricar es un cubo que se pone en los árboles.
 * 
 * El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para
 * lograrlo.
 * 
 * Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con
 * el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:
 * 
 * const cube = createCube(3)
 *   /\_\_\_\
 *  /\/\_\_\_\
 * /\/\/\_\_\_\
 * \/\/\/_/_/_/
 *  \/\/_/_/_/
 *   \/_/_/_/
 * 
 * A tener en cuenta:
 * 
 * Fíjate bien en los espacios en blanco que hay en el cubo.
 * El cubo tiene que ser simétrico.
 * Asegúrate de usar los símbolos correctos.
 * Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.
 */

function createCube(size) {
  let firstSide = ''
  const faceOne = "_\\".repeat(size)
  for (let index = 1; index <= size; index++) {
    firstSide += " ".repeat(size - index) + "/\\".repeat(index) + faceOne + "\n"
  }

  let secondSide = firstSide
    .split("\n")
    .reverse()
    .join("\n")
    .replace("\n", "")
    .replaceAll("/\\", "\\/")
    .replaceAll("_\\", "_/")

  return firstSide + secondSide
}

const cube = createCube(12)
console.log(cube)
