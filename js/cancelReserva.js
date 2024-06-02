
function cancelarReserva() {
    const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const savedReservas = JSON.parse(localStorage.getItem('reservas')) || [];

    const hotelInput = document.getElementById('hotelName').value.toLowerCase();
    const nomeInput = document.getElementById('clienteNome').value.toLowerCase();

    if (hotelInput === "" || nomeInput === ""){
        alert("Por favor, preencha todos os campos.");
    } else {

    const hotelReserva = savedHotels.find(hotel => hotel.nome.toLowerCase() === hotelInput);
    const atualReserva = savedReservas.find(reserva => reserva.nomeCliente.toLowerCase() === nomeInput);

        if (!hotelReserva.id || !atualReserva){
            alert("Nenhuma reserva foi encontrada.");
        } else {
            let cancelVar = confirm("Reserva encontrada, tem certeza que deseja cancelar?");
                if (!cancelVar){
                    alert("A reserva não foi cancelada.");
                } else {

                    const novasReservas = savedReservas.filter(reserva => reserva.idReserva !== atualReserva.idReserva);
                    
                    hotelReserva.quartosDisponiveis++;

                    localStorage.setItem('reservas', JSON.stringify(novasReservas));
                    localStorage.setItem('hotels', JSON.stringify(savedHotels));

                    alert("Reserva cancelada com sucesso.");
                }
        }
    document.getElementById('hotelForm').reset();
}}