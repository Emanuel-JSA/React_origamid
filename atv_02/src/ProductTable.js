import React from 'react'

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const ProductTable = () => {
  return (
    produtos.map((produto) => (
      <section key={produto.nome}>
        <h1>{produto.nome}</h1>
        {produto.propriedades.map((item) => (
          <ul>
            <li>
              {item}
            </li>
          </ul>
        ))}
      </section>
    ))
  )
}

export default ProductTable