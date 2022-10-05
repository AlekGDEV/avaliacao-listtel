// Alexandre Garcia Fernandes Filho

//Função que realiza a pesquisa de acordo com caracteres presentes nos nomes listados.
function search(){
    let typing = search_input.value.toLowerCase();
    let rows = list.getElementsByTagName('li');
    
    for(let position in rows){
        if(isNaN(position)){
            continue;
        }

        let row = rows[position].children[1].children[4].innerText.toLowerCase();
        if(row.includes(typing)){
            rows[position].classList.remove('d-none');
        }else{
            rows[position].classList.add('d-none');
        }
    }
}