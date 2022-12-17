import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Formulario } from './Formulario';
import { RecoilRoot } from 'recoil';

describe('Comportamento do formulario.tsx', () => {
  test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // encontra o DOM do input
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    // encontrar o botao
    const botao = screen.getByRole('button');

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o botao estaja desabilitado
    expect(botao).toBeDisabled();
  });

  test('Adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    // clicar no botao de submeter
    fireEvent.click(botao);

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    // garantir que o input esteja limpo
    expect(input).toHaveValue('');
  });

  test('Nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });

    fireEvent.click(botao);

    expect(input).toHaveFocus();

    expect(input).toHaveValue('');

    let mensageErro = screen.getByRole('alert');

    expect(mensageErro.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });

  test('A mensagem de erro deve sumir apos times', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(botao);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(botao);
    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
    // espena n segundos

    act(() => {
      jest.runAllTimers();
    });

    let mensageErro = screen.queryByRole('alert');

    expect(mensageErro).toBe(null);
  });
});
