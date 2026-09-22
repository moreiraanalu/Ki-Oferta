function limpeza(app){
    app.innerHTML = `
    <div>
        <h1> Página Limpeza</h1>
    </div>
    `
}

export default {
    url: "#limpeza",
    label: "",
    icon: "house",
    pagina: limpeza
}