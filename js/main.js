let idAudioRepro = 0;
let audios = [
    ["En este apartado podremos cambiar la ONT en caso de ser necesario, así que ingresaremos a la lista desplegable que está a la derecha de la ONT, y seleccionamos el serial de la ONT a cambiar, a su vez el motivo. Con el segundo botón verde podremos normalizar la ONT, en caso de que sea necesario.","a"], // Login
    ['a','a'], // Dashboard
    ['a','a'], // Orden
    ['a','a'], // Paso 1
    ['a','a'], // Paso 2
    ['a','a'], // Paso 2 Soporte Eficiente
    ['a','a'], // Paso 3
    ['a','a'], // Paso 4
    ['a','a'], // Paso 5
    ['a','a'], // Paso 6
    ['a','a'], // Paso 7
    ['a','a'], // Paso 8
]

let audioR = false;
function alertAudio(idAudio, idimg, array, textE){

    idAudio = document.getElementById(idAudio);

    if(!audioR){
        idAudio.play();
        idAudio.currentTime = 0;
        idAudioRepro = idAudio;
        audioR = !audioR;

        cambioParlanteE(idimg);
        $(idAudio).one('ended', desaparecerHablador);
    }else{
        // alert('pausar audio')
        idAudioRepro.pause();
        idAudioRepro.currentTime = 0;
        idAudioRepro = idAudio;
        idAudio.play()
        cambioParlanteE(idimg)
        $(idAudio).one('ended', desaparecerHablador)
    }
    hablador(array, textE)

}
function desaparecerHablador(){
    setTimeout(() => {
        $('#alert-flotante').removeClass("etb-flotant-active");
    }, 2000);
}
function ocultarHablador(){
    $('#alert-flotante').removeClass("etb-flotant-active");
}
function hablador(array, textE){
    // clearInterval(efectuarTexto);
    $('#text-msg-hab').empty();
    $('#alert-flotante').addClass("etb-flotant-active");

    document.getElementById('mensaje-parlante').style.display = "block";
    $('#mensaje-parlante').addClass('msg-waite');
    efectuarTexto = setTimeout(() => {
        $('#mensaje-parlante').removeClass('msg-waite');
        let textoFinal = dividirText(audios[array][textE])

        var typed = new Typed('#text-msg-hab', {
            strings: textoFinal,
            typeSpeed: 30,
        });


    }, 700);
}
function habladorText(text){
    $('#text-msg-hab').empty();
    $('#alert-flotante').addClass("etb-flotant-active");
    document.getElementById('mensaje-parlante').style.display = "block";
    $('#mensaje-parlante').addClass('msg-waite');

    setTimeout(() => {
        $('#mensaje-parlante').removeClass('msg-waite');
        let textoFinal = dividirText(text)
        console.log(textoFinal);

        var typed = new Typed('#text-msg-hab', {
            strings: textoFinal,
            typeSpeed: 45,
        });
    }, 700);

}
function cambioParlanteE(idimg){
    document.getElementById(idimg).src = "./assets/img/Group 11.svg";
    document.getElementById(idimg).style.animation = 'none';
}

function dividirText(textoInicial){
    let lengthText = textoInicial.length;
    let texto = textoInicial;
    let contador = 1;
    let textoFinal = [];
    let posicion = 0;
    let tempText = '';

    for(let i = 0; i < lengthText; i++){
        if(contador >= 100){
            if(texto.charAt(i) != ' '){
                tempText = tempText + texto.charAt(i);
                console.log(tempText);
            }else{
                tempText = tempText + texto.charAt(i);
                textoFinal[posicion] = tempText;
                
                posicion = posicion + 1;
                contador = 0; 
                tempText = '';
            }
        }else if(i == (lengthText - 1)){
            
            tempText = tempText + texto.charAt(i);
            textoFinal[posicion] = tempText;

            posicion = posicion + 1;
            contador = 0; 
            tempText = '';

        }else{
            tempText = tempText + texto.charAt(i);
        }

        contador = contador + 1;
    }   

    return textoFinal;
}
