import {Link} from 'react-router-dom';


function Cabecera() {
  return (
    <div>
      <header className="cabecera">
        <nav className="cabecera__nav-bar">
          <ul className="cabecera__nav-bar--li">
            <li><Link to='/inicio'><p>inicio</p></Link></li>
            <li><Link to='/productos'><p>Productos</p></Link></li>
            <li><Link to='/ventas'><p>ventas</p></Link></li>
            <li><Link to='/usuarios'><p>Gestión de roles</p></Link></li>            
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Cabecera;