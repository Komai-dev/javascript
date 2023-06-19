window.alert('Olá!')

function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  
  if (hora >= 0 && hora < 5) {
    img.src = 'imagens/3noite.png'
    window.document.body.style.background = '#10171d'
  } else if (hora >= 5 && hora < 12 ) {
    img.src = 'imagens/1manha.png'
    window.document.body.style.background = '#f9f9f9'
    document.body.style.color = '#000'
  } else if (hora < 18) {
    img.src = 'imagens/2tarde.png'
    window.document.body.style.background = '#f4aa56'
  } else {
    img.src = 'imagens/3noite.png'
    window.document.body.style.background = '#112129'
  }
}