function procurarCidade() {
    const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const cidadeInput = document.getElementById('searchCity').value.toLowerCase();

    if (cidadeInput === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        const hoteisEncontrados = savedHotels.filter(hotel => hotel.cidade.toLowerCase() === cidadeInput);

        if (hoteisEncontrados.length > 0) {
            exibirHoteisEncontrados(hoteisEncontrados);
        } else {
            alert("Nenhum hotel encontrado nessa cidade.");
        }
    }
}

function exibirHoteisEncontrados(hoteisEncontrados) {
    const listaHoteis = document.getElementById('listaHoteis');
    listaHoteis.innerHTML = '';

    hoteisEncontrados.forEach(hotel => {
        if (!hotel.avaliacoes || hotel.avaliacoes.length === 0) {
            hotel.mediaAvaliacao = 'N/A';
        } else {
            const totalAvaliacoes = hotel.avaliacoes.reduce((sum, val) => sum + val, 0);
            hotel.mediaAvaliacao = (totalAvaliacoes / hotel.avaliacoes.length).toFixed(1);
        }

        const itemLista = document.createElement('li');

        itemLista.innerHTML = `
            Nome: ${hotel.nome}<br>
            Cidade: ${hotel.cidade}<br>
            Avaliação: ${hotel.mediaAvaliacao}<br>
            Quartos Totais: ${hotel.quartosTotais}<br>
            Quartos Disponíveis: ${hotel.quartosDisponiveis}
        `;

        listaHoteis.appendChild(itemLista);
    });

    listaHoteis.style.display = 'block';
    document.getElementById('findHoteisDiv').style.display = 'flex';
}