let valores = [8, 1, 7, 2, 9, 5]

/*for(let pos = 0; pos < valores.length; pos++) {
valores.sort()
console.log(`${valores}`)
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}