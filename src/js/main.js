import { renderNavbar } from "./components/navbar/navbar.js"
import { rotas } from "./components/rotas/rotas.js";
import { createIcons, icons } from 'lucide';

// Caution, this will import all the icons and bundle them.
renderNavbar(rotas)
createIcons({ icons });

const app = document.querySelector("#app")

function renderAPP(){
    const hash = window.location.hash || "#busca"
    const rota = rotas.find(tela => tela.url === hash)
    console.log(rota)
    if(rota){
        rota.pagina(app)
        createIcons({icons});
    }else{
        app.innerHTML = "Página não encontrada"
    }
}

window.addEventListener("hashchange", renderAPP)

renderAPP()