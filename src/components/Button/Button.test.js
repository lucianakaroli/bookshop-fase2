import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';  
import Button from "./Button"; 

test("deve renderizar o botão com o texto correto", () => {
    const buttonText = "Clique aqui";
    
    render(<Button text={buttonText} onClick={() => {}} />);
    
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();  
});

test("deve chamar a função onClick quando o botão for clicado", () => {
    const handleClick = jest.fn(); 
    
    render(<Button text="Clique aqui" onClick={handleClick} />);
    
    
    const buttonElement = screen.getByText("Clique aqui");
    fireEvent.click(buttonElement);
    
    
    expect(handleClick).toHaveBeenCalledTimes(1);
});
