import React from "react";
import { render, screen } from "@testing-library/react"; 
import About from "./About"; 
import Title from "../../components/Title/Title"; 
import '@testing-library/jest-dom';

jest.mock("../../components/Title/Title", () => ({
  __esModule: true,
  default: ({ text }) => <div>{text}</div>, 
}));

describe("About", () => {
  test("deve renderizar o título 'Sobre' e o parágrafo corretamente", () => {
    render(<About />); 

    
    const titleElement = screen.getByText(/Sobre/i);
    expect(titleElement).toBeInTheDocument();

    
    const paragraphElement = screen.getByText(/Está é uma aplicação para um CRUD de um reading journal/i);
    expect(paragraphElement).toBeInTheDocument();

    
    expect(paragraphElement).toHaveTextContent(
      "Este projeto foi elavorado na disciplina de Desenvolvimento de Sustemas Frontend"
    );
  });
});
