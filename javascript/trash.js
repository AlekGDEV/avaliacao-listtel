function checkall(){
    let all_checks = document.querySelectorAll('[data-check="action"]');
    all_checks.forEach((check) => {
        check.checked = main_check.checked
    });

    if(main_check.checked){
        btn_trash.style.display='block'
        if(btn_trash.style.display='block'){
            btn_add.style.paddingLeft='12.4vw'
            btn_add.classList.add('animate__animated')
            btn_add.classList.add('animate__slideInLeft')
        }
    }else{
        btn_trash.style.display='none'
        if(btn_trash.style.display='none'){
            btn_add.style.paddingLeft=''
            btn_add.classList.remove('animate__animated')
            btn_add.classList.remove('animate__slideInLeft')
        }
    }
}

function trash(element){
    console.log(element.checked);
    if(element.checked){
        btn_trash.style.display='block'
        if(btn_trash.style.display='block'){
            btn_add.style.paddingLeft='12.4vw'
            btn_add.classList.add('animate__animated')
            btn_add.classList.add('animate__slideInLeft')
        }
    }else{
        btn_trash.style.display='none'
        if(btn_trash.style.display='none'){
            btn_add.style.paddingLeft=''
            btn_add.classList.remove('animate__animated')
            btn_add.classList.remove('animate__slideInLeft')
        }
    }
}

function remove_selectedtrash(){
    if(false === confirm('Tem certeza')){
        return;
    }

    let all_selected = document.querySelectorAll('[data-check="action"]')

    all_selected.forEach((any_check) => {
        if(any_check.checked === true){
            fetch(`${API_URL}/contacts/${any_check.value}`,{
                method:'DELETE'
            });
        }
    });

    read();
}