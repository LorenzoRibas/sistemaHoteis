   
   function avaliar() {
        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        const inputHotelNome = document.getElementById('hotelName').value;
        const avaliacaoNum = parseFloat(document.getElementById('avaliacao').value);

        if (inputHotelNome === "" || isNaN(avaliacaoNum) || avaliacaoNum > 5 || avaliacaoNum < 0) {
            alert("Por favor, preencha todos os campos corretamente.");
        } else {
            const hotelEncontrado = savedHotels.find(hotel => hotel.nome.toLowerCase() === inputHotelNome.toLowerCase());

            if (hotelEncontrado) {
                if (!Array.isArray(hotelEncontrado.avaliacoes)) {
                    hotelEncontrado.avaliacoes = [];
                }
                hotelEncontrado.avaliacoes.push(avaliacaoNum); 
                const totalAvaliacoes = hotelEncontrado.avaliacoes.reduce((sum, val) => sum + val, 0);
                hotelEncontrado.mediaAvaliacao = (totalAvaliacoes / hotelEncontrado.avaliacoes.length).toFixed(2);
                localStorage.setItem('hotels', JSON.stringify(savedHotels));
                alert("Avaliação adicionada com sucesso!");
            } else {
                alert("Nenhum hotel encontrado.");
            }
        }
    }
