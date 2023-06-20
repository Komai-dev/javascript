function verificar() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var fano = document.getElementById('by')
  var resultado = document.getElementById('resultado')

  if (fano.value <= 1899 || Number(fano.value) > anoAtual) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = anoAtual - Number(fano.value)
    resultado.innerHTML = `Idade calculada: ${idade}`
  }
}