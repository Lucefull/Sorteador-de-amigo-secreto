import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../hooks/useListaParticipantes";
import { Sorteio } from "./Sorteio";

jest.mock('../hooks/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn(),
    };
});

describe('Na pagina de sorteio', () => {
    const participantes = [
        'Ana', 'Catarina', 'Jorel'
    ]
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length);

    })

})