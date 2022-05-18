import React from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initialValue; 
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, storedValue);
  }, [storedValue, key]);

  return [storedValue, setStoredValue ];
}

export default useLocalStorage