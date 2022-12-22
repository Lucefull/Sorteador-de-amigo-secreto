import React from 'react';
import styled from 'styled-components';
import { useListaParticipantes } from '../../hooks/useListaParticipantes';

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 0px;
  li {
    text-align: center;
    list-style-type: none;
    font-family: 'Poppins', sans-serif;
  }
`;

export const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes();

  return (
    <Ul>
      {participantes.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </Ul>
  );
};
