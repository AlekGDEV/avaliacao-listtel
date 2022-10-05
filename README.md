# DOCUMENTAÇÃO NECESSARIA

## Obrigatorio!
É necessario o programa NODEJS, responsavel pela criação da Fake API junto do JSON-server logo vá ao link a seguir `https://nodejs.org/`, baixe e instale no seu computador.

### Para instalar o JSON-server
Execute no terminal o comando `npm install -g json-server`

O json-server é a biblioteca pra simular um banco de dados com API RESTFUL.

### Para executar o projeto
No terminal, dentro da pasta da aplicação execute `npx json-server db.json --port 8000`, com isso você terá acesso a uma API REST no endereço http://localhost:8000.

Caso use uma porta diferente da 8000 acesse o arquivo `index.js` e altere o valor da constante `API_URL` pela porta que esteja usando, colocando o valor entre as aspas.

Pronto, agora basta abrir o arquivo `index.html` com seu navegador e pronto!

## Conteúdo
O conteúdo da aplicação foi baseada principalmente no framework bootstrap e utilizando de bibliotecas gráficas como o Material-Icons do Google, porém a avaliação é composta de, respectivamente:

Pasta javascript:
    - index.js(Local onde estão presentes as funções principais do CRUD, ou seja Create, Read, Update e Delete, com mais 2 que complementam a Read e Update, as quais são profile e get_toupdate)
    - search.js(Local onde está presente a função de pesquisa da lista por caracteres inseridos pelo usuario) 
    - trash.js(Local onde estão presentes as funções para excluir objetos pela lista de maneira geral e animações conforme o solicitado ;) )

Arquivo db.json:
    - Conteúdo dos dados que serão necessarios pela API do JSON-server.

Imagem icon.png:
    - Imagem aleatoria para a chamada individual.

Arquivo CSS index.css:
    - CSS nativo, feito por mim para estilizar o código e executar a animação.

Arquivo HTML index.html:
    - HTML nativo, para a construção dos elementos web no browser.

Arquivo MD README.md:
    - MARKDOWN para documentar e explicar a execução e uso da aplicação.

