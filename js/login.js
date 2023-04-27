let estadoInputs = false;
function verificarUser(){
    if(document.getElementById('username').value == "escueladigital"){
        if(document.getElementById('password').value == "digital"){
            
            $( document ).ready(function() {
                $('#modal-loading').modal('toggle')
            });
            setTimeout(() => {
                $( document ).ready(function() {
                    $('#modal-loading').modal('hide')
                    window.location.href = './dashboard.html';
                });
              }, "4000");
        }
    }else{
        $('#usuarioerroneo').modal('show')
    }
}   
document.getElementById('submitlogin').addEventListener('click', event=>{
    verificarUser()
})
window.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        verificarUser()
    }
  },false);

document.getElementById('password').addEventListener('change', event=>{
    if(document.getElementById('password').value != ''){
        if(document.getElementById('username').value != ''){
            estadoInputs = true;
        }else{
            estadoInputs = false;
        }
    }else{
        estadoInputs = false;
    }
    btnlogin()
})
document.getElementById('username').addEventListener('change', event=>{
    if(document.getElementById('username').value != ''){
        if(document.getElementById('password').value != ''){
            estadoInputs = true;
        }else{
            estadoInputs = false;
        }
    }else{
        estadoInputs = false;
    }
    btnlogin()
})
function btnlogin(){
    if(estadoInputs){
        document.getElementById('submitlogin').style.background = 'black';
        document.getElementById('submitlogin').style.color = "white";
    }else{
        document.getElementById('submitlogin').style.background = "rgba(22, 21, 19, 0.116)";
        document.getElementById('submitlogin').style.color = "rgba(22, 21, 19, 0.5)";
    }
}