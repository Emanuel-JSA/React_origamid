import React from 'react'

const useFech = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const fetchData = React.useCallback( async (url, options) => {
    let response
    let json

    setLoading(true)
    setError(null)
    try {
      response = await fetch(url, options)
      json = await response.json()
    } catch (error) {
      json = null
      setError(error)
    } finally {
      setData(json)
      setLoading(false)
      return { response, json }
    }
  }, [])

  return { fetchData, data, loading, error }
}

export default useFech