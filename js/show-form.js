const buttons = document.querySelectorAll('.card-btn');


buttons.forEach(button => {
    let id = button.id;
    button.addEventListener('click', ()=>{
    const legend = document.getElementById('legend')
    const formulario = document.getElementById("form");
    const contenedor = document.getElementById('contenedor')
    contenedor.style.display = 'none';
    formulario.style.display = 'flex';
    legend.innerText = `${id}`
    })
})