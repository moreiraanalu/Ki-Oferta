function home(app){
    app.innerHTML = `
    <div>
        <h1> Página Inicial</h1>
    </div>
    `
}

export default {
    url: "#home",
    label: "Home",
    icon: "house",
    pagina: home
}