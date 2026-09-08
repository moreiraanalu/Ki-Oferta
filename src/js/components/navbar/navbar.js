import { Menu } from "lucide"

function renderNavbar(rotas){
    const nav = document.querySelector("#navbar")
    nav.innerHTML = `
    <nav>
        <ul class="navbar-bottom">
            ${
                rotas.filter(Menu => Menu.label !=="").map((Menu) => 
                    `<li>
                        <a href="${Menu.url}" class="nav-icon"> 
                        <i data-lucide="${Menu.icon}"></i>
                        ${Menu.label} </a></li>`) 
            .join("")
            }

            <li>
                <a href="#menu" class="nav-icon">     
            </li>
        </ul>
            <i data-lucide="menu" class="menu-ham"></i> 
    </nav>
    `
} 

export {renderNavbar}