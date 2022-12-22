import styled from 'styled-components';

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;

  img {
    padding: 15px;
    height: 98px;
    width: 127px;
  }
  i{
    display: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    
    img {
      height: 183px;
      width: 237px;
    }
    i{
        display: block;
    }
  }
`;
