const API_URL = "http://localhost:8000"

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


function call(id) {
  tablecontact.innerHTML = '';
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
                  <li><button class="dropdown-item text-warning font-monospace" onclick="edit()">Editar</button></li>
                  <li><button class="dropdown-item text-danger font-monospace" onclick="delete()">Excluir</a></li>
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

function read() {
  list.innerHTML = '';
  fetch(`${API_URL}/contacts`)
    .then((response) => response.json())
    .then((contacts) => {
      contacts.map((any_contact) => {
        list.innerHTML +=
          `
            <li class="d-grid me-2 ms-1">
              <button class="list-button btn btn-dark text-start mb-2" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onclick="call(${any_contact.id})">
                <i class="d-none">${any_contact.id}</i>
                <i class="d-none">${any_contact.number}</i>
                <i class="d-none">${any_contact.address}</i>
                <span class ="span-align1 material-icons">account_circle</span>
                <span class="span-align2">${any_contact.name}</span>
              </button>
            <li>
          `;
      })
    })
}
read();
