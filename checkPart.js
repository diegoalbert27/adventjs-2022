/** 
 * Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para
 * arreglarlos, pero no tienen claro si las piezas que tienen sirven.
 * 
 * Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto
 * es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.
 * Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
 * Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:
 * 
 * checkPart("uwu") // true
 * // "uwu" es un palíndromo sin eliminar ningún carácter
 * checkPart("miidim") // true
 * // "miidim" puede ser un palíndromo después de eliminar la primera "i"
 * // ya que "midim" es un palíndromo
 * 
 * checkPart("midu") // false
 * // "midu" no puede ser un palíndromo después de eliminar un carácter
*/

function checkPart(part) {
  const charts = part.split('')
  if (charts.reverse().join('') === part) {
    return true
  }

  const unsetOneChar = (charts, position) => {
    return charts.filter((chart, index) => index !== position)
  }

  return charts.map((char, index) => {
    const partWithoutAChar = unsetOneChar(charts, index).join('')
    const partWithoutACharReverse = partWithoutAChar.split('').reverse().join('')

    return partWithoutAChar === partWithoutACharReverse
  }).some(isPalindrome => isPalindrome === true)
}

console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
