import styled from 'styled-components';

export const Content = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins';
  font-size: 16px;
  padding: 5px;
  img {
    margin-left: 15px;
    margin-top: 15px;
    position: absolute;
  }
  input {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    border-radius: 37px;
    padding: 12px 40px;
    width: 17em;
    font-family: 'Poppins';
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
  div {
    flex-direction: column;
    text-align: center;
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
    width: 158px;
  }

  p{
    text-align: center;
    background-color: #F2D3D7;
    border-radius: 10px;
    padding: 15px;
    font-family: 'Poppins';
    width: 20em;
    margin: 15px;
  }

  @media screen and (min-width: 768px) {
    div {
      flex-direction: row;
    }
    img {
      margin-left: 30px;
      margin-top: 20px;
      position: absolute;
    }
    input {
      border-radius: 37px 0 0 37px;
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.7);
      padding: 18px 37px 18px 107px;
    }
    p{
      width: 35em;
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
