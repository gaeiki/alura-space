import React from 'react'
import styles from './Rodape.module.scss'
import fb from '../../assets/facebook.svg'
import tw from '../../assets/twitter.svg'
import ig from '../../assets/instagram.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
                <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
                <img src={fb} alt="Ícone do Facebook" />
            </a>
            <a href="https://twitter.com/aluraonline?lang=en" target="_blank" rel="noreferrer">
                <img src={tw} alt="Ícone do Twitter" />
            </a>
            <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank" rel="noreferrer">
                <img src={ig} alt="Ícone do Instagram" />
            </a>
        </div>
        <p>Desenvolvido por Gabriel Eiki. Projeto original Alura.</p>
    </footer>
  )
}
