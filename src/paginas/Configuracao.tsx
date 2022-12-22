import React, { useEffect } from 'react'
import { Formulario } from '../components/Formulario/Formulario'
import { ListaParticipantes } from '../components/ListaParticipantes/ListaParticipantes'
import { Footer } from '../components/Footer/Footer'
import { Card } from '../components/Card'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #4B69FD;
  text-align: center;
  font-size: 32px;
`;

export const Configuracao = () => {
  
  useEffect(()=>{
    const prevTitle = document.title
    document.title = 'Sorteador amigo secreto'
    return () => {
      document.title = prevTitle
    }
  },[])

  return (
    <Card>
      <section>
        <H2>Vamos Começar!</H2>
        <Formulario/>
        <ListaParticipantes/>
        <Footer/>
      </section>
    </Card>
  )
}
