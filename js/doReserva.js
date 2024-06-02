
    function reservaFunc() {
        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        const savedReservas = JSON.parse(localStorage.getItem('reservas')) || [];
    
        const hotelInput = document.getElementById('hotelName').value.toLowerCase();
        const nomeInput = document.getElementById('clienteNome').value.toLowerCase();

        if (hotelInput === "" || nomeInput === ""){
            alert("Por favor, preencha todos os campos.");
        } else {

        const hotelReserva = savedHotels.find(hotel => hotel.nome.toLowerCase() === hotelInput);

        if (!hotelReserva){
            alert("Nenhum hotel foi encontrado com esse nome.")
        } else {
            if (hotelReserva.quartosDisponiveis > 0) {
                const novaReserva = {
                    idReserva: savedReservas.length + 1,
                    idHotel: hotelReserva.id,
                    nomeCliente: nomeInput
                };
                
                    savedReservas.push(novaReserva);
                    hotelReserva.quartosDisponiveis--;
    
                    localStorage.setItem('reservas', JSON.stringify(savedReservas));
                    localStorage.setItem('hotels', JSON.stringify(savedHotels));
    
                    alert("Reserva feita com sucesso!");
            } else {
                alert("Não há quartos disponíveis nesse hotel.");
            }
        }
        document.getElementById('hotelForm').reset();
    }}