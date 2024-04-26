# mks teste

-> Considerações

Nao consegui finalizar o teste, pois tive pouco tempo para realizar o mesmo, ja que durante a semana trabalho e faco faculdade...

Parei na parte de fazer a Autenticação JWT
Fiz as migrations de User, porem ja e 11 horas e amanha trabalho cedo, vou parar por aqui, se puderem me dar mais tempo. de qualquer forma, obrigado!

---

# Como instalar

-> dependencias de dev.

Para instalar as dependencias de dev, npm install.

---

# Arquivo .env que usei local.

DB_HOST=localhost

DB_PORT=5432

DB_USER=postgres

DB_PASS=postgres

DB_NAME=api_rest_film

PORT=3000

---

# Gerar as migrations para o banco de dados

npm run migration:generate

# Importando as migrations para o banco.

npm run migration:run

---

# Iniciar API

npm run dev

---

# Endpoint da API

Lista de Filmes

GET localhost:3000/filmes

Adicionar Filme exemplo

Post localhost:3000/filmes

{
"nome": "Add your name in the body",
"sinopse": "Add your synopse"
}

Deletar Filme

Delete localhost:3000/filmes/ID exemplo

localhost:3000/filmes/1

Atualizar Filme

localhost:3000/filmes/ID exemplo

localhost:3000/filmes/1

{
"ID": "1",
"nome": "Add your name in the body",
"sinopse": "Add your synopse"
}
