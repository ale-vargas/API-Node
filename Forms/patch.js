function fazPatch(url, body) {
    return fetch(url, {
        method: 'PATCH',
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

function atualizaCliente() {
    event.preventDefault();

    let idCli = document.getElementById("idCli").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let uf = document.getElementById("uf").value;

    let url = `http://localhost:3000/clientes/${idCli}`;

    let body = {
        "id": idCli,
        "nome": nome,
        "idade": idade,
        "uf": uf
    };

    fazPatch(url, body)
        .then(response => {
            console.log(response);
            // Adicione lógica adicional, se necessário
            window.location.href = "index.html";
        });
}