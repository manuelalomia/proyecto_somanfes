
const usuarios = [
    {
        "ID": "72.354.211",
        "Nombre": "Juan de Castellanos",
        "Rol" : "Administrador",
        "Accion" : "",
        "Estado" : "",
    },
    {
        "ID": "54.826.327",
        "Nombre": "Marcela Jimenez",
        "Rol" : "Administrador",
        "Accion" : "",
        "Estado" : "",
    },

    {
        "ID": "72.346.921",
        "Nombre": "Francisco Rodriguez",
        "Rol" : "Vendedor",
        "Accion" : "",
        "Estado" : "",
    },
    {
        "ID": "72.462.575",
        "Nombre": "Martin Garcia",
        "Rol" : "Vendedor",
        "Accion" : "",
        "Estado" : "",
    },
    {
        "ID": "1.032.751.826",
        "Nombre": "Roberto López",
        "Rol" : "Vendedor",
        "Accion" : "",
        "Estado" : "",
    },
    {
        "ID": "1.014.172.462",
        "Nombre": "Sara Rodriguez",
        "Rol" : "Vendedor",
        "Accion" : "",
        "Estado" : "",
    },
    {
        "ID": "1.012.513.487",
        "Nombre": "Salomé García",
        "Rol" : "Vendedor",
        "Accion" : "",
        "Estado" : "",
    },
    {
        "ID": "1.014.689.997",
        "Nombre": "Julian Pardo",
        "Rol" : "Vendedor",
        "Accion" : "",
        "Estado" : "",
    },
]
function GestionUsuarios() {
  return (

    <div className="contenedor-layout">
      
      <div className="contenedor-layout__header">
        <h1>Gestión de usuarios</h1>
      </div>
      <div className="contenedor-layout__main">
      <div>  
        <label className="buscar"> Buscar:</label>
        <input type="search" placeholder="ingrese dato a buscar" />
        <input className="boton" type="submit" value="Buscar usuario"></input>
        </div>
        <table>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
            <th>Estado</th>
          </tr>
          <tr>
            <th>01</th>
            <th>Sofia Osorio</th>
            <th>Vendedor</th>
            <th>Editar / Elimimar</th>
            <th><select name="" id="">
              <option value="">pendiente</option>
              <option value="">autorizado</option>
              <option value="">no autorizado</option>
            </select>
            </th>
          </tr>
        </table>
      </div>
      
        <div className="contenedor-layout__form">
          <form className="contenedor-layout__form--formulario-ventas" action="">
            <label for="">id</label>
            <input type="text"></input>
            <label for="">Nombre</label>
            <input type="text"></input>
            <label for="">Rol</label>
            <select>
              <option>Vendedor</option>
              <option>Administrador</option>              
            </select>
            <input className="boton" type="submit" value="Registrar"></input>
          </form>
        </div>
      
      <div className="contenedor-layout__footer">

      </div>
    </div>


  )
}

export default GestionUsuarios;