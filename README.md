🚗 Projeto Montadora de Carros

📌 Descrição

Este é um projeto full-stack desenvolvido utilizando React no frontend e Express com TypeScript no backend. O objetivo é fornecer um sistema de cadastro, listagem e atualização de carros para uma montadora.

🛠 Tecnologias Utilizadas

Frontend (React + Vite)

React com TypeScript

Axios para requisições HTTP

TailwindCSS para estilização

React Router para navegação

Context API para gerenciamento de estado

Backend (Express + TypeScript)

Express.js como framework

TypeORM para interação com o banco de dados

PostgreSQL como banco de dados

CORS para permissão de requisições cross-origin

Dotenv para gerenciamento de variáveis de ambiente

📂 Estrutura do Projeto

montadora-project/
├── frontend/          # Diretório do frontend em React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│
├── backend/           # Diretório do backend em Express
│   ├── src/
│   │   ├── controllers/
│   │   ├── entities/
│   │   ├── routes/
│   │   ├── app.ts
│   │   ├── data-source.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
│
├── README.md          # Documentação do projeto

🚀 Como Rodar o Projeto

1️⃣ Clonar o Repositório

git clone https://github.com/seu-usuario/montadora.git
cd montadora

2️⃣ Configurar o Backend

cd backend
cp .env.example .env  # Criar um arquivo .env com as variáveis de ambiente
npm install
npm run dev

3️⃣ Configurar o Frontend

cd frontend
npm install
npm run dev

A aplicação estará rodando em http://localhost:5173.

📌 Funcionalidades Implementadas

✅ Cadastro de carros (nome, marca, potência, cor, imagem)✅ Listagem de carros cadastrados✅ Atualização de informações dos carros✅ Conexão com banco de dados PostgreSQL via TypeORM✅ Roteamento no frontend com React Router✅ Consumo da API com Axios

🛠 Melhorias Futuras

Implementação de autenticação JWT

Upload de imagens para um serviço de storage externo

Testes unitários no backend e frontend

📝 Licença

Este projeto é open-source e está sob a licença MIT.

Feito com ❤️ por Seu Nome 🚀

