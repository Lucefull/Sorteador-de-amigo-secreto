import React from 'react'
import { Formulario } from '../components/Formulario/Formulario'
import { ListaParticipantes } from '../components/ListaParticipantes/ListaParticipantes'
import { Footer } from '../components/Footer/Footer'
import { Card } from '../components/Card'

export const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos Começar</h2>
        <Formulario/>
        <ListaParticipantes/>
        <Footer/>
      </section>
    </Card>
  )
}
