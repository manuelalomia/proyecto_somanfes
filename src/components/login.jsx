

function Login (){
  return(
    <main className="contenedor__formulario">

                <form className="contenedor__formulario-login" action="/action_page.php">

                    <div className="contenedor__formulario-login--inputs">
                        <label id="ini-sesion" for="">Iniciar sesión</label>
                        <label for="usuario">Usuario:</label>
                        <input type="text" id="usuario" name="usuario" placeholder="Ingrese su usuario"></input>
                        <label for="contrasenia">Contraseña:</label>
                        <input type="password" id="contrasenia" name="contrasenia" placeholder="Ingrese su Contraseña"></input>
                        <input class="boton" type="submit" value="Ingresar"></input>
                    </div>
                </form>
            </main>
  )
}

export default Login;