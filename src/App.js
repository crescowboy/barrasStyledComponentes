import { Titulo,Moverse,Sombra,Contenedor } from "./estilos";
function App() {

  
  return (
    <>
      <Contenedor>
      <Titulo elColor="red" redondo>1</Titulo>
      <Titulo elColor="yellow">2</Titulo>
      <Titulo>3</Titulo>
      </Contenedor>
      <Moverse distancia={333} segundos={12}></Moverse>
      <Moverse distancia={111} segundos={6}></Moverse>
      <Moverse distancia={222} segundos={10}></Moverse>
      <Moverse distancia={33} segundos={8}></Moverse>
      <Sombra></Sombra>
    </>
  );
}

export default App;
