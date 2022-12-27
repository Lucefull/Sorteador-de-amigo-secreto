import React from 'react'
import { useListaParticipantes } from '../hooks/useListaParticipantes'

export const Sorteio = () => {

    const participantes = useListaParticipantes();
    return (
        <section>
            <form>
                <select name="participanteDaVez" id="participanteDaVez">
                    {participantes.map(e =><option key={e}>{e}</option>)}
                </select>
            </form>
        </section>
    )
}
