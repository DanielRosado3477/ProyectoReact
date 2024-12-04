import Navbar from "./components/Navbar";
import "bulma/css/bulma.css"; //Sin / para dirección, react lo buscara en la carpeta modules

function App(){
    return (
        <div className="container">
            <section className="navbarContainer">
                <Navbar/>
            </section>
        </div>
    )
}
export default App;
