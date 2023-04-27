import React, { useState } from "react";
import { Titulo, Moverse, Sombra, Contenedor, Caja, Barra, Linea } from "./estilos";
import { valores } from "./data/datos";

function App() {

  const [datos,setDatos] = useState(valores);

  

  const click=(altura,indice)=>{
    setDatos(
      datos.map((item,index)=>{
        if(index===indice){
          return({...item,altura:
            (item.altura<175)
             ? item.altura+40
              :item.altura,
              desde:item.altura
            })
        }else{
          return ({...item,desde:item.altura});
        }
      }
    ))
  }

  return (
    <>
    
     <Titulo>Tus ganacias: </Titulo>
     <Caja>
      {datos.map((color,index)=>(
        
         
            <Barra key={index} onClick={()=>click(color.altura,index)} color={color.color} desde={color.desde} altura={color.altura}></Barra>
            
      

      ))}
      <Linea></Linea>
      </Caja>
    </>
  );
}

export default App;
