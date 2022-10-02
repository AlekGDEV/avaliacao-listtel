const API_URL = "http://localhost:8000"

function add() {
  event.preventDefault();

  let newcontact = {
    name: name.value,
    number: parseInt(number.value),
    address: 
  };

  fetch(`${API_URL}/contacts/`, {
    method: 'POST',
    body: JSON.stringify(newcontact),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => atualizar_lista());

  form_add.reset();
}


function call(id) {
  tablecontact.innerHTML = '';
  fetch(`${API_URL}/contacts/${id}`)
    .then(response => response.json())
    .then((contact) => {
      tablecontact.innerHTML +=
        `
          <tr>
            <td class="material-icons">account_circle</td>
          </tr>
          <tr>
            <td>${contact.nome}</td>
          </tr>
         `
    })
}

function update() {
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
                <span class ="span-align1 material-icons">account_circle</span>
                <span class="span-align2">${any_contact.nome}</span>
              </button>
            <li>
          `;
      })
    })
}
update();
