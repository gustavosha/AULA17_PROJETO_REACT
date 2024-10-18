import Nome from './componenets/Nome';

// function App() {
//   return (
//     <div className="App">
//       <h1>Testando o REACT!</h1>
//     </div>
//   );
// }

// export default App;


function App(){
  return(
    <div>
      <h1>Nosso primeiro app em React</h1>
      <h3>Usando Componentes</h3>
      <Nome pessoa="Gustavo"/> 
      <br/>
      <Nome pessoa="Diego"/>
    </div>
  )
}

export default App;