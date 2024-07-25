let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreço)

function ordenarLivrosPorPreço() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirlivrosNaTela(livrosOrdenados  )
}