let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log('Numero Secreto', numeroGenerado);
    listaNumerosSorteadosOrdenada = listaNumerosSorteados.sort((a,b)=>a-b)
    console.log('Lista de numeros secretos generados',listaNumerosSorteadosOrdenada);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').setAttribute('disabled','true');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste, numero de intentos: ${intentos} ${(intentos==1) ? 'vez' : 'veces' }, numero secreto: ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled','true');
    if ((listaNumerosSorteados.length)==numeroMaximo) {
        document.getElementById('intentar').setAttribute('disabled','true');
    }else{
        document.getElementById('intentar').removeAttribute('disabled');
    }
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();