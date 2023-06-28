function clicar() {
  var entrada = document.getElementById('inic')
  var inic = Number.parseInt(entrada.value)
  
  var final = document.getElementById('fim')
  var fim = Number.parseInt(final.value)
  
  var diff = document.getElementById('passo')
  var passo = Number.parseInt(diff.value)

  var calc = inic + passo
  var result = document.querySelector('p#resultado')

  for (soma = inic ; calc <= fim ; inic + passo) {
    result.innerHTML = `Contando: <br> 
     ${soma} 👉 ${calc}`
  }
}