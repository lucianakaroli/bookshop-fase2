import React from "react";

import "./Text.css";

const Title = ({
    text,
}) => {
    return (
        <h1 className="list-title">{text}</h1>
    );
};

export default Title;
