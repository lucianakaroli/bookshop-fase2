import React from "react";
import "./about.css";
import Title from "../../components/Title/Title";

const About = () => {
    return (
        <div>
            <div>
            <Title text="Sobre" />
            <p className="home-page">
                Está é uma aplicação para um CRUD de um reading journal.
                     Este projeto foi elavorado na disciplina de Desenvolvimento de Sustemas Frontend do curso de 
                     Graduação Online da PUCRS.
                </p>
            </div>
        </div>
    );
}

export default About;