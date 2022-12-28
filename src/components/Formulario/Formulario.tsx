import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarPartipante';
import { useMensagemErro } from '../../state/hooks/useMensagemErro';
import { Content } from './FormularioStyle';
import userIcon from '../../assets/person_add.svg'

export const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemErro();

  const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarNaLista(nome.trim());
    setNome('');
    inputRef.current?.focus();
  };
  return (
    <Content onSubmit={adicionarParticipante}>
      <div>
      <img src={userIcon} alt="" />
        <input
          ref={inputRef}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder={'Insira os nomes dos participantes'}
        />
      </div>

      <button disabled={!nome}>Adicionar</button>
      {mensagemDeErro && <p role={'alert'}>{mensagemDeErro}</p>}
    </Content>
  );
};
