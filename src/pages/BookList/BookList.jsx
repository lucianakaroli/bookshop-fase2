import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import TrashIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BookIcon from '@mui/icons-material/Book';
import axios from 'axios';   
import "./BookList.css";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState(null);   

     
    const handleRemove = async (id) => {
        try {
    
            await axios.delete(`http://localhost:3000/books/${id}`);         
            setBooks(books.filter((book) => book.id !== id));
        } catch (error) {
            console.error("Erro ao excluir o livro", error);
        }
    };

     
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                 
                const response = await axios.get("http://localhost:3000/books");
                setBooks(response.data);   
            } catch (error) {
                setError("Erro ao carregar os livros.");
                console.error("Erro ao buscar livros:", error);
            } finally {
                setLoading(false);   
            }
        };

        fetchBooks();  
    }, []);   

    return (
        <div className="book-list-container">
            <Title text="Lista de Livros" />
            {loading ? (
                <p>Carregando livros...</p>   
            ) : error ? (
                <p>{error}</p>   
            ) : books.length === 0 ? (
                <p>Não há livros cadastrados.</p>
            ) : (
                <List className="book-list">
                    {books.map((book) => (
                        <ListItem key={book.id} className="book-list-item">
                            <ListItem className="item-icon">
                                <ListItemAvatar className="item-avatar">
                                    <Avatar className="avatar">
                                        <BookIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItem>
                            <ListItemText className="item-text" secondary={book.title} />
                            <ListItemText className="item-text" secondary={book.author} />
                            <ListItemText className="item-text" secondary={book.gender} />
                            <ListItemText className="item-text" secondary={book.date} />
                            <Link to={`/book-view/${book.id}`}>
                                <Fab size="small" className="view_icon" aria-label="view">
                                    <ViewIcon />
                                </Fab>
                            </Link>
                            <Link to={`/book-form/${book.id}`}>
                                <Fab size="small" className="edit_icon" aria-label="view">
                                    <EditIcon />
                                </Fab>
                            </Link>
                            <button
                                onClick={() => handleRemove(book.id)}
                                style={{
                                    backgroundColor: "transparent",
                                    padding: 0,
                                }}
                            >
                                <Fab size="small" className="delete_icon" aria-label="delete">
                                    <TrashIcon />
                                </Fab>
                            </button>
                        </ListItem>
                    ))}
                </List>
            )}
            <Link to="/book-form" className="add-book-link">
                <Button text="Adicionar Novo Livro" />
            </Link>
        </div>
    );
};

export default BookList;
