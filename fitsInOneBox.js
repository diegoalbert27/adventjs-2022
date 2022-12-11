function fitsInOneBox(boxes) {
  return boxes
    .map(box => box.l + box.w + box.h)
    .sort((a, b) => b - a)
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes)) // true
