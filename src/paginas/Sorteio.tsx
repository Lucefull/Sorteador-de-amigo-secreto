import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useListaParticipantes } from '../state/hooks/useListaParticipantes';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';
import { MdCasino } from 'react-icons/md';
import { BiCaretDown } from 'react-icons/bi';
import aviao from '../assets/aviao.png';

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  h2 {
    color: #4b69fd;
    text-align: center;
    font-size: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 16px;

    select {
      border: 2px solid #000000;
      box-shadow: 4px 4px 0px #111111;
      border-radius: 24px;
      padding: 16px 32px;
      width: 328px;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:focus {
        outline: none;
      }

      &::-ms-expand {
        display: none;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      i {
        margin-left: -42px;
      }
    }

    p {
      text-align: center;
      font-size: 18px;
      line-height: 27px;
      color: #444444;
      font-weight: 400;
      max-width: 328px;
    }

    button {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-around;
      padding: 16px;
      font-size: 16px;
      max-width: 155px;
      letter-spacing: 0.0125em;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: rgba(254, 101, 43, 0.99);
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 32px;
    }
    form {
      p {
        max-width: 475px;
        font-size: 20px;
        line-height: 30px;
      }
      button {
        font-size: 20px;
        max-width: 227px;
      }
    }
    p {
      font-size: 25px;
      line-height: 38px;
    }
  }
`;

export const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const resultado = useResultadoSorteio();

  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
      setTimeout(()=>{
        setAmigoSecreto('');
      },5000)
    }
  };

  return (
    <Card>
      <Content>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <div>
            <select
              name="participanteDaVez"
              id="participanteDaVez"
              placeholder="Selecione o seu nome"
              value={participanteDaVez}
              onChange={(e) => setParticipanteDaVez(e.target.value)}>
              <option>Selecione seu nome</option>
              {participantes.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
            <i>
              <BiCaretDown size={28} />
            </i>
          </div>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <Button>
            <i>
              <MdCasino color="white" size={30} />
            </i>
            Sortear!
          </Button>
        </form>
        {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        <img src={aviao} alt="Aviao de papel" />
      </Content>
    </Card>
  );
};
