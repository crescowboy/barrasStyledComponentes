import React from "react";
import { Titulo, Moverse, Sombra, Contenedor, Caja } from "./estilos";
import { valores } from "./data/datos";

function App() {
  return (
    <>
    <div>
     <Titulo>Tus ganacias: </Titulo>
     <Contenedor>
      {valores.map((color,index)=>(
        <div key={index}>
         
         
            <Caja elColor={color.color}></Caja>
            
         
        </div>

      ))}
       </Contenedor>
       </div>
    </>
  );
}

export default App;
