import React from 'react';
import styled from 'styled-components';
import imgParticipante from '../../assets/participante.png';
const Wrapper = styled.header`
  box-sizing: border-box;
  position: absolute;
  width: 100vw;

  background: #4b69fd;
  border: 2px solid #000000;
`;

const Content = styled.main`
  max-width: 1040px;
  height: 454px;
`;

const Logo = styled.div`
  background-image : url('../../assets/logo.png');
  width: 351px;
  height: 117px;
`;

const Participante = styled.img`
  z-index: -1;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo role={'img'} aria-label={'Logo sorteador'} />
        <Participante
          src={imgParticipante}
          alt="Participante com um presente na mão"
        />
      </Content>
    </Wrapper>
  );
};
