const clientes = [
    {
        id: 1,
        nome: "Alexandre",
        idade: 30,
        uf: "RS",
    }, 

    {
        id: 2,
        nome: "Cinthia",
        idade: 29,
        uf: "RS",
    }
]

function selectClientes() {
    return  clientes
}

function selectCliente(id) {
    return clientes.find(c => c.id == id)
}

// insert 
function insertCliente(cliente) {
    clientes.push(cliente)
}

// update
function updateCliente(id, novoCliente) {
    const cliente = clientes.find(c => c.id == id)
    if (!cliente) {
        return
    }
    cliente.nome = novoCliente.nome
    cliente.idade = novoCliente.idade
    cliente.uf = novoCliente.uf
}

// delete 
function deleteCliente(id) {
    const idx = clientes.findIndex(c => c.id == id)
    clientes.slice(idx,1)
}


module.exports = {
    selectClientes,
    selectCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
}