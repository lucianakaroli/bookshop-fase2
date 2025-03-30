import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from './InputField'; 


test("deve renderizar o campo de input com o texto correto e valor inicial", () => {
    const label = "Nome";
    const value = "João";
    
    render(<InputField label={label} value={value} onChange={() => {}} />);
    
    const inputElement = screen.getByLabelText(label); 
    expect(inputElement).toBeInTheDocument();  
    expect(inputElement).toHaveValue(value);  
});


test("deve atualizar o valor quando o campo de input é alterado", () => {
    const label = "Email";
    const initialValue = "joao@example.com";
    const newValue = "maria@example.com";
    
    
    const ParentComponent = () => {
        const [value, setValue] = useState(initialValue);
        
        const handleChange = (e) => {
            setValue(e.target.value); 
        };
        
        return <InputField label={label} value={value} onChange={handleChange} />;
    };

    render(<ParentComponent />);

    const inputElement = screen.getByLabelText(label);
    
    
    fireEvent.change(inputElement, { target: { value: newValue } });
    
    
    expect(inputElement).toHaveValue(newValue); 
});
