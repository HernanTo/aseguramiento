let estadoRuta = false;
let iniciodedia = 0;
document.getElementById('con-prox-act').style.display = "none";
document.getElementById('btn-activar').addEventListener('click', event =>{
    // Abrir confirmar ruta
    if(!estadoRuta){
        $('.header').addClass('header-act');
        document.getElementById('confi-ruta').style.display = "grid";
        document.getElementById('btn-activar').style = "visibility: hidden;"
        estadoRuta = true;
    }
})
document.getElementById('can-ruta').addEventListener('click', event=>{
    // cerrar confirmar ruta
    $('.header').removeClass('header-act');
    document.getElementById('confi-ruta').style.display = "none";
    document.getElementById('btn-activar').style = "visibility: visible;"
    estadoRuta = false;
})
document.getElementById('ac-ruta').addEventListener('click', event=>{
    // Iniciar ruta
    estadoRuta = 2;
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('confi-ruta').style.display = "none";
            document.getElementById('btn-actividad-h').style.display = "block";
            document.getElementById('btn-activar').style.display = "none";
            document.getElementById('img-activarRuta-ru').style.visibility = "hidden";
            $('.header').removeClass('header-act');
            document.getElementById('inicio-dia-n').setAttribute('id', 'iniciar-dia-a')
            document.getElementById('img-iniciar-dia').style.display = "block";
            document.getElementById('iniciar-dia-a').addEventListener('click', event=>{
                document.getElementById('con-info-inicio').style.display = "grid";
            })
        });
      }, "4000");
})
document.getElementById('btn-ac-portal').addEventListener('click', event=>{
    document.getElementById('con-info-inicio').style.display = "none";
    document.getElementById('con-info-inicio').style.display = "grid";
})
document.getElementById('btn-ac-portal').addEventListener('click', event=>{
    document.getElementById('con-detalle-inicio').style.display = "grid";
    document.getElementById('con-info-inicio').style.display = "none";
})
document.getElementById('btn-iniciar-dia').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide') 
            document.getElementById('estado-dia').innerHTML = "Iniciada"
            document.getElementById('btn-iniciar-dia').innerHTML = 'Completar';
            document.getElementById('btn-iniciar-dia').setAttribute('id', 'completar-dia-a')
            document.getElementById('con-prox-act').style.display = "grid";
            
            
            document.getElementById('completar-dia-a').addEventListener('click', event=>{
                window.scrollTo(0, 0)
                document.getElementById('con-prox-act').style.display = "none";
                document.getElementById('img-detalle-dia').style.display = "none";
                document.getElementById('img-detalle-orden').style.display = "block";
                document.getElementById('estado-dia').innerHTML = "Completada"
                document.getElementById('completar-dia-a').style.display = "none";
                document.getElementById('volver-btn').setAttribute('id', 'btn-continuar-d-dia')

                document.getElementById('btn-continuar-d-dia').addEventListener('click', event=>{
                    document.getElementById('con-detalle-inicio').style.display = "none";
                    document.getElementById('iniciar-dia-a').style.display = "none";
                    document.getElementById('no-programado').style.display = "none";
                    document.getElementById('terminado').style.display = "grid";
                    document.getElementById('tarea').style.display = "grid";
                    document.getElementById('img-iniciar-dia').style.display = "none";
                    document.getElementById('img-orden-rea').style.display = "block";
                    
                    document.getElementById('tarea').addEventListener('click', event=>{
                        document.getElementById('con-info-orden').style.display = "grid";
                        
                    })
                })
            })
        });
      }, "4000");
})
document.getElementById('volver-btn').addEventListener('click', event=>{
    document.getElementById('con-detalle-inicio').style.display = "none";
})
document.getElementById('btn-ac-aprovi').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            let numrandom = Math.floor(Math.random() * (4 - 1) + 1);
            switch(numrandom){
                case 1:
                    window.location.href = "./orden.html";
                    break;
                    case 2:
                    window.location.href = "./orden2.html";
                    break;
                    case 3:
                    window.location.href = "./tvbox/orden3.html";
                    break;  
            }
        });
      }, "4000");
})