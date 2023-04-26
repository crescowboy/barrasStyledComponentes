import styled, {css, keyframes} from "styled-components";


const  miColor="black";

  const animacion = (valor)=>keyframes`
  0%{
    transform:rotate(0deg)
  }
  100%{
    transform:rotate(${valor}deg)
  }
  `

  export const Titulo=styled.div`
    font-size: 60px;
    text-align: center;
  `

  export const Caja=styled.div`
    width:100px;
    height:100px;
    background-color:${({elColor})=>elColor ? elColor : "silver"};
    margin:8px;
    
    ${props => props.redondo &&
    css`
      border-radius:50%;
      border:2px solid black;
    `}
    &:hover{
      border: 1px solid ${miColor};
      animation:${animacion} 3s ease-in-out;
    animation-fill-mode:forwards;
    }
  `

  export const Sombra = styled(Titulo)`
    box-shadow:0 0 20px red;
  `
  export const Contenedor=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color:red;
  `
  export const Moverse=styled.div`
    width: 200px;
    height:100px;
    background-color:blue;
    animation: ${(props) => animacion(props.distancia)} 
                ${(props) => props.segundos}s ease-out;
    animation-fill-mode:forwards;
  `