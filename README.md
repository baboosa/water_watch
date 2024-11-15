# Water watch

Este projeto é uma API desenvolvida com **NestJS** para monitorar o consumo de água em uma comunidade, promovendo a conscientização e eficiência no uso dos recursos hídricos. Alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) 6, busca-se garantir o uso sustentável da água e saneamento para todos.

## Funcionalidades

1. **Registro de Consumo de Água**  
   Permite que os usuários registrem seu consumo mensal de água, incluindo:
   - Identificador do usuário
   - Quantidade de água consumida (em metros cúbicos)
   - Data da leitura

2. **Consulta de Histórico de Consumo**  
   Permite que os usuários visualizem seu histórico de consumo em um período especificado, incluindo todos os registros entre as datas inicial e final fornecidas.

3. **Alertas de Consumo Elevado**  
   Gera alertas para os usuários que ultrapassarem o consumo do mês atual em relação ao mês anterior (exige ao menos dois meses de dados para comparação).

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework para construção de APIs Node.js.
- [TypeORM](https://typeorm.io/) - ORM para manipulação de dados com PostgreSQL.
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional.

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (ou outro banco de dados compatível)
- Gerenciador de pacotes (npm ou yarn)

### Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/baboosa/water_watch
   cd water_watch
   ```

2. Instale as dependências:
  ```bash
  npm install
  ```

3. Configure o banco de dados no arquivo src/app.module.ts

4. Rode as migrações do TypeORM (se configurado) ou permita a criação automática de tabelas com synchronize: true no TypeORM (para desenvolvimento).

5. Inicie o servidor:
  ```
  npm run start
  ```

6. A API estará disponível em http://localhost:3000.

⚠️ **Este é um projeto escolar, mas melhorias e sugestões são sempre bem-vindas!** ⚠️

