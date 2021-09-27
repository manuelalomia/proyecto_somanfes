function RegistrarVenta() {
  return (

    <div className="contenedor-layout">
      <div className="contenedor-layout__header">
        <h1>Registrar estado venta</h1>
      </div>
      <div className="contenedor-layout__main">
        <table>
          <tr>
            <th>Id venta</th>
            <th>Estado</th>

          </tr>
          <tr>
            <th>01</th>
            <th><select>
              <option>Creación</option>
              <option>Envalaje</option>
              <option>Ruta</option>
              <option>Ubicación</option>
              <option>Recepción</option>
            </select>
            </th>
          </tr>
        </table>
      </div>
      <div className="contenedor-layout__form">

      </div>
      <div className="contenedor-layout__footer">

      </div>
    </div>


  )
}

export default RegistrarVenta;