let savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];

function validarForm() {
    const hotelName = document.getElementById('hotelName').value;
    const cidadeHotel = document.getElementById('cidadeHotel').value;
    const quartosHotel = document.getElementById('quartosHotel').value;
    const quartosDisp = document.getElementById('quartosDisp').value;

    if (hotelName === "" || cidadeHotel === "" || quartosHotel === "" || quartosDisp === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        adicionarHotel();
    }
}

function getHotelId() {
    if (savedHotels.length === 0) {
        return 1;
    } else {
        return savedHotels.length + 1;
    }
}

function adicionarHotel() {
    const hotelId = getHotelId();
    const form = document.getElementById('hotelForm');
    const hotelName = document.getElementById('hotelName').value;
    const cidadeHotel = document.getElementById('cidadeHotel').value;
    const quartosHotel = parseInt(document.getElementById('quartosHotel').value);
    const quartosDisp = parseInt(document.getElementById('quartosDisp').value);

    const novoHotel = {
        id: hotelId,
        nome: hotelName,
        cidade: cidadeHotel,
        avaliacoes: [],
        mediaAvaliacao: 0,
        quartosTotais: quartosHotel,
        quartosDisponiveis: quartosDisp
    };

    savedHotels.push(novoHotel);

    localStorage.setItem('hotels', JSON.stringify(savedHotels));

    form.reset();
}
