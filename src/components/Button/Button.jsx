import React from "react";

import "./Button.css";

const Button = ({
    text,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            type="submit"
            className="form__button"
        >
            {text}
        </button>
    );
}

export default Button;
 