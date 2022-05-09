const radius = [1, 2, 3, 4]
function area(radius) {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i])
  }
  return output
}
console.log(area(radius))

const diameter = (radius) => {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i])
  }
  return output
}
console.log(diameter(radius))
