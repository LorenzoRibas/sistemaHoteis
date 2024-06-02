function procurarHotel() {
    const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const inputHotelNome = document.getElementById('searchHotel').value;
    if (inputHotelNome === ""){
        alert("Por favor, preencha todos os campos.");
    } else {
    const hotelEncontrado = savedHotels.find(hotel => hotel.nome.toLowerCase() === inputHotelNome.toLowerCase());

    const listaRelatorio = document.getElementById('listaRelatorio');
    const relatoryDiv = document.getElementById('relatoryDiv');
    listaRelatorio.innerHTML = '';

    if (hotelEncontrado) {
        const taxaOcupacao = ((hotelEncontrado.quartosTotais - hotelEncontrado.quartosDisponiveis) / hotelEncontrado.quartosTotais) * 100;
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Nome:</strong> ${hotelEncontrado.nome} <br>
            <strong>Cidade:</strong> ${hotelEncontrado.cidade} <br>
            <strong>Quartos Totais:</strong> ${hotelEncontrado.quartosTotais} <br>
            <strong>Quartos Disponíveis:</strong> ${hotelEncontrado.quartosDisponiveis} <br>
            <strong>Taxa de Ocupação:</strong> ${taxaOcupacao.toFixed(0)}%
        `;
        listaRelatorio.appendChild(li);
        listaRelatorio.style.display = 'block';
        relatoryDiv.style.display = 'block';
    } else {
        listaRelatorio.innerHTML = '<li>Nenhum hotel encontrado.</li>';
        listaRelatorio.style.display = 'block';
        relatoryDiv.style.display = 'block';
    }
}}
