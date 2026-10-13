import produtos from "../../dadosMockados/produtos.js";

function exibirProdutos(app, categoria=""){
    const filtroProdutos = categoria ? produtos.filter(produto => produto.categoria === categoria) : produtos
    app.innerHTML = filtroProdutos.map(produto => `
        <div class="card">
            <img height="190vh" src=${produto.img}" alt="${produto.nome}">
            <div class="card-body">
                <h5>${produto.nome}</h5>
                <p>${produto.preco.toFixed(2)}</p>
            </div>
        </div>
        `).join("")

}

export default {
    url: "#produtos",
    label: "",
    icon: "",
    pagina: exibirProdutos
}