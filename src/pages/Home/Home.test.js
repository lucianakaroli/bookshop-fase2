import React from "react";
import { render, screen } from "@testing-library/react"; // Importando funções do Testing Library
import Home from "./Home"; // Importando o componente Home
import Title from "../../components/Title/Title"; // Importando o Title
import '@testing-library/jest-dom';

// Mocking do Title
jest.mock("../../components/Title/Title", () => ({
  __esModule: true,
  default: ({ text }) => <div>{text}</div>, // Mocking do Title para renderizar apenas o texto
}));

describe("Home", () => {
  test("deve renderizar o título 'Página inicial' e o parágrafo corretamente", () => {
    render(<Home />); // Renderizando o componente Home

    // Verificando se o título 'Página inicial' está presente na tela
    const titleElement = screen.getByText(/Página inicial/i);
    expect(titleElement).toBeInTheDocument(); // Verificando se o título está no documento

    // Verificando se o parágrafo contém o texto correto
    const paragraphElement = screen.getByText(/Bem vindo ao Reading Journal!/i);
    expect(paragraphElement).toBeInTheDocument(); // Verificando se o parágrafo está no documento

    // Verificando se o parágrafo contém o texto exato
    expect(paragraphElement).toHaveTextContent("Bem vindo ao Reading Journal!");
  });
});
