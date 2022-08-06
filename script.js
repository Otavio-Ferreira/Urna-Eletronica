function num(valor){
    var valor1 = document.getElementById('num1').value
    var valor2 = document.getElementById('num2').value

    var soud = new Audio('audios/clicks.wav')
    soud.play()
  
    if(valor1 == ""){
        document.getElementById('num1').value = valor
    } else if(valor2 == ""){
        document.getElementById('num2').value = valor
    }
}

function red(){
    document.getElementById('num1').value = ""
    document.getElementById('num2').value = ""
    var tit = document.getElementById('nome')
    tit.innerHTML = ""

}

function white(){
    document.getElementById('num1').value = 0
    document.getElementById('num2').value = 0
}

function green(){
    const music = new Audio('audios/confirm.wav');
    music.play();

    var valor1 = parseInt(document.getElementById('num1').value)
    var valor2 = parseInt(document.getElementById('num2').value)
    var res = document.getElementById('resultado')
    var tit = document.getElementById('nome')
    var candidato = (valor1 * 10) + valor2
    var img = document.createElement('img')
    img.setAttribute('id', "foto")

    if(candidato == 13){
        img.setAttribute('src', 'imagens/lula.jpg')
        tit.innerHTML = 'LULA-PT'
        tit.style.color = 'red'
    } 
    else if(candidato == 12){
        img.setAttribute('src', 'imagens/ciro.jpg')
        tit.innerHTML = 'CIRO GOMES-PDT'
        tit.style.color = 'blue'
    }
    else if(candidato == 22){
        img.setAttribute('src', 'imagens/jair.jpg')
        tit.innerHTML = 'JAIR BOLSONARO-PSL'
        tit.style.color = 'darkgreen'
    }
    else if(candidato == 15){
        img.setAttribute('src', 'imagens/simone.jpg')
        tit.innerHTML = 'SIMONE TABET-MDB'
        tit.style.color = 'yellow'
    }
    else if(candidato == 30){
        img.setAttribute('src', 'imagens/felipe.jpg')
        tit.innerHTML = 'FELIPE DÁVILA-NOVO'
        tit.style.color = 'orange'
    }
    else if(candidato == 27){
        img.setAttribute('src', 'imagens/eymael.jpg')
        tit.innerHTML = 'EYMAEL-DC'
        tit.style.color = 'lightblue'
    }
    else if(candidato == 80){
        img.setAttribute('src', 'imagens/leonardo.jpg')
        tit.innerHTML = 'LEONARDO PÉRICLES-UP'
        tit.style.color = 'blue'
    }
    else if(candidato == 90){
        img.setAttribute('src', 'imagens/pablo.jpg')
        tit.innerHTML = 'PABLO MARÇL-PROS'
        tit.style.color = 'white'
    }
    else if(candidato == 14){
        img.setAttribute('src', 'imagens/roberto.jpg')
        tit.innerHTML = 'ROBERTO JEFFERSON-PTB'
        tit.style.color = 'darkblue'
    }
    else if(candidato == 21){
        img.setAttribute('src', 'imagens/sofia.jpg')
        tit.innerHTML = 'SOFIA MANZANO-PCB'
        tit.style.color = 'darkred'
    }
    else if(candidato == 44){
        img.setAttribute('src', 'imagens/soraya.jpg')
        tit.innerHTML = 'SORAYA THRONICKE-UNIÃO BRASIL'
        tit.style.color = 'cyan'
        
    }
    else if(candidato == 16){
        img.setAttribute('src', 'imagens/vera.jpg')
        tit.innerHTML = 'VERA LÚCIA-PSTU'
        tit.style.color = 'red'
    }
    else if(candidato == 00){
        tit.innerHTML = 'VOCÊ VOTOU EM BRANCO'
        tit.style.color = 'white'
    }
    else {
        tit.innerHTML = 'SEU VOTO FOI ANULADO'
        tit.style.color = 'white'
    }
    res.appendChild(img)
    
}