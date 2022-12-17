import React from 'react';
import styled from 'styled-components';
import imgParticipante from '../../assets/participante.png';
import imgLogo from '../../assets/logo.png';
import imgSmallLogo from '../../assets/logo-pequeno.png';

const Content = styled.header`
  display: flexbox;
  background: #4b69fd;
  border: 2px solid #000000;
  

  flex-direction: column;
  width: 100vw;
  max-width: 400px;
  //padding-top: 30px;
  height: 384px;
  justify-content: center;

  div {
    background: url(${imgSmallLogo}) no-repeat;
    width: 235px;
    height: 199px;
  }

  img {
    z-index: 1;
    position: absolute;
    width: 328px;
    height: 158px;
    left: 16px;
    top: 203px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100vw;
    max-width: 1024px;
    height: 384px;

    align-items: center;
    justify-content: space-between;

    div {
      background: url(${imgLogo}) no-repeat;
      width: 351px;
      height: 117px;
    }
    img {
      width: 450px;
      height: 277px;
      left: 480px;
      top: 121px;
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
