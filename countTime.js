function countTime(leds) {
  let totalTime = 0
  while (leds.some((led, index) => led === 0 && leds.at(index - 1) === 1)) {
    const ledsPowered = leds.map((led, index) => {
      if (led === 0 && leds.at(index - 1) === 1) {
        return led + 1
      }

      return led
    })

    leds = [...ledsPowered]

    totalTime += 7
  }

  return totalTime
}

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds)) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
