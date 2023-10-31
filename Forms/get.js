function fazGetId(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => console.error('Erro:', error));
}

function atualizaPagina(cliente) {
    let txtId = document.getElementById("idCli");
    let txtNome = document.getElementById("nome");
    let txtIdade = document.getElementById("idade");
    let txtUf = document.getElementById("uf");

    txtId.value = cliente.id;
    txtNome.value = cliente.nome;
    txtIdade.value = cliente.idade;
    txtUf.value = cliente.uf;
}

function get() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCliente = urlParams.get("id");

    fazGetId(`http://localhost:3000/clientes/${idCliente}`)
        .then(cliente => {
            atualizaPagina(cliente);
        });
}