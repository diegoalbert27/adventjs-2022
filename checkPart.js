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

// checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

// checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
