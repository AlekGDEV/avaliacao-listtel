const API_URL = "http://localhost:8000"

function update(){
    list.innerHTML = '';
    fetch(`${API_URL}/contacts`)
        .then((resposta) => resposta.json())
        .then((contacts) => {
            contacts.map(function(any_contact){
                list.innerHTML += 
                `
                <li>
                    <button class="btn btn-light w-100" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onclick="call()">
                        <i class="d-none">${any_contact.id}</i>
                        <span class="material-icons">account_circle</span>
                        <span>${any_contact.nome}</span>
                    </button>
                <li>
                `
            })
        })

}
update();

// <td>
//     <button class="btn btn-warning btn-control btn-sm" onclick="buscar_peditar(${cada_contato.id})">Editar</button>
 //     <button class="btn btn-danger btn-control btn-sm" onclick="excluir(${cada_contato.id})">Excluir</button>
 // </td>