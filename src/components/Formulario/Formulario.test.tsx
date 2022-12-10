import { render, screen } from '@testing-library/react';
import React from 'react';
import { Formulario } from './Formulario';

//Jest

test('Quando o input está vazio, novos participantes não podem ser adicionados',() =>{
    
    render(<Formulario />)

    // encontra o DOM do input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
    // encontrar o botao
    const botao = screen.getByRole('button');

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o botao estaja desabilitado
    expect(botao).toBeDisabled();
})