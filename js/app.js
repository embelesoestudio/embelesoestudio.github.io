const formulario = document.getElementById('form') 


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let contador = 0
    const paqueteSeleccionado = document.getElementById('legend').innerText
    //precioInicial
    let precioTotal = 0;
    if (paqueteSeleccionado === "Paquete De 150 USD"){
    precioTotal += 150
    } else if (paqueteSeleccionado === "Paquete De 200 USD"){
        precioTotal += 200
    } else if (paqueteSeleccionado === "Paquete De 250 USD"){
        precioTotal += 250
    } else if (paqueteSeleccionado === "Paquete De 300 USD"){
        precioTotal += 300
    } else if (paqueteSeleccionado === "Paquete De 350 USD"){
        precioTotal += 350
    } else if (paqueteSeleccionado === "Paquete De 400 USD"){
        precioTotal += 400
    } else if (paqueteSeleccionado === "Paquete De 500 USD"){
        precioTotal += 500
    } else if (paqueteSeleccionado === "Paquete De 600 USD"){
        precioTotal += 600
    } else if (paqueteSeleccionado === "Paquete Especial VIP"){
        precioTotal += 800
    } else {
        precioTotal += 1000
    } 
        

    //numero de telefono
    const numero = 15064066647;

    //nombre de la quinceañera
    const name = document.getElementById('name').value;

    //mensaje
    let mensaje = `Hola, el nombre de la quinceañera es *${name}*.\nHe seleccionado el *${id}*.\n*Agregos:*\n`

    //agregos
    const primerAgrego = document.getElementById('revistas-1')
    if(primerAgrego.value !== ""){
        mensaje += `* ${primerAgrego.dataset.text}: ${primerAgrego.options[primerAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(primerAgrego.value)
        contador+=1
    }

    const segundoAgrego = document.getElementById('revistas-20-fotos')
    if(segundoAgrego.value !== ""){
        mensaje += `* ${segundoAgrego.dataset.text}: ${segundoAgrego.options[segundoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(segundoAgrego.value)
        contador+=1
    }

    const tercerAgrego = document.getElementById('fotolibro-vertical-horizontal')
    if(tercerAgrego.value !== ""){
        mensaje += `* ${tercerAgrego.dataset.text}: ${tercerAgrego.options[tercerAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(tercerAgrego.value)
        contador+=1
    }

    const cuartoAgrego = document.getElementById('cajas-libros')
    if(cuartoAgrego.value !== ""){
        mensaje += `* ${cuartoAgrego.dataset.text}: ${cuartoAgrego.options[cuartoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(cuartoAgrego.value)
        contador+=1
    }

    const quintoAgrego = document.getElementById('bolsas-personalizadas')
    if(quintoAgrego.value !== ""){
        mensaje += `* ${quintoAgrego.dataset.text}: ${quintoAgrego.options[quintoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(quintoAgrego.value)
        contador+=1
    }

    const sextoAgrego = document.getElementById('estuche-fotolibro')
    if(sextoAgrego.value !== ""){
        mensaje += `* ${sextoAgrego.dataset.text}: ${sextoAgrego.options[sextoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(sextoAgrego.value)
        contador+=1
    }

    const septimoAgrego = document.getElementById('ampliaciones-en-lona')
    if(septimoAgrego.value !== ""){
        mensaje += `* ${septimoAgrego.dataset.text}: ${septimoAgrego.options[septimoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(septimoAgrego.value)
        contador+=1
    }

    const octavoAgrego = document.getElementById('gigantografia-lona')
    if(octavoAgrego.value !== ""){
        mensaje += `* ${octavoAgrego.dataset.text}: ${octavoAgrego.options[octavoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(octavoAgrego.value)
        contador+=1
    }

    const novenoAgrego = document.getElementById('ampliacion-lienzo')
    if(novenoAgrego.value !== ""){
        mensaje += `* ${novenoAgrego.dataset.text}: ${novenoAgrego.options[novenoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(novenoAgrego.value)
        contador+=1
    }

    const decimoAgrego = document.getElementById('trajes')
    if(decimoAgrego.value !== ""){
        mensaje += `* ${decimoAgrego.dataset.text}: ${decimoAgrego.options[decimoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(decimoAgrego.value)
        contador+=1
    }

    const oncenoAgrego = document.getElementById('otros-agregos')
    if(oncenoAgrego.value !== ""){
        mensaje += `* ${oncenoAgrego.dataset.text}: ${oncenoAgrego.options[oncenoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(oncenoAgrego.value)
        contador+=1
    }

    const duodecimoAgrego = document.getElementById('fotos-locaciones-especiales')
    if(duodecimoAgrego.value !== ""){
        mensaje += `* ${duodecimoAgrego.dataset.text}: ${duodecimoAgrego.options[duodecimoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(duodecimoAgrego.value)
        contador+=1
    }

    const tredecimoAgrego = document.getElementById('lienzo-oleo')
    if(tredecimoAgrego.value !== ""){
        mensaje += `* ${tredecimoAgrego.dataset.text}: ${tredecimoAgrego.options[tredecimoAgrego.selectedIndex].text}\n`
        precioTotal += parseInt(tredecimoAgrego.value)
        contador+=1
    }

    mensaje += `*Precio Final:* ${precioTotal}`
    if(contador === 0){
        
        let mensajeSinAgrego = mensaje.replace("*Agregos:*","")
        const mensajeCodificado = encodeURIComponent(mensajeSinAgrego)
        const url = `https://wa.me/${numero}?text=${mensajeCodificado}. `
        window.open(url, "_blank")
    }
    

    const mensajeCodificado = encodeURIComponent(mensaje)
    const url = `https://wa.me/${numero}?text=${mensajeCodificado}. `
    window.open(url, "_blank")
})