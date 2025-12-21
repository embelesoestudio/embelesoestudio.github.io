const botones = document.querySelectorAll('.card-btn');
const mostrarPrecio = document.getElementById('precio-final')

function getPrice(id) {
    let precioInicial = 0
    if (id === "Paquete De 150 USD"){
    precioInicial += 150
} else if (id === "Paquete De 200 USD"){
    precioInicial += 200
} else if (id === "Paquete De 250 USD"){
    precioInicial += 250
} else if (id === "Paquete De 300 USD"){
    precioInicial += 300
} else if (id === "Paquete De 350 USD"){
    precioInicial += 350
} else if (id === "Paquete De 400 USD"){
    precioInicial += 400
} else if (id === "Paquete De 500 USD"){
    precioInicial += 500
} else if (id === "Paquete De 600 USD"){
    precioInicial += 600
} else if (id === "Paquete Especial VIP"){
    precioInicial += 800
} else {
    precioInicial += 1000
} 
    return precioInicial
}

let precioInicial;
let id;
let precioAlterado;

const botonPrecio = document.getElementById('show-price')

botones.forEach(boton => boton.addEventListener('click',()=>{
    id = boton.id
    precioInicial = getPrice(id)
}))

botonPrecio.addEventListener('click', () => {
    precioAlterado = precioInicial
    const primerAgrego = document.getElementById('revistas-1')
    if (primerAgrego.value != ""){
        precioAlterado += parseInt(primerAgrego.value)
    }

    const segundoAgrego = document.getElementById('revistas-20-fotos')
    if(segundoAgrego.value != ""){
        precioAlterado+= parseInt(segundoAgrego.value)
    }

    const tercerAgrego = document.getElementById('fotolibro-vertical-horizontal')
    if(tercerAgrego.value != ""){
        precioAlterado+= parseInt(tercerAgrego.value)
    }

    const cuartoAgrego = document.getElementById('cajas-libros')
    if(cuartoAgrego.value != ""){
        precioAlterado+= parseInt(cuartoAgrego.value)
    }

    const quintoAgrego = document.getElementById('bolsas-personalizadas')
    if(quintoAgrego.value != ""){
        precioAlterado+= parseInt(quintoAgrego.value)
    }

    const sextoAgrego = document.getElementById('estuche-fotolibro')
    if(sextoAgrego.value != ""){
        precioAlterado+= parseInt(sextoAgrego.value)
    }

    const septimoAgrego = document.getElementById('ampliaciones-en-lona')
    if(septimoAgrego.value != ""){
        precioAlterado+= parseInt(septimoAgrego.value)
    }

    const octavoAgrego = document.getElementById('gigantografia-lona')
    if(octavoAgrego.value != ""){
        precioAlterado+= parseInt(octavoAgrego.value)
    }

    const novenoAgrego = document.getElementById('ampliacion-lienzo')
    if(novenoAgrego.value != ""){
        precioAlterado+= parseInt(novenoAgrego.value)
    }

    const decimoAgrego = document.getElementById('trajes')
    if(decimoAgrego.value != ""){
        precioAlterado+= parseInt(decimoAgrego.value)
    }

    const oncenoAgrego = document.getElementById('otros-agregos')
    if(oncenoAgrego.value != ""){
        precioAlterado+= parseInt(oncenoAgrego.value)
    }

    const duodecimoAgrego = document.getElementById('fotos-locaciones-especiales')
    if(duodecimoAgrego.value != ""){
        precioAlterado+= parseInt(duodecimoAgrego.value)
    }

    const tredecimoAgrego = document.getElementById('lienzo-oleo')
    if(tredecimoAgrego.value != ""){
        precioAlterado+= parseInt(tredecimoAgrego.value)
    }
    
    mostrarPrecio.innerText = `${precioAlterado} USD`
})



