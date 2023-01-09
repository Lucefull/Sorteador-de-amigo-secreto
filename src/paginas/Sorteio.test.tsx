import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from '../state/hooks/useListaParticipantes';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';
import { Sorteio } from './Sorteio';

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe('Na pagina de sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Jorel'];

  const resultado = new Map([
    ['Ana', 'Jorel'],
    ['Catarina', 'Ana'],
    ['Jorel', 'Catarina'],
  ]);

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const botao = screen.getByRole('button');

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });

  test('O nome do amigo secreto deve desaparecer depois de um tempo', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const botao = screen.getByRole('button');

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    const alerta = screen.queryByRole('alert');
    expect(alerta).not.toBeInTheDocument();
  });
});
