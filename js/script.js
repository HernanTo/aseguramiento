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
            document.getElementById('con-venta-SVA').style.display = "grid";
            document.getElementById('btn-soporte-eficiente').style.display = "grid";
            $('#pasoli-1').removeClass('active')
            $('#pasoli-1').addClass('done')
            $('#pasoli-2').addClass('active')
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
            document.getElementById('con-venta-SVA').style.display = "none";
            document.getElementById('btn-soporte-eficiente').style.display = "none";
            $('#pasoli-1').removeClass('done')
            $('#pasoli-2').removeClass('active')
            $('#pasoli-1').addClass('active')
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
            document.getElementById('serial-paso-3-ont-aseg').appendChild(document.createTextNode(bd.ont.serial))
            if(bd.ont.cambioOnt == true){
                addInfoOntNueva();
            }
            confirmAseg();
            $('#pasoli-2').removeClass('active')
            $('#pasoli-2').addClass('done')
            $('#pasoli-3').addClass('active')
        });
    }, 2000)    
    document.getElementById('flujo-btn').style.display = "none";
    document.getElementById('con-venta-SVA').style.display = "none";
    document.getElementById('btn-soporte-eficiente').style.display = "none";
})
// Paso 3 - 4
document.getElementById('btn-paso-cuatro').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-confirmar-aseg').modal('hide')
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-tres').addClass("paso-no-actived");
            $('#paso-cuatro').removeClass('paso-no-actived');
            verificarServicio()
            $('#pasoli-3').removeClass('active')
            $('#pasoli-3').addClass('done')
            $('#pasoli-4').addClass('active')
        });
    }, 2000)
})
// Paso 4 - 5
document.getElementById('btn-paso-quinto').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-confirmar-aseg').modal('hide')
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-cuatro').addClass("paso-no-actived");
            $('#paso-quinto').removeClass('paso-no-actived');
            document.getElementById('ont-paso-quinto').appendChild(document.createTextNode(bd.ont.cambioOnt == true ? bd.ont.serialNuevo : bd.ont.serial));
            $('#pasoli-4').removeClass('active')
            $('#pasoli-4').addClass('done')
            $('#pasoli-5').addClass('active')
        }); 
    }, 2000)
})
// Paso 5 - 6
document.getElementById('btn-paso-sexto').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-desbloqueado-orden').modal('hide')
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-quinto').addClass("paso-no-actived");
            $('#paso-sexto').removeClass('paso-no-actived');
            window.scrollTo(0, 0);
            document.getElementById('ont-paso-quinto').appendChild(document.createTextNode(bd.ont.cambioOnt == true ? bd.ont.serialNuevo : bd.ont.serial));

            if(bd.ont.cambioOnt != true){
                document.getElementById('inventario-reg').style.display = "none";
            }else{
                document.getElementById('serialtdontpssix-aseg').appendChild(document.createTextNode(bd.ont.serialNuevo));
            }
            $('#pasoli-5').removeClass('active')
            $('#pasoli-5').addClass('done')
            $('#pasoli-6').addClass('active')
        }); 
    }, 2000)
})

// Paso 6 - 7
document.getElementById('btn-septimo').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-confirm-aseg').modal('hide')
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-sexto').addClass("paso-no-actived");
            $('#paso-septimo').removeClass('paso-no-actived');
            bd.personas.forEach(element => {
                if(element.seleted == true){
                    document.getElementById('visita-name').value = `${element.nombres} ${element.apellidos}`;
                }
            })
            $('#pasoli-6').removeClass('active')
            $('#pasoli-6').addClass('done')
            $('#pasoli-7').addClass('active')
        });
    }, 2000)
})
// Paso 7- 8 
document.getElementById('btn-paso-octavo').addEventListener('click', event=>{
    if(estadoBoleta){
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout( function (){
            $( document ).ready(function() {
                $('#modal-loading').modal('hide')
                $('#paso-septimo').addClass("paso-no-actived");
                $('#paso-octavo').removeClass('paso-no-actived');
                $('#pasoli-7').removeClass('active')
                $('#pasoli-7').addClass('done')
                $('#pasoli-8').addClass('active')
            });
        }, 2000)
    }else{
        $( document ).ready(function() {
            $('#modal-punto-fail-bole').modal('toggle')
        });

    }

})

// Paso final 
document.getElementById('btn-paso-final').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-septimo').addClass("paso-no-actived");
            $('#paso-octavo').removeClass('paso-no-actived');
        });
    }, 2000)
})












document.getElementById('btn-paso-volver-dos-aseg').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-tres').addClass("paso-no-actived");
            $('#paso-dos').removeClass('paso-no-actived');
        });
    }, 2000)
    document.getElementById('flujo-btn').style.display = "grid";
})




















let tempSva = [];


//  !!!!!!!!!!!!!!! Aprovisionamiento
// Paso 2 -  3
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
            $('#pasoli-2').removeClass('active')
            $('#pasoli-2').addClass('done')
            $('#pasoli-3').addClass('active')
        });
    }, 2000);

    tempSva = listSVAShop;
    listSVAShop.forEach(element=>{
        element.value = document.getElementById(element.campo).value;
    })
    document.getElementById('flujo-btn').style.display = "none";
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
            $('#pasoli-2').removeClass('done')
            $('#pasoli-2').removeClass('active')
            $('#pasoli-3').addClass('active')
        });
    }, 2000)
    listSVAShop = tempSva;
    document.getElementById('flujo-btn').style.display = "grid";
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
            $('#pasoli-3').removeClass('active')
            $('#pasoli-3').addClass('done')
            $('#pasoli-4').addClass('active')
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
            $('#pasoli-4').removeClass('active')
            $('#pasoli-4').addClass('done')
            $('#pasoli-5').addClass('active')
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
            $('#pasoli-3').removeClass('done')
            $('#pasoli-4').removeClass('active')
            $('#pasoli-3').addClass('active')
        });
    }, 2000)
})
// Paso 5 - 6
document.getElementById('btn-sexto-aprov-secuencia').addEventListener('click', event=>{
    window.scrollTo(0,0);
    document.getElementById('btn-sexto-aprov').style.display = "none";
    document.getElementById('btn-septimo-aprov').style.display = "block";
    $( document ).ready(function() {
        $('#modal-desbloqueado-orden-aprov').modal('hide')
    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout( function (){
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#paso-quinto-aprov').addClass("paso-no-actived");
            $('#paso-sexto-aprov').removeClass('paso-no-actived');
            $('#pasoli-5').removeClass('active')
            $('#pasoli-5').addClass('done')
            $('#pasoli-6').addClass('active')
        });
    }, 2000)
})
// Paso 6 - 7
document.getElementById('btn-septimo-aprov').addEventListener('click', event=>{
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
            $('#pasoli-6').removeClass('active')
            $('#pasoli-6').addClass('done')
            $('#pasoli-7').addClass('active')

            bd.personas.forEach(element => {
                if(element.seleted == true){
                    document.getElementById('visita-name-aprov').value = `${element.nombres} ${element.apellidos}`;
                }
            })
        });
    }, 2000)
})
// Paso 7 - 8
document.getElementById('btn-paso-octavo-aprov').addEventListener('click', event=>{
    if(estadoBoletaAprov){
        $( document ).ready(function() {
            $('#modal-loading').modal('toggle')
        });
        setTimeout( function (){
            $( document ).ready(function() {
                $('#modal-loading').modal('hide')
                $('#paso-septimo-aprov').addClass("paso-no-actived");
                $('#paso-octavo-aprov').removeClass('paso-no-actived');
                $('#pasoli-7').removeClass('active')
                $('#pasoli-7').addClass('done')
                $('#pasoli-8').addClass('active')
            });
        }, 2000)
    }else{
        $( document ).ready(function() {
            $('#modal-punto-fail-bole').modal('toggle')
        });

    }

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
            $('#pasoli-8').removeClass('active')
            $('#pasoli-7').removeClass('done')
            $('#pasoli-6').removeClass('done')
            $('#pasoli-5').removeClass('done')
            $('#pasoli-4').removeClass('done')
            $('#pasoli-3').removeClass('done')
            $('#pasoli-2').removeClass('done')
            $('#pasoli-2').removeClass('done')
            $('#pasoli-2').addClass('active')
        });
    }, 2000)
    document.getElementById('con-venta-SVA').style.display = "none";

    // let label = document.createElement('label');
    // listSVAShop.forEach(element=>{
    //     if(element.name = "c-WP"){
    //         let label = document.createElement('label');
    //         label.appendChild(document.createTextNode('AP 1'));
    //         document.getElementById('serv-install-aseg').appendChild(label);
    //         let select = document.createElement('select');
    //         select.disabled = true;
    //         document.getElementById('serv-install-aseg').appendChild(select);
    //         let opt = document.createElement('option');
    //         opt.value = element.value;
    //         opt.text = element.value;
    //         select.appendChild(opt);
    //         select = document.createElement('select');
    //         select.disabled = true;
    //         document.getElementById('serv-install-aseg').appendChild(select);
    //         select = document.createElement('select');
    //         select.disabled = true;
    //         document.getElementById('serv-install-aseg').appendChild(select);

    //         let div = document.createElement('div');
    //         $(div).addClass('con-funtions-serv-dos');
    //         $(div).addClass('child-serv-s');

    //         let button = document.createElement('button');
    //         $(button).addClass('save-ont');
    //         let i = document.createElement('i');
    //         $(i).addClass('fa-regular fa-floppy-disk');
    //         button.appendChild(i);
    //         div.appendChild(button);
    //         button.addEventListener('click', event => {
    //             $( document ).ready(function() {
    //                 $('#modal-exito-c-ont').modal('toggle')
    //             });
    //         })
    //         document.getElementById('serv-install-aseg').appendChild(div);
    //         document.getElementById('flujo-btn').style.display = "grid";
    //         document.getElementById('con-venta-SVA').style.display = "none";
    //         document.getElementById('btn-soporte-eficiente').style.display = "grid";
    //     }
        
    // })

    document.getElementById('contacto').disabled = false;
    $('#verifi-co').css('display','block');
    $('#verifi-co').prop('disabled', false);
    $('#label-sms').css('display','none');
    $('#actualizar-da').css('display','none');
    $('#inpt-sms').css('display','none');
    $('#inpt-sms').prop('disabled', false);
    $('#inpt-sms').empty();
    document.getElementById('contacto').selectedIndex = 0;
    $('#verifi-sms').css('display','none');
    $('#actualizar-dat').css('display','none');
    $('#id-orden').empty()
    document.getElementById('id-orden').appendChild(document.createTextNode('MDM-PQR-37926711'))

    bd.personas.forEach(element => {
        if(element.seleted == true){
            element.seleted = false;
        }
    })
    bd.personas[0].seleted = true;

})