// Alexandre Garcia Fernandes Filho

//Função que faz a checagem da marcação das checkboxes e a animação.
function checkall(){
    let all_checks = document.querySelectorAll('[data-check="action"]');
    all_checks.forEach((check) => {
        check.checked = main_check.checked
    });

    if(main_check.checked){
        btn_trash.style.display='block'
        btn_add.classList.add('active')
    }else{
        btn_trash.style.display='none'
        btn_add.classList.remove('active')
    }
}

//Função que faz a checagem individual da marcação das checkboxes e a animação.
function trash(element){
    console.log(element.checked);
    if(element.checked){
        btn_trash.style.display='block'
        btn_add.classList.add('active')
    }else{
        btn_trash.style.display='none'
        btn_add.classList.remove('active')
    }
}

//Função que remove os elementos listados de acordo com a marcação, ou seja, os selecionados.
function remove_selectedtrash(){
    if(false === confirm('Tem certeza')){
        return;
    }

    let all_selected = document.querySelectorAll('[data-check="action"]')

    all_selected.forEach((any_check) => {
        if(any_check.checked === true){
            fetch(`${API_URL}/contacts/${any_check.value}`,{
                method:'DELETE'
            })
            .then(() => read());
        }
    read();
    });
}
