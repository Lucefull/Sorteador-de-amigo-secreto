import React from 'react';
import styled from 'styled-components';
import imgParticipante from '../../assets/participante.png';
import imgLogo from '../../assets/logo.png';
import imgSmallLogo from '../../assets/logo-pequeno.png';

const Content = styled.header`
  display: flex;
  background: #4b69fd;
  border: 2px solid #000000;

  flex-direction: column;
  width: auto;
  height: 23.7em;
  align-content: center;
  align-items: center;

  div {
    background: url(${imgSmallLogo}) no-repeat;
    width: 235px;
    height: 199px;
  }

  img {
    z-index: 1;
    width: 328px;
    height: 158px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 22.3em;
    
    align-items: center;
    justify-content: space-around;

    div {
      background: url(${imgLogo}) no-repeat ;
      width: 351px;
      height: 117px;
    }
    img {      
      //padding-top: 150px ;
      width: 450px;
      height: 277px;
    }
  }
`;

export const Header = () => {
  return (
    <Content>
      <div role={'img'} aria-label={'Logo sorteador'} />
      <img src={imgParticipante} alt="Participante com um presente na mão" />
    </Content>
  );
};
