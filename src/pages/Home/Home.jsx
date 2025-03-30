import React from "react";
import "./home.css";
import Title from "../../components/Title/Title";

const Home = () => {
    return (
        <div>
            <div>
                <Title text="Página inicial" />
                <p className="home-page">
                    Bem vindo ao Reading Journal!
                </p>
            </div>
        </div>
    );
}

export default Home;