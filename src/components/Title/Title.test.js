import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';  
import Title from "./Title"; // Ajuste o caminho conforme necessário

// Teste 1: Verificar se o texto do título é renderizado corretamente
test("deve renderizar o texto corretamente", async () => {
    const titleText = "Título da Lista";
  
    render(<Title text={titleText} />);
  
    // Usando findByText para aguardar o render correto do texto
    const titleElement = await screen.findByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
  
// Teste 2: Verificar se a classe CSS está sendo aplicada corretamente
test("deve aplicar a classe list-title ao título", () => {
  const titleText = "Título da Lista";

  render(<Title text={titleText} />);

  const titleElement = screen.getByText(titleText);

  // Verificar se a classe CSS foi aplicada corretamente
  expect(titleElement).toHaveClass("list-title");
});
