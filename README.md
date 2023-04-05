# Restricted CPF system / Sistema restrito de cpf

## :link: About / Descrição

Um sistema que controla os CPFs adicionado-os em uma lista restrita para consultas futuras.

A system that keeps track of CPFs added them to a restricted list for future reference.

## :hammer: Features / Funcionalidades

:ballot_box_with_check: `POST /cpf`

```
Request body: { cpf: string }

- Add a new user on restrict list
- Adiciona um novo usuário

Response body: { createdAt: DateTime, cpf: string, id: number }
Response status: 201 (CREATED)
Error status: 400 (BAD_REQUEST), 409 (CONFLICT)
```

:ballot_box_with_check: `GET /cpf`

```
- Return all CPFs on restrict system
- Retorna todos CPFs na sistema restrita

Response body:[ { createdAt: DateTime, cpf: string }]
Error status: 200 (OK)
```

:ballot_box_with_check: `GET /cpf/{cpf}`

```
- Return a CPF sent on URL param
- Retorna um CPF enviado no parâmetro URL

Response body: { createdAt: DateTime, cpf: string }
Response status: 200 (OK)
Error status: 400 (BAD_REQUEST), 404 (NOT_FOUND),
```

:ballot_box_with_check: `DELETE /cpf/{cpf}`

```
- Delete a CPF sent on URL param
- Deleta o CPF enviado no parâmetro URL

Response status: 204 (NO_CONTENT)
Error status: 400 (BAD_REQUEST), 404 (NOT_FOUND),
```

## :woman_technologist: Technologies

<p align="center">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black" />
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/supertest-141526?style=for-the-badge&logo=jest&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=000000"/>
  <img src="https://img.shields.io/badge/supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/render-46E3B7?style=for-the-badge&logo=render&logoColor=ffffff"/>
</p>
<br>

## :tada: How to run

### Required (obrigatório):

- Node
- npm
- PostgreSQL (optional / opcional)

```
# Clone this repo
# Clone esse repositório

$ git clone https://github.com/Mateusr337/BattlePoke_API.git

# Install dependencies
# Instale as dependências

$ npm i

# Migrate database model (prisma)
# Migrar modelo de banco de dados (prisma)

$ npm run prisma:migrate
$ npm run prisma:test:migrate

# Run like development
# Execute como desenvolvimento

$ npm run dev

# Run tests
# Execute os testes

$ npm run test
$ npm run test:coverage
```
