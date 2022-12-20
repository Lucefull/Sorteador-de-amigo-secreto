import styled from 'styled-components';

export const Content = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins';
  font-size: 16px;
  padding: 5px;
  input {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    border-radius: 37px;
    padding: 12px 28px;
    width: 17em;
    font-family: 'Poppins';
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  button {
    border-radius: 37px;
    background: #c4c4c4;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    margin-top: 8px;
    padding: 12px 28px;
    font-family: 'Poppins';
    font-size: 16px;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    input {
      border-radius: 37px 0 0 37px;
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.7);
      padding: 18px 37px 18px 107px;
    }
    button {
      border-radius: 0 37px 37px 0;
      border: 2px solid #000000;
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.7);
      margin-top: 0;
      padding: 18px 40px;
    }
  }
`;