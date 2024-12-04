import {useState} from "react";
import carritoDeCompras from '../img/carrito-de-compras.png';


function CartCounter(){
    const[count, setCount]=useState(0);

    function handleClick(){ //Aquí se deberá hacer el cambio para que se añadan los productos al carritos
        setCount(count + 1);
    }

    return (
        <div className="counter">
            <a class="navbar-item" href="../index.js">
                <img src={carritoDeCompras} alt="Logo de Tasker" />
                <button onClick={handleClick} className="button is-danger is-fullwidth">
                    <span><p className="content">{count}</p></span>
                </button>
            </a>
        </div>
    )
}
export default CartCounter;