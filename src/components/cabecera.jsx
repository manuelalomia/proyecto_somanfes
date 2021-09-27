function Cabecera() {
  return (
    <div>
      <header className="cabecera">
        <nav className="cabecera__nav-bar">
          <ul className="cabecera__nav-bar--li">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#ventas">Registrar ventas</a></li>
            <li><a href="#estado">Estado de ventas</a></li>
            <li><a href="#vendedores">Gestión de vendedores</a></li>
            <li><a href="#roles">Gestión de usuarios y roles</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Cabecera;