function itens(app){
    app.innerHTML = `
    <div>
        <h1> Seu carrinho</h1>
    </div>
    `
}

export default {
    url: "#carrinho",
    label: "Carrinho",
    icon: "shopping-basket",
    pagina: itens
}