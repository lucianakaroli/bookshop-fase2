# Projeto de Gerenciamento de Livros

Este é um projeto simples de gerenciamento de livros, onde os usuários podem adicionar livros com título, autor, gênero e data de publicação, visualizar todos os livros cadastrados e também remover livros da lista. O projeto utiliza o **React**, **React Router** e **React Icons** para criar uma interface interativa e fácil de usar.

## Funcionalidades

- Adicionar livros à lista com título, autor, gênero e data de publicação.
- Visualizar todos os livros cadastrados em uma página de listagem.
- Remover livros da lista.
- Os livros são armazenados no **localStorage** para persistência entre as sessões.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Para navegação entre páginas.
- **React Icons**: Para ícones bonitos e interativos, como o ícone de lixeira para remover livros.

## Pré-requisitos

Antes de rodar o projeto, é necessário ter o **Node.js** e o **npm** instalados em sua máquina. Se ainda não os tem, você pode instalá-los [aqui](https://nodejs.org/).

## Instalação

1. **Clone o repositório**:
   - Abra o terminal e clone o repositório:
     ```bash
     git clone https://seu-repositorio.git
     ```

2. **Instale as dependências**:
   - Navegue até a pasta do projeto:
     ```bash
     cd nome-do-projeto
     ```
   - Instale as dependências do projeto:
     ```bash
     npm install
     ```

## Como Rodar o Projeto

1. **Iniciar o servidor de desenvolvimento**:
   - Após as dependências estarem instaladas, rode o comando para iniciar o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```

2. **Acessar o projeto no navegador**:
   - O projeto estará rodando na porta **5173** (padrão do Vite). Abra o seu navegador e acesse:
     ```
     http://localhost:5173
     ```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:



### **Descrição dos Componentes**

#### **App.jsx**
Este é o componente principal onde as rotas são definidas. Ele utiliza o **React Router** para navegar entre as páginas do aplicativo.

- **Rotas**:
  - `/` - Página inicial (componente **Home**).
  - `/about` - Página de informações sobre o aplicativo (componente **About**).
  - `/add` - Página para adicionar um novo livro (componente **BookForm**).
  - `/book-list` - Página de listagem de livros (componente **BookList**).

#### **Navbar.jsx**
Este componente renderiza a barra de navegação do site. Ele contém os links para as páginas principais: adicionar livro, visualizar lista de livros, e outras páginas.

- **Funcionalidade**:
  - Contém links de navegação entre as páginas de adicionar livro, a página de listagem de livros, a página inicial e a página sobre.
  - Usando **React Router**, ele gerencia a navegação do usuário no aplicativo.

#### **Home.jsx**
Esta é a página inicial do projeto. Ela pode conter uma breve introdução ao sistema de gerenciamento de livros.

- **Funcionalidade**:
  - Exibe informações iniciais sobre o aplicativo ou qualquer conteúdo que você deseje destacar na página principal.

#### **About.jsx**
A página **About** contém informações sobre o aplicativo, como sua finalidade, as tecnologias utilizadas, ou até detalhes de contato ou créditos.

- **Funcionalidade**:
  - Exibe informações sobre o projeto ou equipe de desenvolvimento.

#### **BookForm.jsx**
Este componente renderiza o formulário de adição de livros. Ele possui quatro campos de entrada: título, autor, gênero e data de publicação. Quando o usuário submete o formulário, os dados são validados e, se estiverem corretos, o livro é adicionado ao **localStorage** e o usuário é redirecionado para a página de listagem.

- **Funcionalidade**:
  - Entrada para o título do livro.
  - Entrada para o autor do livro.
  - Entrada para o gênero do livro.
  - Entrada para a data de publicação do livro.
  - Validação dos campos para garantir que todos estão preenchidos antes de submeter.
  - Redirecionamento para a página de listagem de livros após a adição.

#### **BookList.jsx**
Este componente exibe a lista de livros adicionados. Ele recupera os livros armazenados no **localStorage** e os exibe em uma lista. Cada item da lista possui um botão com um ícone de lixeira, permitindo que o usuário remova o livro.

- **Funcionalidade**:
  - Exibe a lista de livros armazenados no **localStorage**.
  - Permite que o usuário remova livros da lista com um botão de lixeira.
  - Atualiza o **localStorage** e o estado local após a remoção de um livro.

#### **BookForm.css**
Este arquivo contém os estilos específicos para o formulário de adição de livros. Ele define a aparência dos campos de entrada, botões e mensagens de erro.

#### **BookList.css**
Este arquivo contém os estilos específicos para a lista de livros. Ele define a aparência da lista de livros, incluindo margens, fontes e o estilo do botão de remover.

#### **Navbar.css**
Este arquivo contém os estilos específicos para a barra de navegação (Navbar). Ele define a aparência da barra de navegação, incluindo as cores, layout e responsividade.

## Funcionalidade de Remoção de Livros

Na página de listagem (`BookList.jsx`), cada livro adicionado possui um botão com um ícone de lixeira, feito com **React Icons**. Ao clicar nesse botão, o livro é removido tanto da lista visível quanto do **localStorage**. 

O botão de remover foi estilizado com um ícone bonito de lixeira para melhorar a experiência do usuário.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
