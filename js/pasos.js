let bd = {};
let tipoOrden = '';
bd.ont = {
    serial: document.getElementById('ont-instalada').value,
    mac: document.getElementById('ont-instalada').value,
    cambioOnt: false,
    servicio: 'No Aplica'
}

function modalUbi(){
    $( document ).ready(function() {
        $('#modal-ubi').modal('toggle')
    });
}
document.getElementById('acceso-btn').addEventListener('click', event=>{
        $( document ).ready(function() {
        $('#modal-acceso').modal('toggle')
    });
})
document.getElementById('flujo-btn').addEventListener('click', event=>{
        $( document ).ready(function() {
        $('#modal-flujo').modal('toggle')
    });
})
document.getElementById('btn-close-acceso').addEventListener('click', event=>{
    $( document ).ready(function() {
    $('#modal-acceso').modal('hide')
    });
    
})
document.getElementById('btn-close-flujo').addEventListener('click', event=>{
    $( document ).ready(function() {
    $('#modal-flujo').modal('hide')
    });
    
})
document.getElementById('con-venta-SVA').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-sva').modal('toggle')
    });
})
document.getElementById('ont-cambiar').addEventListener('change', event =>{
    if(document.getElementById('ont-cambiar').value != ""){
        document.getElementById('motivo-re-ont').disabled = false;
    }
})
document.getElementById('btn-modal-normalizar').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-normalizacion').modal('toggle')
    });
    // console.log('a')
})
document.getElementById('btn-normalizar').addEventListener('click', event=>{
    if(document.getElementById('ont-norm-serial').value != '' && document.getElementById('ont-norm-mac').value != ''){
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout( function (){
            $( document ).ready(function() {
                $('#modal-loading').modal('hide');
                $('#modal-normalizacion').modal('hide')
                bd.ont.serial = document.getElementById('ont-norm-serial').value;
                bd.ont.mac = document.getElementById('ont-norm-mac').value;
                // document.getElementById('ont-instalada').value = bd.ont.serial;
                // document.getElementById('ont-instalada').text = bd.ont.serial;
                let option = document.getElementById('ont-opt');
                option.value = bd.ont.serial;
                option.text = bd.ont.serial;
                option = document.getElementById('ont-insta-paso-two');
                option.value = bd.ont.serial;
                option.text = bd.ont.serial;
            });
        }, 2000)
    }else{
        $( document ).ready(function() {
            $('#modal-error-normal').modal('toggle')
        });
    }
})
document.getElementById('ont-cambiar').addEventListener('change', event=>{

    bd.ont.serialNuevo = document.getElementById('ont-cambiar').value;
    bd.ont.macNuevo = document.getElementById('ont-cambiar').value;
    bd.ont.servicio = false;
    bd.ont.cambioOnt = true;

})
function addInfoOntNueva(){
    let divItemInfo = document.createElement('div');
    divItemInfo.className = "row-item-info sub-row-i-i";
    let img = document.createElement('img');
    img.src = "./assets/img/arrow-turn-down-right.svg";
    divItemInfo.appendChild(img)
    img = document.createElement('img');
    img.src = "./assets/img/file.svg";
    divItemInfo.appendChild(img)
    let p = document.createElement('p');
    divItemInfo.appendChild(p)
    p.appendChild(document.createTextNode(`Serial Nuevo: ${bd.ont.serialNuevo}`))
    document.getElementById('info-ont-insta').appendChild(divItemInfo);
    
    divItemInfo = document.createElement('div');
    divItemInfo.className = "row-item-info sub-row-i-i";
    img = document.createElement('img');
    img.src = "./assets/img/arrow-turn-down-right.svg";
    divItemInfo.appendChild(img)
    img = document.createElement('img');
    img.src = "./assets/img/file.svg";
    divItemInfo.appendChild(img)
    p = document.createElement('p');
    p.appendChild(document.createTextNode(`Mac Nuevo: ${bd.ont.macNuevo}`))
    divItemInfo.appendChild(p)
    document.getElementById('info-ont-insta').appendChild(divItemInfo);
}
function confirmAseg(){
    $('#serial-actual').empty();
    $('#serial-cambiar-con').empty();
    if(bd.ont.cambioOnt == true){
        document.getElementById('serial-actual').appendChild(document.createTextNode(bd.ont.serial));
        document.getElementById('serial-cambiar-con').appendChild(document.createTextNode(bd.ont.serialNuevo));
    }else{
        document.getElementById('serial-actual').appendChild(document.createTextNode(bd.ont.serial));
        document.getElementById('serial-cambiar-con').appendChild(document.createTextNode('No se hizo cambio manual'));
    }
}

document.getElementById('btn-confirmar-aseg').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide');
            $('#modal-confirmar-aseg').modal('toggle')
        });
    }, 2000)
})

function verificarServicio(){
    if(bd.ont.cambioOnt == true){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let br = document.createElement('br');
        td.appendChild(document.createTextNode(`ONT/DSL`))
        td.appendChild(document.createElement('br'));
        td.appendChild(document.createTextNode(`SerialEquipo: ${bd.ont.serial}`))
        td.appendChild(document.createElement('br'));
        td.appendChild(document.createTextNode(`SerialEquipo: ${bd.ont.serialNuevo}`))
        td.appendChild(document.createElement('br'));
        // td.appendChild(document.createTextNode(`a`))

        tr.appendChild(td);
        
        td = document.createElement('td');
        let button = document.createElement('button')
        button.className = "btns-serv";
        // button.value = "Cambiar ONT/DSL"
        button.appendChild(document.createTextNode('Cambiar ONT/DSL'))
        td.appendChild(button);
        tr.appendChild(td);        
        td = document.createElement('td');
        td.className = 'estadoServ';
        td.appendChild(document.createTextNode('20 - Validación de Equipo Exitoso'));
        tr.appendChild(td);

        document.getElementById('servicios-paso-cuatro').appendChild(tr);
        
        let btn = document.querySelector('.btns-serv');
        let estado = document.querySelector('.estadoServ');
        btn.addEventListener('click', event=>{
            $(btn).addClass('serv-actived');
            $(estado).empty()
            estado.appendChild(document.createTextNode('50 - Activación Completa'));
            bd.ont.servicio = true;
            
            // btn.appendChild(document.createTextNode(''))
        })
    }
}
document.getElementById('btn-visita').addEventListener('click', event=>{
    tipoOrden = 'aseg';
    console.log('a');
    if(bd.ont.servicio == true){
        $('#modal-visita').modal('toggle');
        document.getElementById('contacto').selectedIndex = 0;
        document.getElementById('inpt-sms').value = '';             
        if(document.getElementById('contacto').value == 'otro'){
            document.getElementById('tdd').disabled = false;
            inputContacto.forEach(element =>{
                document.getElementById(element).value = "";
                document.getElementById(element).disabled = false;
            })
        }else if(document.getElementById('contacto').value == 'titular'){
            document.getElementById('tdd').selectedIndex = 0
            let i = 0;
            inputContacto.forEach(element =>{
                document.getElementById(element).value = titular[i];
                document.getElementById(element).disabled = true;
                i = i + 1;
            })
        }
    }else if(bd.ont.servicio == 'No Aplica'){
        $('#modal-visita').modal('toggle');
    }else{
        $('#modal-punto-activar').modal('toggle');
    }
})
// $( document ).ready(function() {
//     $('#modal-punto-de-no-retorno-quin').modal('toggle')
// });
document.getElementById('btn-punto-nor-6-aseg').addEventListener('click', event=>{
    $('#modal-punto-de-no-retorno-quin').modal('toggle')
    temporizador(5);
    document.getElementById('telefono-encuesta').appendChild(document.createTextNode(document.getElementById('cel').value))
})

function temporizador(time){
    document.getElementById('time-paso-quinto').appendChild(document.createTextNode(time))
    let tempo = setInterval(function(){
        time = time - 1;
        $('#time-paso-quinto').empty();
        document.getElementById('time-paso-quinto').appendChild(document.createTextNode(time))
        if(time == 0){
            $('#modal-punto-de-no-retorno-quin').modal('hide')
            $('#modal-desbloqueado-orden').modal('toggle')
            clearInterval(tempo);
        }
    }, 1000)
}
document.getElementById('btn-punto-nor-7-aseg').addEventListener('click', event=>{
    let verfiLenght = verificacionlenght(document.getElementById('observ-materiales'));
    if(verfiLenght){
        $( document ).ready(function() {
            $('#modal-confirm-aseg').modal('toggle')
        });
    }else{
        $( document ).ready(function() {
            $('#modal-verif').modal('toggle')
        });
    }
})  


document.getElementById('guardar-in-aseg').addEventListener('click', event=>{
    let verfiLenght = verificacionlenght(document.getElementById('observ-materiales'));
    if(verfiLenght){
        $( document ).ready(function() {
            $('#modal-exito-c-ont').modal('toggle')
        });
    }else{
        $( document ).ready(function() {
            $('#modal-verif').modal('toggle')
        });
    }
})

function verificacionlenght(textarea){
    if(textarea.value.length >= 1 && textarea.value != '' && textarea.value != ' '){
        return true;
    }else{
        return false;
    }
}
function verificacionlenghtCondi(textarea, minimo, maximo){
    if(textarea.value.length >= minimo && textarea.value != '' && textarea.value != ' ' && textarea.value.length < maximo){
        return true;
    }else{
        return false;
    }
}


document.getElementById('visita-name').addEventListener('click', event_=>{
    document.querySelector('.proce-paso-siete').style.display = "grid";
    $('.proce-paso-siete').addClass('deshide');
})


document.getElementById('file-mapa-calor').addEventListener('change', event =>{
    if(document.getElementById('file-mapa-calor').value != ''){
        document.getElementById('verMapa-calor').style.display = "block";
    }else{
        document.getElementById('verMapa-calor').style.display = "none";
    }
})
document.getElementById('verMapa-calor').addEventListener('click', event=>{
    // window.location.href = document.getElementById('file-mapa-calor').value;
})

// ** Soporte eficiente
// $( document ).ready(function() {
//     $('#modal-soporte').modal('toggle')
// });
// ** Soporte eficiente

function addselect(array, select){
    let iterable = 0;
    array.forEach(element => {
        let option = document.createElement('option')
        option.value = element;
        option.text = element;
        select.appendChild(option);
        $(select).attr('class', 'materiales-select');
        iterable = iterable + 1;
    });
}
function addselectNormal(array, select){
    array.forEach(element => {
        let option = document.createElement('option')
        option.value = element;
        option.text = element;
        select.appendChild(option);
    });
}
document.getElementById('btn-soporte-eficiente').addEventListener('click', event =>{
    $( document ).ready(function() {
        $('#modal-soporte').modal('toggle')
    });
    document.getElementById('sidebar-soporte').style.display = "grid";
})

document.getElementById('btn-cerrar-modal-so').addEventListener('click', event =>{

    document.getElementById('sidebar-soporte').style.display = "none";
})
document.getElementById('btn-paso-final').addEventListener('click', event=>{
    window.location.href = "./ordenesCom.html";  
})






//  !!!!!!!!!!!!!!! Aprovisionamiento

let inputContacto = ['docu', 'nombre-u', 'apellido-u', 'cel']
let titular = [52005880, 'ANA CARMENA', 'MORENO BURAGO', '3133318143']
bd.personas = [];
// bd.personas.push(
//     {
//         id: ,
//         nombres:,
//         apellidos: ,
//         telefono: ,
//         tipo: ,
//     }
// )
bd.personas.push(
    {
        id: titular[0],
        tipodoc: 'CC',
        nombres: titular[1],
        apellidos: titular[2],
        telefono: titular[3],
        tipo: 'Titular',
        seleted: true,
    }
)
document.getElementById('visita-name').value = `${bd.personas[0].nombres} ${bd.personas[0].apellidos}`;
document.getElementById('visita-name-aprov').value = `${bd.personas[0].nombres} ${bd.personas[0].apellidos}`;

document.getElementById('contacto').addEventListener('change', event=>{
    if(document.getElementById('contacto').value == 'otro'){
        document.getElementById('tdd').disabled = false;
        inputContacto.forEach(element =>{
            document.getElementById(element).value = "";
            document.getElementById(element).disabled = false;
        })
    }else if(document.getElementById('contacto').value == 'titular'){
        document.getElementById('tdd').selectedIndex = 0
        let i = 0;
        inputContacto.forEach(element =>{
            document.getElementById(element).value = titular[i];
            document.getElementById(element).disabled = true;
            i = i + 1;
        })
    }
})
document.getElementById('verifi-co').addEventListener('click', event=>{
    let number = document.getElementById('cel').value;
    let veriRelleno = true;
    inputContacto.forEach(element =>{
        if(document.getElementById(element).value == '' || document.getElementById(element).value == ' ' || document.getElementById(element).value == '  '){
            veriRelleno = false;
        }
    })
    if(number[0] == 3 && number.length == 10 && veriRelleno){
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout( function (){
            $( document ).ready(function() {
                $('#modal-loading').modal('hide');
                $( document ).ready(function() {
                    $('#modal-sms-corr').modal('toggle')
                    document.getElementById('label-sms').style.display = 'block';
                    document.getElementById('inpt-sms').style.display = 'block';
                    habladorText('El código SMS es N90VVI');
                    document.getElementById('verifi-co').disabled = true;
                    document.getElementById('verifi-sms').style.display = 'block';
                    document.getElementById('tdd').disabled = true;
                    document.getElementById('contacto').disabled = true;
                    inputContacto.forEach(element =>{
                        document.getElementById(element).disabled = true;
                        // i = i + 1;
                    })
                });
            });
        }, 2000)
    }else{
        $( document ).ready(function() {
            $('#modal-error-cel').modal('toggle')
        });
    }
})
document.getElementById('verifi-sms').addEventListener('click', event=>{
    if(document.getElementById('inpt-sms').value == 'N90VVI'){
        $( document ).ready(function() {
            $('#modal-co-corr').modal('toggle')
            document.getElementById('verifi-sms').style.display = 'none';
            document.getElementById('verifi-co').style.display = 'none';
            document.getElementById('inpt-sms').disabled = true;
            document.getElementById('actualizar-da').style.display = 'block';
            $('#alert-flotante').removeClass("etb-flotant-active");
        });
        
    }else{
        $( document ).ready(function() {
            $('#modal-co-erro').modal('toggle')
        });
        
    }
})
document.getElementById('actualizar-da').addEventListener('click', event=>{
    $( document ).ready(function() {
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout( function (){
            $( document ).ready(function() {
                $('#modal-loading').modal('hide');
                $('#modal-visita').modal('hide');
                $('#modal-punto-exito-bole').modal('toggle')
                if(tipoOrden == 'APROV'){
                    document.getElementById('btn-visita-aprov').style.display = 'none';
                    document.getElementById('btn-quinto-aprov').style.display = 'block';

                }else{
                    document.getElementById('btn-visita').style.display = 'none';
                    document.getElementById('btn-paso-quinto').style.display = 'block';
                }

            });
        }, 2000)

        if(document.getElementById('contacto').value == 'otro'){
            bd.personas.push(
                {
                    id: document.getElementById('docu').value,
                    tipodoc: document.getElementById('tdd').value,
                    nombres:document.getElementById('nombre-u').value,
                    apellidos: document.getElementById('apellido-u').value,
                    telefono: document.getElementById('cel').value,
                    tipo: document.getElementById('contacto').value,
                    seleted: true,
                }
            )
            bd.personas[0].seleted = false;
        }
    });
    

})
document.getElementById('btn-visita-aprov').addEventListener('click', event=>{
    tipoOrden = 'APROV';
    $( document ).ready(function() {
        $('#modal-visita').modal('toggle')
    });
})
document.getElementById('btn-red').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-red').modal('toggle')
    });
})

document.getElementById('btn-punto-nor-6').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-confirm').modal('toggle')
    });
})
document.getElementById('save-ont').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-exito-c-ont').modal('toggle')
    });
})

document.getElementById('visita-name-aprov').addEventListener('click', event_=>{
    document.querySelector('.proce-paso-siete-aprov').style.display = "grid";
    $('.proce-paso-siete-aprov').addClass('deshide');
})

document.getElementById('btn-punto-nor-7-aseg-rial').addEventListener('click', event=>{
    let verfiLenght = verificacionlenght(document.getElementById('obser-ase'));
    if(verfiLenght){
        $( document ).ready(function() {
            document.getElementById('btn-sexto-aprov').style.display = "none";
            document.getElementById('btn-septimo-aprov').style.display = "block";
            $('#modal-confirm').modal('toggle')
        });
    }else{
        $( document ).ready(function() {
            $('#modal-verif').modal('toggle')
        });
    }
})

// Temp
bd.personas.forEach(element => {
    if(element.seleted == true){
        $('#visita-name').empty();
        if(tipoOrden == 'APROV'){
            document.getElementById('visita-name-aprov').value = `${element.nombres} ${element.apellidos}`;
            
        }else{
            document.getElementById('visita-name-aprov').value = `${element.nombres} ${element.apellidos}`;

        }
    }
})
// Temp

let estadoBoleta = false;
document.getElementById('btn-boleta').addEventListener('click', event=>{
  $('#modal-punto-exito-bole').modal('toggle');
  estadoBoleta = true;
})
let estadoBoletaAprov = false;
document.getElementById('btn-boleta-aprov').addEventListener('click', event=>{
  $('#modal-punto-exito-bole').modal('toggle');
  estadoBoletaAprov = true;
})
document.getElementById('btn-sexto-aprov').addEventListener('click', event=>{

    $('#modal-confirm').modal('hide')
    $('#modal-punto-de-no-retorno-quin').modal('toggle')
    temporizadoraprov(5);
    document.getElementById('telefono-encuesta').appendChild(document.createTextNode(document.getElementById('cel').value))
})
function temporizadoraprov(time){
    document.getElementById('time-paso-quinto').appendChild(document.createTextNode(time))
    let tempo = setInterval(function(){
        time = time - 1;
        $('#time-paso-quinto').empty();
        document.getElementById('time-paso-quinto').appendChild(document.createTextNode(time))
        if(time == 0){
            $('#modal-punto-de-no-retorno-quin').modal('hide')
            $('#modal-desbloqueado-orden-aprov').modal('toggle')
            clearInterval(tempo);
        }
    }, 1000)
}