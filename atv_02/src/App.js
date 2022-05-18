import React from 'react'
import Header from './Header';
import Home from './Home';
import Products from './Products';

const App = () => {
  const { pathname } = window.location

  let Pagina
  if(pathname === '/products') {
    Pagina = Products
  } else {
    Pagina = Home
  }
  
  return(
    <>
      <Header />
      <Pagina />
    </>
  ) 
};



export default App