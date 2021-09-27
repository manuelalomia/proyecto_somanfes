import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import Inicio from "./pages/inicio";
import Login from "./components/login";
import Venta from "./pages/ventas";
import './styles/styles.css';
import RegistrarVenta from "./components/registrar_estado_venta";
import GestionVendedores from "./components/gestion_vendedores";
import GestionUsuarios from "./components/gestion_usuarios_roles";

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
                    <Route path='/estado_ventas'>
                        <RegistrarVenta />
                    </Route>
                    <Route path='/gestion_vendedores'>
                        <GestionVendedores />                        
                    </Route>
                    <Route path='/gestion_usuarios'>
                        <GestionUsuarios />                        
                    </Route>
                    <Route path=''>
                        <Login />
                    </Route>
                </Switch>
            </Router>

        </div>);

}



export default App;

