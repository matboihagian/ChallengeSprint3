function apagar (id){
    const partidas = JSON.parse(localStorage.getItem("partidas")) || []
    const partidasatualizadas = partidas.filter( partidas => partidas.id != id )
    localStorage.setItem("partidas", JSON.stringify(partidasatualizadas))

    document.querySelector("#"+ id).remove()
}
