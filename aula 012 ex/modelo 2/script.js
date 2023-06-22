function verificar() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var fano = document.getElementById('by')
  var resultado = document.getElementById('resultado')

  if (fano.value <= 1899 || Number(fano.value) > anoAtual) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }
    else {
      var idade = anoAtual - Number(fano.value)
      var fsex = document.getElementsByName('sexo')
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      var p = document.createElement('p')
      p.innerHTML = `Nice! Você é um Abacaxi estiloso com ${idade} anos! Que bacana!`

      if (fsex[0].checked) {
        gênero = 'Mulher'
        if (idade <= 2) {
          //baby
          img.setAttribute('src', 'imagens/babygirl.png')
        } else if (idade >= 3 && idade <= 8) {
          //criança
          img.setAttribute('src', 'imagens/girl.png')
        } else if (idade <= 16) {
          //adol
          img.setAttribute('src', 'imagens/adolgirl.png')
        } else if (idade <= 29) {
          //adult
          img.setAttribute('src', 'imagens/20-24wom.png')
        } else if (idade <= 45) {
          //30-40woman
          img.setAttribute('src', 'imagens/30-40wom.png')
        } else if (idade <= 62) {
          //50woman
          img.setAttribute('src', 'imagens/50wom.png')
        } else {
          //+60woman
          img.setAttribute('src', 'imagens/+60wom.png')
        }
      } 
      else if (fsex[1].checked) {
          gênero = 'Homem'
          if (idade <= 2) {
            img.setAttribute('src', 'imagens/babyboy.png')
          } else if (idade >= 3 && idade <= 8) {
            img.setAttribute('src', 'imagens/boy.png')
          } else if (idade <= 16) {
            //adol
            img.setAttribute('src', 'imagens/adolboy.png')
          } else if (idade <= 29) {
            //adult
            img.setAttribute('src', 'imagens/20-25man.png')
          } else if (idade <= 45) {
            //30-40man
            img.setAttribute('src', 'imagens/30-40man.png')
          } else if (idade <= 62) {
            //50man
            img.setAttribute('src', 'imagens/50man.png')

          } else {
            //+60man
            img.setAttribute('src', 'imagens/+60man.png')
          }
        } else {
          gênero = 'Outro'
          img.setAttribute('src', 'imagens/abacaxi-legal.png')
        }
      resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos`
      resultado.style.textAlign = 'center'
      resultado.appendChild(img)
      resultado.appendChild(p)
    }
}