// const save = document.getElementById('save');
// const clean = document.getElementById('clean');

// const dados = [
//     {
//         id: 1,
//         nome: 'Augusto',
//         idade: 24,
//         email: 'augusto@email.com',
//         endereco: 'Rua 26'
//     },
//     {
//         id: 2,
//         nome: 'Amanda',
//         idade: 21,
//         email: 'amanda@email.com',
//         endereco: 'Rua 32'
//     },
//     {
//         id: 3,
//         nome: 'Rafael',
//         idade: 64,
//         email: 'rafael@email.com',
//         endereco: 'Rua 14'
//     },
//     {
//         id: 4,
//         nome: 'José',
//         idade: 32,
//         email: 'jose@email.com',
//         endereco: 'Rua 6'
//     },
// ]

// window.onload = function () {
//     loadTable();
// }

// function loadTable () {
//     const itemLista = document.getElementById('tbody');
//     itemLista.innerHTML = ''

//     for(obj of dados) {
//         addPessoa(obj);
//     }
// }

// function addPessoa(usuario) {
//     const itemLista = document.getElementById('tbody');

//     const user = document.createElement('tr');

//     const userId = document.createElement('td');
//     userId.innerHTML = usuario.Id;

//     const userName = document.createElement('td');
//     userName.innerHTML = usuario.nome;

//     const userIdade = document.createElement('td');
//     userIdade.innerHTML = usuario.idade;

//     const userEmail = document.createElement('td');
//     userEmail.innerHTML = usuario.email;

//     const userEndereco = document.createElement('td');
//     userEndereco.innerHTML = usuario.endereco;

//     const action = document.createElement('td');
//     const btnDel = document.createElement('button');
//     btnDel.innerHTML = 'X';
//     action.appendChild(btnDel);

//     btnDel.onclick = function () {
//         const index = dados.indexOf(usuario);
//         dados.splice(index, 1);

//         itemLista.removeChild(user);
//     }

//     user.appendChild(userId);
//     user.appendChild(userName);
//     user.appendChild(userIdade);
//     user.appendChild(userEmail);
//     user.appendChild(userEndereco);
//     user.appendChild(action);

//     itemLista.appendChild(user);
// }

// function saveBtn () {
//     const nome = document.getElementById('nome').value;
//     const idade = document.getElementById('idade').value;
//     const email = document.getElementById('email').value;
//     const endereco = document.getElementById('endereco').value;
//     const ident = dados[dados.length - 1];

//     const novo = {
//         id: ident.id + 1,
//         nome: nome,
//         idade: idade,
//         email: email,
//         endereco: endereco
//     }

//     dados.push(novo);
//     addPessoa(novo);
// }

// function cleanBtn () {
//     document.getElementById('nome').value = '';
//     document.getElementById('idade').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('endereco').value = '';
// }

// save.addEventListener('click', saveBtn);
// clean.addEventListener('click', cleanBtn);












const dados = [
    {
        id: 1,
        nome: 'Gustavo',
        idade: 32,
        email: 'gustavo@gmail.com',
        endereco: 'Rua 43'
    },
    {
        id: 2,
        nome: 'José',
        idade: 43,
        email: 'jose@gmail.com',
        endereco: 'Rua 23'
    },
    {
        id: 3,
        nome: 'Mariana',
        idade: 21,
        email: 'mariana@gmail.com',
        endereco: 'Rua 76'
    },
]

const save = document.getElementById('save');
const clean = document.getElementById('clean');

window.onload = function () {
    loadTable();
}

function loadTable() {
    const itemTab = document.getElementById('tbody');
    itemTab.innerHTML = ''

    for(i of dados) {
        addUser(i);
    }
}

function addUser(pessoa) {
    const itemTab = document.getElementById('tbody');

    const item = document.createElement('tr')

    const userId = document.createElement('td');
    userId.innerHTML = pessoa.id;

    const userNome = document.createElement('td');
    userNome.innerHTML = pessoa.nome;

    const userIdade = document.createElement('td');
    userIdade.innerHTML = pessoa.idade;

    const userEmail = document.createElement('td');
    userEmail.innerHTML = pessoa.email;

    const userEndereco = document.createElement('td');
    userEndereco.innerHTML = pessoa.endereco;

    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = 'X'
    const action = document.createElement('td');
    action.appendChild(btnExcluir);

    btnExcluir.onclick = function () {
        const position = dados.indexOf(pessoa);
        dados.splice(position, 1);

        itemTab.removeChild(item);
    }

    item.appendChild(userId);
    item.appendChild(userNome);
    item.appendChild(userIdade);
    item.appendChild(userEmail);
    item.appendChild(userEndereco);
    item.appendChild(action);

    itemTab.appendChild(item);
}

function saveUser () {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const ident = dados[dados.length - 1];

    const newPerson = {
        id: ident.id + 1,
        nome: nome,
        idade: idade,
        email: email,
        endereco: endereco
    }

    dados.push(newPerson);
    addUser(newPerson);
}

function cleanUser() {
    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('email').value = ''
    document.getElementById('endereco').value = ''
}

save.addEventListener('click', saveUser);
clean.addEventListener('click', cleanUser);