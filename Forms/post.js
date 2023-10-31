function fazPost(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => console.error('Erro:', error));
}

function cadastraCliente() {
    event.preventDefault();

    let url = "http://localhost:3000/clientes";

    let idCli = document.getElementById("idCli").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let uf = document.getElementById("uf").value;

    console.log(idCli, nome, idade, uf);

    let body = {
        "id": idCli,
        "nome": nome,
        "idade": idade,
        "uf": uf
    };

    fazPost(url, body)
        .then(response => {
            console.log(response);
            // Adicione lógica adicional, se necessário
            window.location.href = "index.html";
        });
}