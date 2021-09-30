
function Producto() {
  return (

    <div className="contenedor-layout">
      <div className="contenedor-layout__header">
        <h1>Registro de productos</h1>
      </div>      
      <div className="contenedor-layout__main">
      
      <label className="buscar"> Buscar:</label>       
      <input type="search" placeholder="ingrese dato a buscar"/>  
      <input className="boton" type="submit" value="Buscar producto"></input>   

        <table>
          <tr>
            <th>Id</th>
            <th>Descripción del producto</th>
            <th>Valor unitario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <th>01</th>
            <th>Cigueñal NPR</th>
            <th>US$170</th>
            <th><select name="" id="">
              <option value="">Disponible</option>
              <option value="">No disponible</option>
            </select>
            </th>
            <th>actualizar productos</th>
          </tr>
        </table>
      </div>
      <div className="contenedor-layout__form">
        <form className="contenedor-layout__form--formulario-ventas" action="">
          <label for="">Descripción del producto</label>
          <input type="text"></input>
          <label for="">Valor unitario</label>
          <input type="number"></input>          
          <input className="boton" type="submit" value="Registrar producto"></input>
        </form>
      </div>
      <div className="contenedor-layout__footer">

      </div>
    </div>


  )
}

export default Producto;