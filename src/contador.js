import { useState } from "react";

function App() {
  let [contador, setContagem] = useState(10);
  const [historico, setHistorico] = useState([0]);

  function add() {
    console.log("Adicionando 1 numero");
    contador = contador + 1;
    // setContagem(contador + 1);
  }

  function remove() {
    console.log("Removendo 1 numero");
    setContagem(contador - 1);
  }

  return (
    <div className="App">
      <p> contagem: {contador}</p>
      <button onClick={add}>Adicionar 1</button>
      <button onClick={remove}>Remover 1</button>
      <p> contagem: {contador}</p>
      <p> contagem: {contador}</p>
    </div>
  );
}

export default App;
