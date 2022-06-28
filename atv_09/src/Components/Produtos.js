import React from 'react'
import styles from './Produtos.module.css'
import useFech from './useFetch';
import { Link } from 'react-router-dom'
import Head from './Head';


const Produtos = () => {
  const { fetchData, data, loading, error } = useFech()

  React.useEffect(() => {
    async function requestData() {
      await fetchData('https://ranekapi.origamid.dev/json/api/produto/')
    }
    requestData()
  }, [])

  if (error) return <div>Error: {error.message}</div>
  if (loading) return <div>Loading...</div>
  return(
    <div className={`${styles.produtos} animeLeft`}>
      <Head title="Produtos"/>
      {data && data.map(produto => ( 
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1>
          {produto.nome}
          </h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
        </Link> 
      ))}
    </div>
  ) 
}

export default Produtos