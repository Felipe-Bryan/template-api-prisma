(EN)

# API Template – TypeScript – Prisma

Template for building APIs using Prisma ORM.

The repository below generates entity files based on the `schema.prisma` file:<br>
https://github.com/Felipe-Bryan/prisma-file-generator

It is suggested that you read the documentation of the repository above to understand how the file generator works.

The file generator above has been integrated into the API. Simply run the following command in the terminal to automatically generate files and update the Prisma client:

```
npm run generate
```

---

🧰 Technologies used:

- TypeScript
- Prisma ORM
- Express

---

⚙️ Configured tools:

- Redis
- JSON Web Token (JWT)
- Bcrypt

---

🧪 Installed tools:

- Jest
- ZOD

✅ Basic architecture concepts have been applied.

---

## 🚀 Installing

To start using the API, open the terminal and run:

```
npm install
```

Initialize Prisma:

```
npx prisma init
```

---

## ☕ Using the Template
First, create a `.env` file and fill it with your project information, following the example provided in `.env.example`.

---

## ℹ️ Important!
Redis is already configured and ready to use.<br>
In the `src/index.ts` file, the comments should be removed to initiate the connection to the database.

---

## ℹ️ Additional Information
This project was born from the idea of updating this repository:<br>
https://github.com/Felipe-Bryan/template-api-ts

Taking advantage of the AI wave, part of this project was developed with the help of ChatGPT (Web) and GitHub Copilot (VSCode Extension).

## 🔄 Key Updates

- Switched ORM from TypeORM to PrismaORM
- Implemented ZOD for data validation
- Added data encryption with Bcrypt
- Integrated automatic file generator based on schema.prisma

---

(PT-BR)

# API Template - Typescript - Prisma

- Template para construção de API - Prisma ORM<br>

O repositório abaixo gera arquivos para as entidades de acordo com o arquivo `schema.prisma`<br>
https://github.com/Felipe-Bryan/prisma-file-generator

É sugerido que leia a documentação do repositório acima para compreender o funcionamento do gerador de arquivos.

O gerador de arquivos acima foi inserido na API, basta rodar o comando abaixo no terminal para a geração automática de arquivos e atualização do prisma client

```
npm run generate
```

---

🧰 Tecnologias utilizadas:<br>
Typescript<br>
Prisma ORM<br>
Express<br>

⚙️ Ferramentas configuradas:<br>
Redis<br>
JSON Web Token<br>
Bcrypt<br>

🧪 Ferramentas instaladas:<br>
Jest<br>
ZOD<br>

✅ Conceitos básicos de arquitetura aplicados<br>

---

## 🚀 Instalando

Para iniciar o uso da api, abra o terminal e execute:

```
npm install
```

Inicializar o Prisma:

```
npx prisma init
```

---

## ☕ Usando o Template

- Primeiro crie um arquivo .env e complete com as informações do seu projeto, seguindo o exemplo contido no .env.example<br>

---

## ℹ️ Importante!

- Redis está configurado e pronto para uso.<br>
  No arquivo `src/index.ts` devem ser removidos os comentários para que se inicie a conexão com o banco de dados

---

## ℹ️ Informações Adicionais

- Este projeto surgiu da ideia de atualizar este repositório:<br>
  https://github.com/Felipe-Bryan/template-api-ts

- Aproveitando a crescente onda da Inteligência Artificial, paret deste projeto foi desenvolvido com ajuda do ChatGPT(Web) e Github Copilot(Extensão VSCode)

# 🔄 Principais alterações

- Mudança de ORM, saiu TypeORM e entrou PrismaORM
- Implementação de ZOD para validação dos dados inseridos
- Encriptação de dados com BCrypt
- Implementação de gerador automático de arquivos base
