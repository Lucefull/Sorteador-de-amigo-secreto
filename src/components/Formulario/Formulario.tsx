import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../hooks/useAdicionarPartipante';
import { useMensagemErro } from '../../hooks/useMensagemErro';

export const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemErro();

  const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemDeErro && <p role={'alert'}>{mensagemDeErro}</p> }
    </form>
  );
};
