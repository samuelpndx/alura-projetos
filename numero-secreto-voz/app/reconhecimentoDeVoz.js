const elementoChute = document.getElementById('chute')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    gameOver(chute)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

function gameOver(chute) {
    if (chute == 'game over') {
        document.body.setAttribute('class', 'game-over')
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        `
    }
}

recognition.addEventListener('end', () => recognition.start())