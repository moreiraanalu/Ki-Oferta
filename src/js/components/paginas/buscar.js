import produtos from "../paginas/produtos"

function buscar(app){
    app.innerHTML = `
        <div class="container-buscar">
            <h2> Radar de Promoções</h2>
            <p class="subtitulo-buscar"> O que você quer comprar mais barato?</p>
            <div class="grupo-input">
                <input
                type="text"
                id="input-busca"
                placeholder="Produto ou marca"
                aria-label="campo busca de produto"
                >
                <buttom id="btn-busca">
                    <i data-lucide="arrow-right"></i>
                </buttom>
            
            </div>
        
            <div class="categorias-busca">
                <p> Categoria</p>
                <ul class="categoria-lista">
                <li class="categoria-item">
                    Mercearia
                </li>
                <li class="categoria-item">
                    Carnes
                </li>
                <li class="categoria-item">
                   Hortifruti
                </li>
                <li class="categoria-item">
                   Bebidas
                </li>
                <li class="categoria-item">
                  Limpeza
                </li>
                <li class="categoria-item">
                    Higiene
                </li>

                </ul>
            </div>

        
            </div>
    `



    capturarEvento(app)

}

function capturarEvento(app){ 
    document.querySelector(".categoria-lista").addEventListener("click", (event)=>{
        //console.log(event.target.textContent.toLowerCase().trim())
        let categoriaSelecionada = event.target.textContent.toLowerCase().trim()
        produtos.pagina(app, categoriaSelecionada )
    } )
}

export default {
    url: "#buscar",
    label: "Buscar",
    icon: "search",
    pagina: buscar
}