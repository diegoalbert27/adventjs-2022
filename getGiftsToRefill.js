function getGiftsToRefill(a1, a2, a3) {
  const restoreStock = (almacenes) => {
    return almacenes.map((a, index) => {
      return a.filter(gift => almacenes.at(index - 1).indexOf(gift) === -1 && almacenes.at(index - 2).indexOf(gift) === -1)
    })
  }
  return [...new Set(restoreStock([a1, a2, a3]).flat())]
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

console.log(gifts)
