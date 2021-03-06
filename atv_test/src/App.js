import Radio from "./Radio";
import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [slide, setSlide] = React.useState(0);
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [acertos, setAcertos] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value })
  }

  function result() {
    const corretas = perguntas.filter(
      ({id, resposta}) => respostas[id] === resposta
    )
    setAcertos(`Você acertou ${corretas.length} de ${perguntas.length}`)
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      result();
    }
  } 

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio 
        active={slide === index}
        key={pergunta.id} 
        onChange={handleChange} 
        value={respostas[pergunta.id]}
        {...pergunta} />
      ))}
      { acertos ? <p>{acertos}</p> 
        : 
      <button type="button" onClick={handleClick}> Próximo </button>
      }
    </form>
  );
}

export default App;
