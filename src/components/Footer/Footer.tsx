import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';
import { FooterStyle } from './FooterStyle';
import Sacola from '../../assets/sacolas.png'
import { Button } from '../Button';
import { BsPlayCircle } from 'react-icons/bs'
import { useSorteador } from '../../state/hooks/useSorteador';
export const Footer = () => {
  const participantes = useListaParticipantes();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteio');
  };

  return (
    <FooterStyle>
      <Button disabled={participantes.length < 3} onClick={iniciar} >
      <i><BsPlayCircle size={40}/></i>
        Iniciar brincadeira!
      </Button>
      <img src={Sacola} alt="Imagem Sacola" />
    </FooterStyle>
  );
};
