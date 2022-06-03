import './home.scss'
import {useState, useEffect} from 'react'
import hero from '../../images/amico.svg'
import {Header} from '../../components/Header'
import { Link } from "react-router-dom";

function Servicos() {
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


      </main>
    </div>
  )
}

export default Servicos;