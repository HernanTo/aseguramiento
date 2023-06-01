document.getElementById('add-espacio-habi-aseg').addEventListener('click', event=>{
    addEspacioHabi(document.getElementById('tbody-habita-paso-sie'));
});
document.getElementById('add-disposi-aseg').addEventListener('click', event=>{
    dispositivosAdicionales(document.getElementById('tbody-dispositivos-adicionales'));
 });

 document.getElementById('add-espacio-habi-aprov').addEventListener('click', event=>{
    addEspacioHabi(document.getElementById('tbody-habita-paso-sie-aprov'));
});
document.getElementById('add-disposi-aprov').addEventListener('click', event=>{
    dispositivosAdicionales(document.getElementById('tbody-dispositivos-adicionales-aprov'));
 });

function addEspacioHabi(idTabla){
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let select = document.createElement('select');
    let option = document.createElement('option');

    let habitaciones = ['Seleccione espacio', 'SALA' , 'COCINA', 'HABPRINCIPAL', 'HAB2', 'HAB3', 'HAB4', 'HAB4', 'COMEDOR', 'ESTUDIO', 'TERRAZA', 'SALA AUXILIAR', 'OFICINA', 'OTRO', '']
    addselectNormal(habitaciones, select);

    td.appendChild(select);
    tr.appendChild(td);      
    tr.setAttribute('id', `fila-paso-siete-${contadorRegistros}`)                             

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'text';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    let btnRemoveEs = document.createElement('button');
    btnRemoveEs.className = 'btnRemoveEs';
    btnRemoveEs.setAttribute('id', `borrar-paso-siete-${contadorRegistros}`);
    // btnRemoveEs.className('btnRemoveEs');
    i = document.createElement('i');
    i.classList = 'fa-solid fa-xmark';
    btnRemoveEs.appendChild(i)
    td.appendChild(btnRemoveEs);
    tr.appendChild(td);
    idTabla.appendChild(tr);
}
function dispositivosAdicionales(idTabla){
    
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let select = document.createElement('select');
    let option = document.createElement('option');
    let dis = ['Seleccione espacio', 'RAC de comunicaciones', 'Consola de video juegos', 'AP del cliente', 'Smart TV', 'Impresora', 'Router', 'Switch', 'Nevera', 'Lavadora', 'Lavadora', 'Teatro en casa', 'Teatro en casa', 'Apple TV', 'TV Box', 'Celulares', 'Asistente de voz', 'Chapa inteligente']

    addselectNormal(dis, select);

    td.appendChild(select);
    tr.appendChild(td);               
    
    td = document.createElement('td');
    select = document.createElement('select');
    option = document.createElement('option');
    option.value = '';
    option.text = 'Selecione una opción';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'PATCH CORD';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = 'WIFI';
    select.appendChild(option);
    

    td.appendChild(select);
    tr.appendChild(td);  


    td = document.createElement('td');
    select = document.createElement('select');
    option = document.createElement('option');
    option.value = '';
    option.text = 'Seleccione una opción...';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = '2.5Ghz';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = '5.0Ghz';
    select.appendChild(option);
    option = document.createElement('option');
    option.value = '';
    option.text = '2.5Ghz y 5.0Ghz';
    select.appendChild(option);
    

    td.appendChild(select);
    tr.appendChild(td);  

    td = document.createElement('td');
    check = document.createElement('input');
    check.type = 'checkbox';    
    $(check).addClass('a')
    td.appendChild(check);
    tr.appendChild(td);

    td = document.createElement('td');
    select = document.createElement('select');
    option = document.createElement('option');
    option.value = 'Nothing';
    option.text = 'Seleccione espacio';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'SALA';
    option.value = 'SALA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'COCINA';
    option.value = 'COCINA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HABPRINCIPAL';
    option.value = 'HABPRINCIPAL';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB2';
    option.value = 'HAB2';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB3';
    option.value = 'HAB3';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB4';
    option.value = 'HAB4';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'HAB5';
    option.value = 'HAB5';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'COMEDOR';
    option.value = 'COMEDOR';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'ESTUDIO';
    option.value = 'ESTUDIO';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'TERRAZA';
    option.value = 'TERRAZA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'SALA AUXILIAR';
    option.value = 'SALA AUXILIAR';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'OFICINA';
    option.value = 'OFICINA';
    select.appendChild(option);
    
    option = document.createElement('option');
    option.text = 'OTRO';
    option.value = 'OTRO';
    select.appendChild(option);

    td.appendChild(select);
    tr.appendChild(td);   

    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'number';
    td.appendChild(input);
    tr.appendChild(td);



    td = document.createElement('td');
    let btnRemoveEs = document.createElement('button');
    btnRemoveEs.className = 'btnRemoveEs';
    // btnRemoveEs.className('btnRemoveEs');
    i = document.createElement('i');
    i.classList = 'fa-solid fa-xmark';
    btnRemoveEs.appendChild(i)
    td.appendChild(btnRemoveEs);
    tr.appendChild(td);

    idTabla.appendChild(tr);
}

// Aprov
document.getElementById('config-pc').addEventListener('change', event=>{
    
    if(event.srcElement.checked){
        $('.config-punt').css('display', 'grid');
    }else{
        $('.config-punt').css('display', 'none');
    }
})