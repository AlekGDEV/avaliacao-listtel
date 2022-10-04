const API_URL = "http://localhost:8000";
const collapseElementList = document.querySelectorAll('.collapse');
// Create, Read, Update e Delete abaixo, respectivamente.
// Delete por ser uma palavra reservada foi abreviado para del

//Função que cria um novo contato para a lista
function create(){
  event.preventDefault();

  let newcontact = {
    name: n.value,
    number: parseInt(number.value),
    address: address.value,
  };

  fetch(`${API_URL}/contacts/`, {
    method: 'POST',
    body: JSON.stringify(newcontact),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(() => read());

  form_add.reset();
}

//Função que chama as informações especificas do contato escolhido
function call(id) {
  fetch(`${API_URL}/contacts/${id}`)
    .then(response => response.json())
    .then((contact) => {
      tablecontact.innerHTML +=
        `
          <tr class="text-end">
            <td>
              <div class="dropdown">
                <button class="material-icons btn text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  menu
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                  <button class="dropdown-item text-warning font-monospace" onclick="buscar_peditar(${contact.id})" data-bs-toggle="modal" data-bs-target="#edit_modal">Editar</button>
                  </li>
                  <li><button class="dropdown-item text-danger font-monospace" onclick="del(${contact.id})">Excluir</button></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr rowspan="2">
            <td><img class="icon img-fluid rounded" src="./icon.png" alt=""></td>
          </tr>
          <tr>
            <td>${contact.name}</td>
          </tr>
          <tr>
            <td>${contact.number}</td>
          </tr>
          <tr>
            <td>${contact.address}</td>
          </tr>
          `
    })
}

// Função para atualizar e mostrar lista ao usuario
function read() {
  list.innerHTML = '';
  fetch(`${API_URL}/contacts`)
    .then((response) => response.json())
    .then((contacts) => {
      contacts.map((any_contact) => {
        list.innerHTML +=
          `
            <li class="d-flex me-2 ms-1">
              <input onclick="trash(this)" class="me-2" type="checkbox" data-check="action" value="${any_contact.id}">
              <button class="list-button btn btn-dark text-start w-100 mb-2" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onclick="call(${any_contact.id})">
                <i class="d-none">${any_contact.id}</i>
                <i class="d-none">${any_contact.number}</i>
                <i class="d-none">${any_contact.address}</i>
                <span class ="span-align1 material-icons">account_circle</span>
                <span class="span-align2">${any_contact.name}</span>
              </button>
            </li>
          `;
      });
    });
}

function buscar_peditar(id){
  fetch(`${API_URL}/contacts/${id}`)
      .then(response => response.json())
      .then(newcontact => {
          edit_id.value = newcontact.id;
          edit_n.value = newcontact.name;
          edit_number.value = newcontact.number;
          edit_address.value = newcontact.address;
      });
}

function update(){
  event.preventDefault();
  
  let newcontact = {    
    name: edit_n.value,
    number: parseInt(edit_number.value),
    address: edit_address.value,
  };

  fetch(`${API_URL}/contacts/${edit_id.value}`, {
      method:'PATCH',
      body: JSON.stringify(newcontact),
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(() => read())
      .then(() => call())
}

// Função para deletar o contato.
async function del(id){
  let response = confirm('Você tem certeza?');
  if(response !== true){
      return;
  }

  await fetch(`${API_URL}/contacts/${id}`,{
      method:'DELETE'
  });

  collapseElementList.forEach((collapse) =>{
    collapse.classList.remove("show");
  })
  read();
}

read();