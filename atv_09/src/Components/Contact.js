import React from 'react'
import styles from './Contact.module.css'
import image from '../img/contato.jpg'
import Head from './Head'

const Contact = () => {
  return (
    <div className={`${styles.contact} animeLeft`}>
      <Head title="Contato" description="pagina de contatos"/>
      <img src={image} alt="Contato" />
      <div>
        <h1>Contato:</h1>
        <ul className={styles.data}>
          <li>
            email: exemplo@exemplo.com
          </li>
          <li>
            telefone: (11) 99999-9999
          </li>
          <li>
            endereço: Rua exemplo, nº 0
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;