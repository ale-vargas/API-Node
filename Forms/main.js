function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(cliente) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdIdade = document.createElement("td");
    tdUf = document.createElement("td");

    tdUpdate = document.createElement("td");
    tdDelete = document.createElement("td");
    
    tdId.innerHTML = cliente.id;
    tdNome.innerHTML = cliente.nome;
    tdIdade.innerHTML = cliente.idade;
    tdUf.innerHTML = cliente.uf;
    tdUpdate.innerHTML = "<a href=\"form_update.html?id=" + cliente.id + "\">ATUALIZAR</a>";
    tdDelete.innerHTML = "<a href=\"form_delete.html?id=" + cliente.id + "\">EXCLUIR</a>";

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdIdade);
    linha.appendChild(tdUf);

    linha.appendChild(tdUpdate);
    linha.appendChild(tdDelete);

    return linha;
}

function main() {
    // 1 - Testa se acessa o endpoint
    // console.log(fazGet("http://localhost:3000/clientes"));

    // 2 - Obtém os dados e transforma em JSON
    let data = fazGet("http://localhost:3000/clientes");
    let clientes = JSON.parse(data);
    //console.log(clientes);

    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
    let tabela = document.getElementById("tabela");
    clientes.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    
}

main()