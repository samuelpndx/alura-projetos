function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const somDaTecla = tecla.classList[1];
    const idTeclaSom = `#som_${somDaTecla}`;
    //console.log(idTeclaSom);

    tecla.onclick = function () {
        tocaSom(idTeclaSom);
    }


    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
