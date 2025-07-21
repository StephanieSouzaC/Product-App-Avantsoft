<h1 align="center"> Sistema de Cadastro de Produtos</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=React&message=React&color=61dafb&style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/static/v1?label=NestJS&message=NestJs&color=e0234e&style=for-the-badge&logo=nestjs"/>
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=Typescript&color=3178c6&style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/static/v1?label=PostgreSQL&message=Postgresql&color=336791&style=for-the-badge&logo=postgresql"/>
  <img src="https://img.shields.io/static/v1?label=Docker&message=Docker&color=2496ED&style=for-the-badge&logo=docker"/>
  <img src="https://img.shields.io/static/v1?label=Axios&message=Axios&color=5A29E4&style=for-the-badge&logo=axios"/>
</p>

> Status do Projeto: ✔️ Finalizado.

---

### 📚 Tópicos

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Como rodar o projeto com Docker](#como-rodar-o-projeto-com-docker)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Desenvolvedora](#desenvolvedora)

---

## Descrição do projeto 

<p align="justify">
Aplicação fullstack para cadastro de produtos, desenvolvida com React no frontend e NestJS no backend. Permite criar e editar produtos com nome, SKU e preço. Os dados são armazenados em um banco PostgreSQL e a aplicação é totalmente containerizada com Docker.
</p>

---

## ✅ Funcionalidades

### 🔧 Backend (NestJS + Prisma)

- **POST /products**: Cria um produto com nome, preço e SKU.
- **GET /products**: Retorna todos os produtos ordenados por nome.
- **GET /products/:id**: Retorna os dados de um produto específico.
- **PUT /products/:id**: Atualiza os dados de um produto.
- **DELETE /products/:id**: Remove um produto.
- Todos os produtos retornam também o campo `missingLetter`, que indica a primeira letra do alfabeto ausente no nome.

### 💻 Frontend (React + Next.js)

- Formulário para cadastrar produto.
- Listagem ordenada por nome.
- Visualização da letra ausente.
- Exclusão de produtos.

---

## Como rodar a aplicação (Docker) 🐳

> Pré-requisitos: [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado.

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Iniciar o projeto completo:
```bash
docker-compose down -v
docker-compose up --build
```

3. Acessar no navegador:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 🧪 Testes Automatizados
### Rodar localmente:

```bash
npm run test
```

---
## 📦 Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [TypeScript](https://www.typescriptlang.org/)

---

## 👩‍💻 Desenvolvedora

[![Stephanie Souza GitHub](https://github.com/StephanieSouzaC.png?size=100)](https://github.com/StephanieSouzaC)

**Stephanie Souza**  
[🔗 LinkedIn](https://www.linkedin.com/in/stephanie-souza-83a18b239)
