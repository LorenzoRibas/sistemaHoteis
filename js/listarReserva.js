function listarReserva() {
    const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const savedReservas = JSON.parse(localStorage.getItem('reservas')) || [];
    const hotelName = document.getElementById('searchHotel').value.toLowerCase();

    const listaReservas = document.getElementById('listaReservas');
    listaReservas.innerHTML = '';

    if (savedReservas.length === 0) {
        listaReservas.innerHTML = '<li>Nenhuma reserva encontrada.</li>';
        return;
    }

    const reservasFiltradas = savedReservas.filter(reserva => {
        const hotel = savedHotels.find(h => h.id === reserva.idHotel);
        return hotel && hotel.nome.toLowerCase().includes(hotelName);
    });

    if (reservasFiltradas.length === 0) {
        listaReservas.innerHTML = '<li>Nenhuma reserva encontrada para este hotel.</li>';
        return;
    }

    reservasFiltradas.forEach(reserva => {
        const hotel = savedHotels.find(h => h.id === reserva.idHotel);

        if (hotel) {
            document.getElementById('listaReservas').style.display = 'block';
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                Hotel: ${hotel.nome} <br>
                Cidade: ${hotel.cidade} <br>
                Cliente: ${reserva.nomeCliente}
            `;
            listaReservas.appendChild(listItem);

        }
    });
}
