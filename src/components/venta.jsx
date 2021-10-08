

function Venta() {
  return (

    <div className="contenedor-layout  venta">

      <div className="contenedor-layout__header">
        <h1>Registrar ventas</h1>
      </div>
      <div className="contenedor-layout__main">
        <label className="buscar"> Buscar:</label>
        <input type="search" placeholder="ingrese datos" />
        <input className="boton" type="submit" value="Buscar venta"></input>
        <table>
          <tr>
            <th>Id venta</th>
            <th>Valor total</th>
            <th>Identificador</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Fecha de venta</th>
            <th>Documento identificación cliente</th>
            <th>Nombre del cliente</th>
            <th>Vendedor</th>
            <th>Estado de la venta</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <th>01</th>
            <th>$500</th>
            <th>01 venta</th>
            <th>2 unidades</th>
            <th>$250</th>
            <th>27/09/2021</th>
            <th>1111000000</th>
            <th>Pepito Perez</th>
            <th>Camilo Chaparro</th>
            <th>
              <select name="" id="">
                <option value="">En proceso</option>
                <option value="">Entregada</option>
                <option value="">Cancelada</option>
              </select></th>
            <th>editar</th>
          </tr>
        </table>
      </div>
      <div className="contenedor-layout__form">
        <form className="contenedor-layout__form--formulario-ventas" action="">
          <label for="">id venta</label>
          <input type="text"></input>
          <label for="">Valor total</label>
          <input type="text"></input>
          <label for="">Cantidad</label>
          <input type="number"></input>
          <label for="">Valor unitario</label>
          <input type="text"></input>
          <label for="">Fecha de venta</label>
          <input type="date"></input>
          <label for="">Documento cliente</label>
          <input type="text"></input>
          <label for="">Nombre del cliente</label>
          <input type="text"></input>
          <label for="">Vendedor</label>
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