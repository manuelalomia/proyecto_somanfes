
function GestionVendedores() {
  return (

    <div className="contenedor-layout">
      <div className="contenedor-layout__header">
        <h1>Gestión de vendedores</h1>
      </div>
      <div className="contenedor-layout__main">
        <table>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Número celular</th>
            <th>Fecha ingreso</th>            
          </tr>
          <tr>
            <th>01</th>
            <th>Pepito Perez</th>
            <th>Administrador</th>
            <th>3210000000</th>
            <th>27/10/2021</th>            
          </tr>
        </table>
      </div>
      <div className="contenedor-layout__form">
        <form className="contenedor-layout__form--formulario-ventas" action="">
          <label for="">id</label>
          <input type="text"></input>
          <label for="">Nombre</label>
          <input type="text"></input>
          <label for="">Especialidad</label>
          <input type="text"></input>
          <label for="">Número celular</label>
          <input type="text"></input>
          <label for="">Fecha ingreso</label>
          <input type="date"></input>          
          <input className="boton" type="submit" value="Crear"></input>
        </form>
      </div>
      <div className="contenedor-layout__footer">

      </div>
    </div>


  )
}

export default GestionVendedores;