import './home.scss'
import {useState, useEffect} from 'react'
import hero from '../../images/amico.svg'
import {Header} from '../../components/Header'
import { Link } from "react-router-dom";

function Homepage() {
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    if(canvas) {
        canvas.parentNode.removeChild(canvas)
    }
  }, [])
  return (
    <div>
      <title>Home</title>
      <Header />

      <main className="contentContainer">
        <section className="hero">
          <h1>ME RECRUTE</h1>
          <div className='legenda'>
            <p>
              Procurando alguem para embarca na sua jornada e atingir as estrelas?
            </p>
            <p>
              <strong>Sua procura terminou! </strong>
            </p>
            <p>
              Recrute esse astronauta para ter paginas de outro mundo.
            </p>
          </div>
          <Link to="/contato" className="button">
            RECRUTAR
          </Link>
        </section>

        <img src={hero} alt="Astronauta negro ilustração" />
      </main>
    </div>
  )
}

export default Homepage;