import React from 'react'
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produtos', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return(
    <>
      <h1>Produto: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  ) 
};



export default App