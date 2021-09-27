

function Venta() {
  return (

    <div className="contenedor-layout">
      <div className="contenedor-layout__header">
        <h1>Registrar ventas</h1>
      </div>
      <div className="contenedor-layout__main">
        <table>
          <tr>
            <th>Id</th>
            <th>Valor total</th>
            <th>Descrición</th>
            <th>Fecha inicial</th>
            <th>Fecha futura de pago</th>
            <th>Responsable</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <th>01</th>
            <th>$500</th>
            <th>prueba</th>
            <th>27/09/2021</th>
            <th>27/10/2021</th>
            <th>Felipe Gonzalez</th>
            <th>editar/eliminar</th>
          </tr>
        </table>
      </div>
      <div className="contenedor-layout__form">
        <form className="contenedor-layout__form--formulario-ventas" action="">
          <label for="">Valor venta</label>
          <input type="text"></input>
          <label for="">Descripición</label>
          <input type="text"></input>
          <label for="">Descripción de la venta</label>
          <input type="text"></input>
          <label for="">Fecha inicial</label>
          <input type="date"></input>
          <label for="">Fecha futura de pago</label>
          <input type="date"></input>
          <label for="">Responsable</label>
          <input type="text"></input>
          <input className="boton" type="submit" value="Generar venta"></input>
        </form>
      </div>
      <div className="contenedor-layout__footer">

      </div>
    </div>


  )
}

export default Venta;