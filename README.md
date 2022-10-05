# DOCUMENTAÇÃO NECESSARIA

## Obrigatorio!
É necessario o programa NODEJS, responsavel pela criação da Fake API junto do JSON-server logo vá ao link a seguir `https://nodejs.org/`, baixe e instale no seu computador.

### Para instalar o JSON-server
Execute no terminal o comando `npm install -g json-server`

O json-server é a biblioteca pra simular um banco de dados com API RESTFUL.

### Para executar o projeto
No terminal, dentro da pasta da aplicação execute `npx json-server db.json --port 8000`

Com isso você terá acesso a uma API REST no endereço http://localhost:8000

Caso use uma porta diferente da 8000 acesse o arquivo `eventos.js` e altere o valor de `API_URL` pela porta que esteja usando.

Lembre-se de colocar esse valor entre aspas simples `('')`.

Pronto, agora basta abrir o arquivo `index.html` com seu navegador e pronto!
