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
    - `index.js`(Local onde estão presentes as funções principais do CRUD, ou seja Create, Read, Update e Delete, com mais 2 que complementam a Read e Update, as quais são profile e get_toupdate)
    - `search.js`(Local onde está presente a função de pesquisa da lista por caracteres inseridos pelo usuario) 
    - `trash.js`(Local onde estão presentes as funções para excluir objetos pela lista de maneira geral e animações conforme o solicitado ;) )

Arquivo `db.json`:
    - Conteúdo dos dados que serão necessarios pela API do JSON-server.

Imagem `icon.png`:
    - Imagem aleatoria para a chamada individual.

Arquivo CSS `index.css`:
    - CSS nativo, feito por mim para estilizar o código e executar a animação.

Arquivo HTML `index.html`:
    - HTML nativo, para a construção dos elementos web no browser.

Arquivo MD `README.md`:
    - MARKDOWN para documentar e explicar a execução e uso da aplicação.

## Como usar:

A aplicação é bem simples, para adicionar um contato, apenas clicar no simbolo de "+" localizado no menu lateral azul no canto superior esquerdo em baixo da barra de pesquisa e ao lado de uma checkbox, logo apareça um campo para preenchimento das informações e automaticamente será listado logo abaixo.

Para visualização de um contato especifico, apenas clique o desejado e irá abrir as informações pessoais daquele individuo.

Para pesquisa de um e/ou mais contatos da lista, basta utilizar a barra de pesquisa que contém a palavra "Username", citando caracteres desejados que o contato tenha, assim listando de maneira especifica.

Para alteração ou exclusão dos dados do individuo, clique no simbolo de menu localizado no canto superior direito do quadrado azul que contém as informações, onde será mostrado as duas opções. Caso escolha a opção "Editar" um novo campo de preenchimento apareça requerendo os dados novos assim atualizando ou caso escolha a opção "Excluir" irá aparecer um alerta de confirmação e se confirmado irá excluir o contato da lista.

Para exclusão de multiplos campos, basta clicar na checkbox(caixinha) ao lado do simbolo "+", ou escolhendo pelas checkboxes ao lado de cada nome listado e clicando no icone de lixeira que irá aparecer no local do simbolo de adicionar.

## Versão:
v0.1 - Beta, alguns elementos podem estar instaveis peço a compreensão, correções de bugs e melhorias ainda serão feitas.

## Alexandre Garcia Fernandes Filho/Autor