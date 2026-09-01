import { renderNavbar } from "./components/navbar/navbar.js"
import { rotas } from "./components/rotas/rotas.js";
import { createIcons, icons } from 'lucide';

// Caution, this will import all the icons and bundle them.
renderNavbar(rotas)
createIcons({ icons });

const app = document.querySelector("#app")
app.innerHTML = "olá mundo"