const form = document.getElementById('form');
form.addEventListener('submit',(e)=> {


    e.preventDefault();
    let mensaje = ``
    const madreNombre = document.getElementById('name-madre').value
    const padreNombre = document.getElementById('name-padre').value
    let dedicatoria = document.getElementById('dedicatoria')
    if (madreNombre !== ""){
        mensaje += `*Madre:* ${madreNombre}.\n`
    }
    if (padreNombre !== ""){
        mensaje += `*Padre:* ${padreNombre}.\n`
    }
    if (dedicatoria.value !== ""){
        mensaje += `*Dedicatoria:* ${dedicatoria.value}.`
    } else {
        mensaje += `*Dedicatoria:* ${dedicatoria.innerText}.`
    }


    let mensajeCodificado = encodeURIComponent(mensaje);

    let url = `https://wa.me/15064066647?text=${mensajeCodificado}`;
    window.open(url)

})