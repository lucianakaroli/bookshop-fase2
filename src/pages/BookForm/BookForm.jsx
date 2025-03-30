import React, { useState, useEffect } from 'react'; // Importando useState e useEffect corretamente
import { useNavigate, useParams } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre , setGenre] = useState('');
  const [readAt, setReadAt] = useState(dayjs()); // Altere 'date' para 'readAt' 
  const [submitted, setSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o id do livro na URL

  const bookId = id ? parseInt(id, 10) : null; // Converte o id para número inteiro

  // Carregar dados do livro para edição (caso haja o ID)
  useEffect(() => {
    if (bookId) {
      const getBook = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/books/${bookId}`);
          const book = response.data;

          setTitle(book.title);
          setAuthor(book.author);
          setGenre(book.genre);

          // Convertendo a data para um formato que o Dayjs consiga entender
          const readAtDate = dayjs(book.readAt, ["DD/MM/YYYY", "YYYY-MM-DD"]);
          setReadAt(readAtDate.isValid() ? readAtDate : dayjs()); // Se a data não for válida, use a data atual
        } catch (error) {
          console.error('Erro ao buscar o livro para edição:', error);
        }
      };
      getBook();
    }
  }, [bookId]);

  // Lidar com a exibição do alerta
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        navigate('/books');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  // Lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (title === '' || author === '' || genre === '' || !readAt || !readAt.isValid()) {
      return;
    }

    const newBook = {
      id: bookId, // Usando o bookId que já é um número inteiro
      title,
      author,
      genre,
      readAt: readAt.format('DD/MM/YYYY'), // Alterado para enviar 'readAt'
    };

    try {
      console.log('Enviando dados para a API:', newBook);
      let response;
      if (bookId) {
        // Enviando PUT, mas o id vai no corpo da requisição e não na URL
        response = await axios.put('http://localhost:5000/books', newBook);
      } else {
        // Se não houver id, faz um POST para criar um novo livro
        response = await axios.post('http://localhost:5000/books', newBook);
      }

      if (response.status === 200) {
        setAlertMessage(bookId ? 'Livro atualizado com sucesso!' : 'Livro cadastrado com sucesso!');
        setAlertSeverity('success');
        setShowAlert(true);

        setTitle('');
        setAuthor('');
        setGenre('');
        setReadAt(dayjs());
        setSubmitted(false);
      }
    } catch (error) {
      setAlertMessage('Falha ao salvar o livro. Tente novamente.');
      setAlertSeverity('error');
      setShowAlert(true);
      console.error('Erro ao enviar os dados para a API', error);
    }
  };

  return (
    <div>
      <Title text={bookId ? 'Editar Livro' : 'Adicionar Livro'} />

      {showAlert && alertMessage && (
        <Alert
          severity={alertSeverity}
          className="alertCustom"
          sx={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            zIndex: 9999,
          }}
        >
          {alertMessage}
        </Alert>
      )}

      <Card className="card">
        <CardContent className="card__content">
          <form className="form" onSubmit={handleSubmit}>
            <Typography variant="h5" component="div">
              <InputField
                id="title"
                label="Título"
                value={title}
                className="form__input"
                onChange={(e) => setTitle(e.target.value)}
                error={submitted && title === ''}
                errorMessage="O campo título é obrigatório"
              />
            </Typography>
            <Typography variant="h5" component="div">
              <InputField
                id="author"
                label="Autor"
                value={author}
                className="form__input"
                onChange={(e) => setAuthor(e.target.value)}
                error={submitted && author === ''}
                errorMessage="O campo autor é obrigatório"
              />
            </Typography>
            <Typography variant="h5" component="div">
              <InputField
                id="genre"
                label="Gênero"
                value={genre}
                className="form__input"
                onChange={(e) => setGenre(e.target.value)}
                error={submitted && genre === ''}
                errorMessage="O campo gênero é obrigatório"
              />
            </Typography>
            <Typography variant="h5" component="div">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    id="readAt"
                    label="Data"
                    value={readAt}
                    onChange={(newDate) => setReadAt(newDate)}
                    error={submitted && (!readAt || !readAt.isValid())}
                    errorMessage="O campo data é obrigatório"
                    inputFormat="DD/MM/YYYY"
                    className="date-input"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Typography>
            <CardActions>
              <Button text={bookId ? 'Atualizar Livro' : 'Adicionar Livro'} />
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookForm;
