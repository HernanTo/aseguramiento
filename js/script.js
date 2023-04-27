// !! Archivo para guardar el paso a otro

// ** Paso 1 - Paso 2
document.getElementById('btn-paso-dos').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-uno').addClass("paso-no-actived");
            $('#paso-dos').removeClass('paso-no-actived');
        });
    }, 2000)
})

// ** Paso 2 - Paso 1
document.getElementById('btn-paso-volver-uno').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-dos').addClass("paso-no-actived");
            $('#paso-uno').removeClass('paso-no-actived');
        });
    }, 2000)
})

// Paso 2 - Paso 3
document.getElementById('btn-paso-tres').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-dos').addClass("paso-no-actived");
            $('#paso-tres').removeClass('paso-no-actived');
        });
    }, 2000)
})
























//  !!!!!!!!!!!!!!! Aprovisionamiento
// Paso 2 - 3
document.getElementById('btn-paso-tres-aprov').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-dos-aprov').addClass("paso-no-actived");
            $('#paso-tres-aprov').removeClass('paso-no-actived');
            document.getElementById('serial-paso-3-ont').appendChild(document.createTextNode(document.getElementById('ont-instalada-aprov').value));
        });
    }, 2000)
})
// Paso 3 - 2
document.getElementById('btn-paso-volver-dos').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-tres-aprov').addClass("paso-no-actived");
            $('#paso-dos-aprov').removeClass('paso-no-actived');
        });
    }, 2000)
})
// Paso 3 - 4
document.getElementById('btn-cuatro-aprov').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-tres-aprov').addClass("paso-no-actived");
            $('#paso-cuatro-aprov').removeClass('paso-no-actived');
        });
    }, 2000)
})
// Paso 4 - 5
document.getElementById('btn-quinto-aprov').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-cuatro-aprov').addClass("paso-no-actived");
            $('#paso-quinto-aprov').removeClass('paso-no-actived');
        });
    }, 2000)
})
// Paso 4 - 3
document.getElementById('btn-paso-volver-tres').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-cuatro-aprov').addClass("paso-no-actived");
            $('#paso-tres-aprov').removeClass('paso-no-actived');
        });
    }, 2000)
})
// Paso 5 - 6
document.getElementById('btn-sexto-aprov').addEventListener('click', event=>{
    document.getElementById('btn-sexto-aprov').style.display = "none";
    document.getElementById('btn-septimo-aprov').style.display = "block";
    $( document ).ready(function() {
        $('#modal-confirm').modal('hide')
    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-quinto-aprov').addClass("paso-no-actived");
            $('#paso-sexto-aprov').removeClass('paso-no-actived');
        });
    }, 2000)
})
document.getElementById('btn-septimo-aprov').addEventListener('click', event=>{
    alert('a');
    document.getElementById('btn-sexto-aprov').style.display = "block";
    document.getElementById('btn-septimo-aprov').style.display = "none";
    $( document ).ready(function() {
        $('#modal-confirm').modal('hide')
    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-sexto-aprov').addClass("paso-no-actived");
            $('#paso-septimo-aprov').removeClass('paso-no-actived');
        });
    }, 2000)
})
document.getElementById('btn-fin-aprov').addEventListener('click', event =>{
    $( document ).ready(function() {
        $('#modal-confirm').modal('hide')
    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-octavo-aprov').addClass("paso-no-actived");
            $('#paso-dos').removeClass('paso-no-actived');
        });
    }, 2000)
})