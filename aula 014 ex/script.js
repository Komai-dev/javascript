function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar.'
    alert('[Erro] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number.parseInt(ini.value)
    let f = Number.parseInt(fim.value)
    let p = Number.parseInt(passo.value)

    if (p <= 0) {
      window.alert('Passo inválido! Considerando a partir de 1')
      p = 1
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 👉 `
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} 👉 `
      }
    }
  }
  res.innerHTML += `\u{1F3C1}`
}

/*function clicou() {
  var entrada = document.getElementById('inic')
  var inic = Number.parseInt(entrada.value)
  
  var final = document.getElementById('fim')
  var fim = Number.parseInt(final.value)
  
  var diff = document.getElementById('passo')
  var passo = Number.parseInt(diff.value)

  var calc = inic + passo
  var result = document.querySelector('p#resultado')

  for (var soma = inic ; calc <= fim ; inic + passo) {
    result.innerHTML = `Contando: <br> 
     ${soma} 👉 ${calc}`
  }
}*/