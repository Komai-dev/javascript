let num = [1, 2, 3, 88, 100, 6]
num[3] = 4
num[4] = 5
num.push(7)
num.sort()
console.log(`${num}`)
console.log(`${num.length}`)
let pos = num.indexOf(5)
console.log(`O valor 100 está na posição ${pos}`)
console.log(`${num[5]}`)
