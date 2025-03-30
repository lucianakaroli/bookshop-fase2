import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./BookView.css";

const BookView = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(response.data);
            } catch (error) {
                setError("Erro ao carregar o livro.");
            } finally {
                setLoading(false);
            }
        };

        getBook();
    }, [id]);

    if (loading) {
        return <p>Carregando detalhes do livro...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!book) {
        return <p>Livro não encontrado.</p>;
    }

    return (
        <div className="book-view">
            <Title text="Detalhes do Livro" />
            <div className="book-view__content">
                <h2>{book.title}</h2>
                <p>Autor: {book.author}</p>
                <p>Gênero: {book.gender}</p>
                <p>Data de leitura: {book.readAt}</p>
                <Link to="/book-list">Voltar</Link>
            </div>
        </div>
    );
}

export default BookView;
