
function GestionUsuarios() {
  return (

    <div className="contenedor-layout">
      <div className="contenedor-layout__header">
        <h1>Registrar estado venta</h1>
      </div>
      <div className="contenedor-layout__main">
        <table>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <th>01</th>
            <th>Sofia Osorio</th>
            <th><select>
              <option>Vendedor</option>
              <option>Administrador</option>
              <option>Ejecutivo</option>
              <option>Operativo</option>
              <option>Director</option>
              <option>Gerente comercial</option>              
            </select>           
            </th>
            <th>Editar / Elimimar</th>
          </tr>
        </table>
      </div>
      <div className="contenedor-layout__form">
      <div className="contenedor-layout__form">
        <form className="contenedor-layout__form--formulario-ventas" action="">
          <label for="">id</label>
          <input type="text"></input>
          <label for="">Nombre</label>
          <input type="text"></input>                 
          <input className="boton" type="submit" value="Generar venta"></input>
        </form>
      </div>
      </div>
      <div className="contenedor-layout__footer">

      </div>
    </div>


  )
}

export default GestionUsuarios;