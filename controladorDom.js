


//rutina para detectar el clic sobre un boton

let botonCambio=document.getElementById('boton')
botonCambio.addEventListener('click',cambiarArtista)

function cambiarArtista(){
    let etiquetaImagen=document.getElementById('imagen1')
console.log(etiquetaImagen.src)
etiquetaImagen.src= "imagenes/eres elmas bonito.jpg"

let etiquetaVideo=document.getElementById('video1')
etiquetaVideo.src='video/el amor mas bonito.mp4 '

let etiquetaConcierto=document.getElementById('fechaConcierto')
etiquetaConcierto.textContent='se prsenta en semana santa '
}

