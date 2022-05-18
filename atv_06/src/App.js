import React from 'react'
import useFech from './useFetch';

const App = () => {
  const { fetchData, data, loading, error } = useFech()

  React.useEffect(() => {
    async function requestData() {
      const { response, json } = await fetchData('https://ranekapi.origamid.dev/json/api/produto/')
    }
    requestData()
  }, [])

  console.log(data)

  if (error) return <div>Error: {error.message}</div>
  if (loading) return <div>Loading...</div>
  return(
    <>
    {data && data.map(item => ( 
      <div key={item.id}>
        {item.nome}
      </div> 
    ))}
    </>
  ) 
};



export default App