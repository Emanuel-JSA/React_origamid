import React from 'react'
import { useParams } from 'react-router-dom'
import Head from './Head';
import styles from './Produto.module.css'
import useFech from './useFetch';

const Produto = () => {
  const { id } = useParams();
  const { fetchData, data, loading, error } = useFech();

  React.useEffect(() => {
    async function requestData() {
      await fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }
    requestData()
  }, [])

  if (error) return <div>Error: {error.message}</div>
  if (loading) return <div>Loading...</div>
  return (
    <div>
      {data && 
        <div className={`${styles.produto}`} key={data.id}>
          <Head title={`Produto: ${data.nome}`} description="Descricao"/>
          <img src={data.fotos[0].src} alt={data.fotos[0].titulo}/>
          <div>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Produto