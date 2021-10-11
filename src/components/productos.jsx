import axios from 'axios';
import {link} from 'react-router';
import React, { useEffect, useState } from "react";

const listaProductosBackend = [
  {
    ID: "8-94396-589-1",
    Descripcion: "Pasador de pistón 36*79",
    Modelo: "Isuzu NPR/4HF1",
    ValorUnitario: 1.43,
    Estado: "Disponible",
  },
  {
    ID: "8-97856979",
    Descripcion: "Pedal y soporte de clutch",
    Modelo: "Isuzu NKR94",
    ValorUnitario: 13.49,
    Estado: "Disponible",
  },

  {
    ID: "8-97141195",
    Descripcion: "Ventilador 10 hojas",
    Modelo: "Isuzu 4HG1",
    ValorUnitario: 3.97,
    Estado: "Disponible",
  },
  {
    ID: "8-97115-856-1",
    Descripcion: "Tapa tanque",
    Modelo: "Isuzu TFR54",
    ValorUnitario: 3.97,
    Estado: "Disponible",
  },

  {
    ID: "8-97033701",
    Descripcion: "Horquilla",
    Modelo: "Isuzu 4JB1",
    ValorUnitario: 1.59,
    Estado: "Disponible",
  },
  {
    ID: "8-97066016",
    Descripcion: "Enfocador",
    Modelo: "Isuzu NPR/4HF1",
    ValorUnitario: 3.65,
    Estado: "Disponible",
  },
  {
    ID: "8-97081814",
    Descripcion: "Trampa de combustible",
    Modelo: "Isuzu NKR94",
    ValorUnitario: 4.29,
    Estado: "Disponible",
  },
  {
    ID: "8-94133275",
    Descripcion: "Válvula de admisión",
    Modelo: "Isuzu NKR/NHR",
    ValorUnitario: 1.11,
    Estado: "Disponible",
  },
  {
    ID: "8-94247875",
    Descripcion: "Válvula de escape",
    Modelo: "Isuzu NKR/NHR",
    ValorUnitario: 1.11,
    Estado: "Disponible",
  },
  {
    ID: "8-97066287",
    Descripcion: "Guarda polvo",
    Modelo: "Isuzu NKR94",
    ValorUnitario: 1.75,
    Estado: "Disponible",
  },
  {
    ID: "8-97204505",
    Descripcion: "Control de cambios",
    Modelo: "Isuzu NPR",
    ValorUnitario: 10.32,
    Estado: "Disponible",
  },
  {
    ID: "9-55812894",
    Descripcion: "Platina",
    Modelo: "Isuzu NKR94",
    ValorUnitario: 0.48,
    Estado: "Disponible",
  },
  {
    ID: "8-98013-962-4",
    Descripcion: "Biela motor",
    Modelo: "Isuzu NKR TFR55",
    ValorUnitario: 11.11,
    Estado: "Disponible",
  },
  {
    ID: "8-97112981",
    Descripcion: "Cigüeñal",
    Modelo: "Isuzu NPR 4HF1",
    ValorUnitario: 134.92,
    Estado: "Disponible",
  },
  {
    ID: "8-97204204-0",
    Descripcion: "Damper Cigüeñal",
    Modelo: "Isuzu NKR TFR54",
    ValorUnitario: 15.56,
    Estado: "Disponible",
  },
  {
    ID: "C8980521201",
    Descripcion: "Sensor ABS",
    Modelo: "Isuzu D-Max 4*2",
    ValorUnitario: 16.75,
    Estado: "Disponible",
  },
  {
    ID: "BJS939040A",
    Descripcion: "Soporte de motor",
    Modelo: "Mazda 3 / CX-5",
    ValorUnitario: 6.87,
    Estado: "Disponible",
  },
  {
    ID: "EH4639040B",
    Descripcion: "Soporte de motor",
    Modelo: "Mazda CX-7",
    ValorUnitario: 5.97,
    Estado: "Disponible",
  },
  {
    ID: "GJL339060",
    Descripcion: "Soporte frontal de motor",
    Modelo: "Mazda CX-5",
    ValorUnitario: 15.67,
    Estado: "Disponible",
  },
  {
    ID: "P5Y411SA0",
    Descripcion: "Set de pistón y anillos",
    Modelo: "Mazda 2 Skyactiv",
    ValorUnitario: 62.19,
    Estado: "Disponible",
  },
  {
    ID: "Z6Y611SA0",
    Descripcion: "Pistón y pasador",
    Modelo: "Mazda 3 2004-2014",
    ValorUnitario: 11.94,
    Estado: "Disponible",
  },
  {
    ID: "WEY012440",
    Descripcion: "Árbol de levas",
    Modelo: "Mazda BT-50",
    ValorUnitario: 24.63,
    Estado: "Disponible",
  },
  {
    ID: "P51B124Z0",
    Descripcion: "Bomba de vacío",
    Modelo: "Mazda MX5 1.5 2.0b",
    ValorUnitario: 82.09,
    Estado: "Disponible",
  },
  {
    ID: "ZJ0112500B",
    Descripcion: "Tensor de cadena de distribucion",
    Modelo: "Mazda 3 2004-2014",
    ValorUnitario: 4.63,
    Estado: "Disponible",
  },
  {
    ID: "U20212500",
    Descripcion: "Tensor de cadena de distribucion",
    Modelo: "Mazda BT-50",
    ValorUnitario: 7.43,
    Estado: "Disponible",
  },
  {
    ID: "LF0212500",
    Descripcion: "Tensor de cadena de distribucion",
    Modelo: "Mazda 6 / CX7",
    ValorUnitario: 3.88,
    Estado: "Disponible",
  },
  {
    ID: "PE01124Z0C",
    Descripcion: "Motor ajuste de tiempo variable",
    Modelo: "Mazda 3/Skyactiv",
    ValorUnitario: 82.09,
    Estado: "Disponible",
  },
  {
    ID: "LF94124X0C",
    Descripcion: "Actuador variador de tiempo",
    Modelo: "Mazda 6 2003-2009",
    ValorUnitario: 22.39,
    Estado: "Disponible",
  },
  {
    ID: "WEY012440",
    Descripcion: "Arbol de levas",
    Modelo: "Mazda BT-50",
    ValorUnitario: 24.63,
    Estado: "Disponible",
  },
];

const ListaProductos =()=>{
  const[mostrarTabla, setMostrarTabla] = useState(true);
  const[ListaProductos, setListaProductos] = useState([]);
  const[textoBoton, setTextoBoton] = useState('Registrar producto');
  const [colorBoton, setColorBoton] = useState("--Rojo-imperial");
}
useEffect(()=>{
  //obtener lista de productos desde el backend
  setListaProductos(listaProductosBackend);
},[]);



function Producto ({listaProductosBackend}) {
  useEffect(() =>{
    console.log(listaProductosBackend);
  },[listaProductosBackend]);
  return (
    <div className="contenedor-layout">
      <div className="contenedor-layout__header">
        <h1>Gestión de productos</h1>
      </div>
      <div className="contenedor-layout__main">
        <div>
          <label className="buscar"> Buscar:</label>
          <input type="search" placeholder="ingrese dato a buscar" />
          <button 
            onClick={()=> {
              setMostrarTabla(!mostrarTabla);
            }}
              className="boton" type="submit" value="Buscar producto">
          </button>
        </div>
        {mostrarTabla ? (
          <TablaProductos ListaProductos={productos} />
        ) :(
          <FormularioCreacionProductos
            funcionParaAgregarProducto={setMostrarTabla}
            ListaProductos={productos}
            funcionParaAgregarProducto={setListaProductos}
            />
        )
        }

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Descripción del producto</th>
              <th>Valor unitario</th>
              <th>Modelo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaProductosBackend.map((repuesto) => {
              return (
                <tr>
                  <td>{repuesto.ID}</td>
                  <td>{repuesto.Descripcion}</td>
                  <td>{repuesto.Modelo}</td>
                  <td>{repuesto.ValorUnitario}</td>
                  <td>
                    <select name="" id="">
                      <option value="">Disponible</option>
                      <option value="">No disponible</option>
                    </select>
                  </td>
                  <td>Actualizar productos</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      const FormularioCreacionProducto = ({
        funcionParaMostrarLaTabla,
        ListaProductos,
        funcionParaAgregarProducto
      }) => {
  
        const enviarAlBackend = ()=> {
          console.log('ID', ID, 'Descripcion', Descripcion, 'Modelo', Modelo, 'Valor unitario',ValorUnitario);
          if (ID === '' || Descripcion===''||Modelo==='' ||ValorUnitario===''){
            toast.error ("Ingrese todos los datos");
          } else {
            toast.success('Producto creado con exito');
            funcionParaMostrarLaTabla(true);
            funcionParaAgregarProducto([
              ...listaProductos,
              {ID: ID, Descripcion:Descripcion, Modelo:Modelo, Valor Unitario:ValorUnitario},
            ]);
          }
        };

        return (
          <div className="contenedor-layout__form">
            <form className="contenedor-layout__form--formulario-ventas" action="">
              <label for="">id del producto</label>
              <input type="text" required></input>
              <label for="">Descripción del producto</label>
              <input type="text" required></input>
              <label for="">Modelo del producto</label>
              <input type="text" required></input>
              <label for="">Valor unitario</label>
              <input type="number" required></input>
              <input className="boton" type="submit" value="Registrar producto"></input>
            </form>
          </div>

      <div className="contenedor-layout__footer"></div>
    
        );
         };
  );
}

export default Producto;