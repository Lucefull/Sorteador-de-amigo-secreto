import React from 'react'
import { useListaParticipantes } from '../../hooks/useListaParticipantes'

export const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes();

  return(
    <ul>
        {participantes.map(e=> <li key={e}>{e}</li> )}
    </ul>
  )
}
