import { realizarSorteio } from '../helpers/realizarSorteio';
import { resultadoAmigoSecreto } from '../atom';
import { useSetRecoilState } from 'recoil';
import { useListaParticipantes } from './useListaParticipantes';

export const useSorteador = () => {
  const participantes = useListaParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecreto);
  
  return () => {
    setResultado(realizarSorteio(participantes));
  };
};
