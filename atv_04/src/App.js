import React from 'react'
import Produto from './Produto';

const App = () => {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  const [produto, setProduto] = React.useState(null)
  
  // React.useEffect(() => {
  //   const produtoLocal = window.localStorage.getItem('produto')
  //   if(produtoLocal !== null) setProduto(produtoLocal)
  // }, [])

  function handleClick({ target }) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`)
      .then(response => response.json())
      .then(data => setProduto(data))
    console.log(produto)

  }

  return(
    <>
      <h1>Produto: { produto && {produto.nome} }</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  ) 
};



export default App