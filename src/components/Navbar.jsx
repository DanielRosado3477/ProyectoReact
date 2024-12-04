import jugadorDeAtaque from '../img/jugador-de-ataque.png';
import CartCounter from './CartCount';

export default function Navbar() {
    return <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        <a class="navbar-item" href="./index.js">
        <img src={jugadorDeAtaque} alt="Logo de Tasker" />
        </a>
            <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a href="../index.js" class="navbar-item">
                    Home
                </a>
                <a href="/" class="navbar-item">
                    Pricing
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/" class="navbar-link">
                        More
                    </a>
                    <div class="navbar-dropdown">
                        <a href="/" class="navbar-item">
                            About Us
                        </a>
                        <a href="/" class="navbar-item is-selected">
                            Features
                        </a>
                        <a href="/" class="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <CartCounter/>
                        <a href="/" class="button is-light">
                            Log in
                        </a>
                </div>
            </div>
        </div>
    </nav>
}