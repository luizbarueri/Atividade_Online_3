
function Buscar() {
    const produtos = ['Mouse', 'Teclado', 'Monitor', 'Roteador', 'Cabo de Força'];
    var produto = document.getElementById('produto').value;

    for (x = 0; x < produtos.length; x++) {
        let produtoAual = produtos[x];
        if (produtoAual == produto) {
            alert("Produto encontrado: " + produtoAual)
            return;
        }
    }
    alert("produto não encontrado: " + produto)
}