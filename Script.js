let consejoCount = 0;

function obtenerConsejo() {
    fetch('https://api.adviceslip.com/advice')
        .then(respuesta => respuesta.json())
        .then(datos => {
            let consejo = datos.slip.advice;
            document.getElementById('consejo').innerText = consejo;
            
            consejoCount++;
            document.querySelector('h5 span').innerText = consejoCount;
        })
        .catch(error => {
            console.log('Error al obtener el consejo:', error);
        });
}

document.getElementById('butonConsejo').addEventListener('click', obtenerConsejo);