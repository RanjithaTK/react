const radius = [1, 2, 3, 4]

const diameter = (radius) => {
  return 2 * radius
}
const area = (radius) => {
  return Math.PI * radius * radius
}

const calculate = (radius, operation) => {
  const output = []
  for (let i = 0; i < radius.length; i++) {
    output.push(operation(radius[i]))
  }
  return output
}
console.log(calculate(radius, area))
console.log(calculate(radius, diameter))
