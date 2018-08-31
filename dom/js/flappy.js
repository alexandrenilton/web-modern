function novoElement(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}


function notificarPonto() {
    console.log('ponto+')
}
function Barreira (reversa = false) {
    this.elemento = novoElement('div', 'barreira')

    const borda = novoElement('div', 'borda')
    const corpo = novoElement('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo: borda);
    this.elemento.appendChild(reversa ? borda: corpo);


    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)



function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElement('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}
// testar par de barreiras
// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)


function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 /*animar de 3 em 3 pixel */
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da tela
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio 
                && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false
    this.elemento = novoElement('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false
    
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5) // ele voa mais q cai
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    //setar posição inicial do passaro
    this.setY(alturaJogo / 2)
    
}

function Progresso() {
    this.elemento = novoElement('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const gameArea = document.querySelector('[wm-flappy]')

// gameArea.appendChild(passaro.elemento)
// gameArea.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => gameArea.appendChild(par.elemento))

// setInterval(() =>{
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function setGameOver() {
    const gameArea = document.querySelector('[wm-flappy]')
    const gameOverMsg = novoElement('div', 'gameover')

    gameOverMsg.innerHTML = 'GAME OVER'

    gameArea.appendChild(gameOverMsg)
}


function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left 
        && b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top 

    return horizontal &&  vertical;    
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) 
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu;
}


function FlappyBird() {
    let pontos = 0

    const gameArea = document.querySelector('[wm-flappy]')
    const altura = gameArea.clientHeight
    const largura = gameArea.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras( altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos) )
    
    const passaro = new Passaro(altura)

    gameArea.appendChild(progresso.elemento)
    gameArea.appendChild(passaro.elemento)
    barreiras.pares.forEach( par => gameArea.appendChild(par.elemento))
    
    this.start = () => {
        // inicia o jogo
        const temporizador = setInterval( () => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                console.log("colisão")
                clearInterval(temporizador) // para o jogo
                setGameOver() 
            }
        }, 20)
    }
}


new FlappyBird().start()

