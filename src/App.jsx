import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./pages/inicio";
import Login from "./components/login";
import Venta from "./pages/ventas";
import './styles/styles.css';
import RegistrarVenta from "./components/registrar_estado_venta";
import GestionVendedores from "./components/gestion_vendedores";
import GestionUsuarios from "./components/usuarios";
import Producto from "./components/productos";


function App() {
    return (
        <div className="App">
            
            <Router>
                <Switch>
                    <Route path='/inicio'>
                        <Inicio />
                    </Route>
                    <Route path='/ventas'>
                        <Venta />
                    </Route>                 
                    <Route path='/usuarios'>
                        <GestionUsuarios />                        
                    </Route>
                    <Route path='/productos'>
                        <Producto />                        
                    </Route>
                    <Route path='/'>
                        <Login />
                    </Route>
                </Switch>
            </Router>

        </div>);

}



export default App;

