import React, { useState } from 'react'
import { Button } from '../components/Button';
import { useListaParticipantes } from '../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';

export const Sorteio = () => {
    const participantes = useListaParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('');

    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoSorteio();

    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (
        <section>
            <form onSubmit={sortear}>
                <select name="participanteDaVez"
                    id="participanteDaVez"
                    placeholder='Selecione o seu nome'
                    value={participanteDaVez}
                    onChange={e => setParticipanteDaVez(e.target.value)}>
                    {participantes.map(e => <option key={e}>{e}</option>)}
                </select>
                <Button>Sortear</Button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
}
