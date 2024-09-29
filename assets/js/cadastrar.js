document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    const form = document.querySelector("form")
    const local = document.querySelector('input[name="local"]:checked').value;

    const partida = {
        id: "id_" + new Date().getTime(),
        adversario: form.adversario.value,
        campeonato: form.campeonato.value,
        local: form.local.value,
        data: form.data.value
        
    }

    salvar(partida)

})

function salvar(partida) {
    const partidas = JSON.parse(localStorage.getItem("partidas")) || []; 
    partidas.push(partida); 
    localStorage.setItem("partidas", JSON.stringify(partidas)); 
    window.location.href = "index.html";
}


