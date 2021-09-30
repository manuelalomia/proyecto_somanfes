import {Link} from 'react-router-dom';


function Cabecera() {
  return (
    <div>
      <header className="cabecera">
        <nav className="cabecera__nav-bar">
          <ul className="cabecera__nav-bar--li">
            <li><Link to='/inicio'><p>inicio</p></Link></li>
            <li><Link to='/ventas'><p>ventas</p></Link>  </li>
            <li><Link to='/estado_ventas'><p>Estado de ventas</p></Link></li>
            <li><Link to='/gestion_vendedores'><p>Gestión de vendedores</p></Link></li>
            <li><Link to='/gestion_usuarios'><p>Gestión de usuarios y roles</p></Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Cabecera;