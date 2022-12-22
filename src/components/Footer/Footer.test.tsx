import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Footer } from './Footer';
import { useListaParticipantes } from '../../hooks/useListaParticipantes';

jest.mock('../../hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('Onde não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test('A brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const botao = screen.getByRole('button');
    expect(botao).toBeDisabled();
  });
});

describe('Quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      'Ana',
      'Catarina',
      'Josefina',
    ]);
  });
  test('A brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const botao = screen.getByRole('button');
    expect(botao).not.toBeDisabled();
  });
  test('A brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
  });
});
