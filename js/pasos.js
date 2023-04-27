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



//  !!!!!!!!!!!!!!! Aprovisionamiento

let inputContacto = ['docu', 'nombre-u', 'apellido-u', 'cel']
let titular = [52005880, 'ANA CARMENA', 'MORENO BURAGO', '3133318143']
document.getElementById('contacto').addEventListener('click', event=>{
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
        console.log(document.getElementById(element).value);
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
                document.getElementById('btn-visita-aprov').style.display = 'none';
                document.getElementById('btn-quinto-aprov').style.display = 'flex';
            });
        }, 2000)
    });
    

})
document.getElementById('btn-visita-aprov').addEventListener('click', event=>{
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
document.getElementById('btn-punto-nor-7').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-confirm').modal('toggle')
    });
})
document.getElementById('save-ont').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-exito-c-ont').modal('toggle')
    });
})
