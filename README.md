# Next.js Project with Docker and Prisma

Este é um projeto Next.js configurado para rodar em um ambiente Docker, utilizando Prisma como ORM. Este README fornece instruções detalhadas para instalar e executar o projeto.

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/)
- [Docker](https://www.docker.com/)
- [Prisma](https://www.prisma.io/)

---

## 📝 Pré-requisitos

Certifique-se de ter as ferramentas abaixo instaladas no seu sistema:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🚀 Configuração do Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/nicolasestanislau/e-paper.git
cd e-paper
```

### 2. Instale as Dependências

```bash
npm install --force
```

### 3. Configuração do Banco de Dados

1. Crie um arquivo .env na raiz do projeto com base no .env.example.
2. Configure a variável de ambiente DATABASE_URL com sua conexão ao banco de dados.

### 4. Configure o Prisma

```bash
npx prisma migrate dev
```

Isso aplicará as migrações no banco de dados e gerará os arquivos Prisma Client.

---

## 🐳 Executando com Docker

### 1. Build da Imagem Docker

```bash
docker-compose build
```

### 2. Subindo o Contêiner

```bash
docker-compose up
```

O servidor estará disponível em http://localhost:3000.

---

## 📊 Acessando o Prisma Studio

Com o contêiner rodando, execute o comando abaixo para abrir o Prisma Studio:

```bash
npx prisma studio
```

A interface estará disponível em http://localhost:5555 para visualizar e gerenciar os dados.

---

## 📂 Estrutura do Projeto

```bash
/prisma       - Schemas do Prisma
/src          - Código fonte da aplicação
Dockerfile    - Configuração do Docker
docker-compose.yml - Configuração do Docker Compose
```

---

## 🛠️ Comandos Úteis

- Instalar Dependências: npm install ou yarn install
- Rodar em Ambiente de Desenvolvimento: npm run dev ou yarn dev
- Gerar Cliente Prisma: npx prisma generate
- Prisma Studio: npx prisma studio

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
