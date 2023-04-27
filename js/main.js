let idAudioRepro = 0;
let estadoAudio = false;
let audios = [
    ['ola', 'Pero que es la vida sin escesos mi bro'],
    ['ola', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium quod']
]

let audioR = false;
function alertAudio(idAudio, idimg, array, textE){
    console.log('alert-info')
    if(idAudio == 'au-login-inicio'){
        document.getElementById('alert-info').style.display = 'flex';
    }
    idAudio = document.getElementById(idAudio);
    console.log(idAudio)
    if(!audioR){
        // alert('repro audio');
        idAudio.play();
        // idAudio.currentTime = 0;
        idAudioRepro = idAudio;
        audioR = !audioR;
        cambioParlanteE(idimg)
        idAudio.addEventListener('ended', event=>{
            setInterval(() => {
                $('#alert-flotante').removeClass("etb-flotant-active");
            }, 2000);
        })
    }else{
        // alert('pausar audio')
        idAudioRepro.pause();
        // idAudioRepro.currentTime = 0;
        idAudioRepro = idAudio;
        idAudio.play()
        cambioParlanteE(idimg)
        idAudio.addEventListener('ended', event=>{
            setInterval(() => {
                $('#alert-flotante').removeClass("etb-flotant-active");
            }, 2000);
        })
    }
    console.log(array)
    console.log(textE)
    hablador(array, textE)
}
function cambioParlanteE(idimg){
    document.getElementById(idimg).src = "./assets/img/Group 11.svg";
    document.getElementById(idimg).style.animation = 'none';
}
function hablador(array, textE){
    // $('#text-msg-hab').removeClass('p-anim');
    // document.getElementById('alert-flotante').style.display = "flex";
    $('#text-msg-hab').empty();
    $('#alert-flotante').addClass("etb-flotant-active");
    setInterval(() => {
        document.getElementById('mensaje-parlante').style.display = "block";
    }, 500);
    document.getElementById('wait-text').style.display = "block";
    console.log(array)
    console.log(textE)
    console.log(audios[array][textE])
    let contador = 0;
    document.getElementById('wait-text').style.display = "none";
    document.getElementById('text-msg-hab').appendChild(document.createTextNode(audios[array][textE]))
}

function habladorText(text){
    // $('#text-msg-hab').removeClass('p-anim');
    // document.getElementById('alert-flotante').style.display = "flex";
    $('#text-msg-hab').empty();
    $('#alert-flotante').addClass("etb-flotant-active");
    setInterval(() => {
        document.getElementById('mensaje-parlante').style.display = "block";
    }, 500);
    document.getElementById('wait-text').style.display = "block";
    document.getElementById('wait-text').style.display = "none";
    document.getElementById('text-msg-hab').appendChild(document.createTextNode(text))
}
