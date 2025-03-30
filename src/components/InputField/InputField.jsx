import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "./InputField.css";

const InputField = ({
    id,
    label,
    value,
    onChange,
    error,
    errorMessage,
    type = "text",
    className,
}) => {
    return (
        <div className="form__group">
            <TextField
                error={error}
                id={id}
                label={label}
                type={type}
                value={value}
                onChange={onChange}
                className={className}
                helperText={error && errorMessage}
          />
        </div>
    );
};

export default InputField;
