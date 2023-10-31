function fazDelete(url) {
    return fetch(url, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.status === 204) {
            console.log("Sucesso na deleção!");
        } else {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
    })
    .catch(error => console.error('Erro:', error));
}

function excluiCliente() {
    event.preventDefault();

    let idCli = document.getElementById("idCli").value;
    let url = `http://localhost:3000/clientes/${idCli}`;

    fazDelete(url)
        .then(() => {
            // Adicione lógica adicional, se necessário
            console.log("Cliente excluído com sucesso!");
            window.location.href = "index.html";
        });
}