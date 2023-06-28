var inicNumber = document.getElementById('inic')
var inic = Number.parseInt(inicNumber)

var fimNumber = document.getElementById('fim')
var fim = Number.parseInt(fimNumber)

var passoNumber = document.getElementById('passo')
var passo = Number.parseInt(passoNumber)

var resultado = document.querySelector('p#resultado')

function clicou(){
  for (var inic = 0 ; inic <= fim ; inic + passo) {
    resultado.innerHTML = `Contando: <br> ${inic} 👉 ${inic+passo} `
  }
}