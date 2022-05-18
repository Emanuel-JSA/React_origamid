import React from 'react'
import useFech from './useFetch';

// // Faça um fetch (POST) para a API abaixo
// // Para a criação ser aceita é necessário enviar dodos de:
// // nome, email, senha, cep, rua, numero, bairro, cidade e estado

// // Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// // Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  }
]

const App = () => {

  const [response, setResponse] = React.useState(null);
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  function handleChange({ target }){
    const { id, value} = target
    setForm({...form, [id]: value})
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)})
      .then(response => (
        setResponse(response.status)
      ))
      
  }

  return <form onSubmit={handleSubmit}>
    {formFields.map(field => (
      <div key={field.id}>
        <label htmlFor={field.id}>{field.label}</label>
        <input
          id={field.id}
          type={field.type}
          value={form[field.id]}
          onChange={handleChange}
        />
      </div>
    ))}
    <br/>
    <button type="submit">Enviar</button>
    {response && response.ok && <p>Formulário enviado</p>}
  </form>
};



export default App