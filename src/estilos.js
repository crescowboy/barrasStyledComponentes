import styled, {css, keyframes} from "styled-components";
import { valores } from "./data/datos";


const  miColor="black";

const unColor=()=>{
  const colores=["gold","violet","orangered","navy","red"]
  return colores[Math.floor(Math.random()*colores.length)]
}

  

  export const Titulo=styled.div`
    font-size: 3em;
    margin-bottom:30px;
    color:${unColor};
  `

  
  

  const animacion = (desde,valor)=>keyframes`
  from {
    height: ${desde}px;
    
  }
  to {
    height: ${valor}px;
  }
  
  `
  export const Linea=styled.div`
    position:absolute;
    border-top: 1px dashed black;
    width:300px;
    height:1px;
    left:15px;
    bottom:186px;
  `

  export const Barra=styled.div`
      width:50px;
      background-color:${(props)=>props.color ? props.color : "silver"};
      margin-right:10px;
      animation:${(valor)=>animacion(valor.desde,valor.altura)} 1s ease-in-out;
      animation-fill-mode:forwards;
  `
  
  export const Caja=styled.div`
    display:flex;
    width:300px;
    height:200px;
    position:relative;
    align-items:flex-end;
    border-bottom: 3px solid black;
    border-left:4px solid gray;
    padding:10px;
    // animation:${animacion} 2s ease-in-out;
    
    
    
  `
  export const Contenedor=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
  `
  export const Moverse=styled.div`
    width: 200px;
    height:100px;
    background-color:blue;
    animation: ${(props) => animacion(props.distancia)} 
                ${(props) => props.segundos}s ease-out;
    animation-fill-mode:forwards;
  `