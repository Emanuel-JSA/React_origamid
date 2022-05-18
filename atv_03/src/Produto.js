import React from 'react'

const Produto = ({ dados }) => {
  console.log(dados)

  return (
    <>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
    </>
  )
}

export default Produto