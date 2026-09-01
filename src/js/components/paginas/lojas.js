function lojas(app){
    app.innerHTML = `
    <div>
        <h1> Lojas próximas </h1>
    </div>
    `
}

export default {
    url: "#loja",
    label: "Loja",
    icon: "store",
    pagina: lojas
}