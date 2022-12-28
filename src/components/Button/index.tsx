import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

const ButonContent = styled.button`
  font-family: 'Poppins';
  height: 64px;
  width: 155px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  border-radius: 37px;
  padding: 8px 24px 16px;
  background: rgba(254, 101, 43, 0.99);
  border: 1px solid #000;
  box-shadow: 2px 2px 0px 0px #000;

  &:hover {
    background: rgba(75, 105, 253, 0.99);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <ButonContent onClick={onClick} disabled={disabled}>
      {children}
    </ButonContent>
  );
};
