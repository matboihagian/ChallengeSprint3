const partidas = JSON.parse( localStorage.getItem("partidas"))  || []

partidas.forEach(partida => card(partida))

function card (partida){
    const cardpartida = `
    <div class="game-card">
    <h3>Jogo</h3>
    <p><strong>Adversário:</strong> ${partida.adversario}</p>
    <p><strong>Campeonato:</strong> ${partida.campeonato}</p>
    <p><strong>Data:</strong> ${partida.data}</p>
    <p><strong>Local:</strong> ${partida.local}</p>
    <button onClick="apagar('${partida.id}')" type="button"><a href=""> Remover </a></button>
</div>

    
    `
    const card = document.createElement("div")
    card.id = partida.id
    card.innerHTML = cardpartida
    document.querySelector("#listadepartidas").appendChild(card)
}


    