let contadorRegistros = 0;
let codigosNivelOne = [
    {id:0, codigo: 'ACCESS POINT'},
    {id:1, codigo: 'ACCESS POINT R'},
    {id:2, codigo: 'ADAPTADOR ELECTRICO DE OTRO DISPOSITIVO'},
    {id:3, codigo: 'AGREGACION CISCO'},
    {id:4, codigo: 'APARATO TELEFONICO'},
    {id:5, codigo: 'ARMARIO TELEFONICO'},
    {id:6, codigo: 'BLOQUEO ADMINISTRATIVO'},
    {id:7, codigo: 'BNC'},
]
let codigosNivelTwo = [
    {id:0, idPadre: 0, codigo: 'ESPECTRO'},
    {id:1, idPadre: 0, codigo: 'BLOQUEADA'},
    {id:2, idPadre: 0, codigo: 'COBERTURA'},
    {id:3, idPadre: 0, codigo: 'CONDICIONES PREDIO'},
    {id:4, idPadre: 0, codigo: 'CONFIGURACION'},
    {id:5, idPadre: 0, codigo: 'CONFIGURACION DE FABRICA'},
    {id:6, idPadre: 0, codigo: 'DAÑO PUERTO ETHERNET'},

    {id:7, idPadre: 1, codigo: 'BLOQUEADA'},
    {id:8, idPadre: 1, codigo: 'CONFIGURACION DE FABRICA'},
    {id:9, idPadre: 1, codigo: 'DAÑO PUERTO ETHERNET'},
    {id:10, idPadre: 1, codigo: 'FALLA EN ADAPTOR ELECTRICO'},
    {id:11, idPadre: 1, codigo: 'FALLAS EN EL CABLEADO DE OTN A ACCESS POINT'},
    {id:12, idPadre: 1, codigo: 'INTENCIDAD DE SEÑAL MUY BAJA O NULA'},
    {id:13, idPadre: 1, codigo: 'MALA MANIPULACION DE CLIENTE'},

    {id:14, idPadre: 2, codigo: 'ADAPTADOR ELECTRICO DE OTRO DISPOSITIVO'},
    {id:15, idPadre: 2, codigo: 'Aseg BFTEL FTTH'},
    {id:16, idPadre: 2, codigo: 'DISPOSITIVOS APPLE'},
    {id:17, idPadre: 2, codigo: 'ESPEJOS - VIDRIOS'},
    {id:18, idPadre: 2, codigo: 'FALLA EN ADAPTORES ELECTRICOS'},
    {id:19, idPadre: 2, codigo: 'NO HAY COMUNICACION LAN'},

    {id:20, idPadre: 3, codigo: 'DISPOSITIVOS APPLE'},
    {id:21, idPadre: 3, codigo: 'FALLA CONFIGURACION'},
    {id:22, idPadre: 3, codigo: 'FALLA CRUZADA'},
    {id:23, idPadre: 3, codigo: 'FALLA EQUIPO'},
    {id:24, idPadre: 3, codigo: 'FALLA EQUIPO POR PROCESAMIENTO'},
    {id:25, idPadre: 3, codigo: 'FALLA EQUIPO POR VENTILACION'},
    {id:26, idPadre: 3, codigo: 'TABLA MULTICAST DESACTUALIZADA'},

    {id:27, idPadre: 4, codigo: 'DAÑO APARATO / NO ADECUADO'},
    {id:28, idPadre: 4, codigo: 'DAÑO CORDON'},
    {id:29, idPadre: 4, codigo: 'FALLA CRUZADA'},
    {id:30, idPadre: 4, codigo: 'SIN DAÑO AL REVISAR'},

    {id:31, idPadre: 5, codigo: 'ARMARIO - RENOVACION'},
    {id:32, idPadre: 5, codigo: 'BASE'},
    {id:33, idPadre: 5, codigo: 'CABINA'},
    {id:34, idPadre: 5, codigo: 'FALLA BLOQUE PRIMAR / SECUNDAR'},
    {id:35, idPadre: 5, codigo: 'FALLA CRUZADA'},
    {id:36, idPadre: 5, codigo: 'FALLA VANDALISMO'},
    {id:37, idPadre: 5, codigo: 'INDUCCION ENERGIA'},

    {id:38, idPadre: 6, codigo: 'BLOQUEO PROTECCION INGRESOS'},
    {id:39, idPadre: 6, codigo: 'CANCELADO'},
    {id:40, idPadre: 6, codigo: 'DISPOSITIVOS APPLE'},
    {id:41, idPadre: 6, codigo: 'NUMERO BLOQUEADO'},
    {id:42, idPadre: 6, codigo: 'SUSPENDIDO'},

    {id:43, idPadre: 7, codigo: 'DETERIORO'},
    {id:44, idPadre: 7, codigo: 'MALA MANIPULACION DE CLIENTE'},
]

let codigosNivelThi = [
    {id:0, idPadre: 0, codigo: 'INIBIDOR DE SEÑAL'},
    {id:1, idPadre: 0, codigo: 'SATURACION'},

    {id:2, idPadre: 1, codigo: 'RESET DE FABRICA'},

    {id:3, idPadre: 2, codigo: 'CAMBIO ELEMENTO'},
    {id:4, idPadre: 2, codigo: 'INSTALACION PUNTO CABLEADO'},
    {id:5, idPadre: 2, codigo: 'REQUIERE INSTALAR OTRO AP'},
    {id:6, idPadre: 2, codigo: 'REUBICACIÓN ELEMENTO'},

    {id:7, idPadre: 3, codigo: 'ESPEJOS - VIDRIOS'},
    {id:8, idPadre: 3, codigo: 'INTERFERENCIA DE OTROS DISPOSITIVOS'},

    {id:9, idPadre: 4, codigo: 'APERTURA DE PUERTOS TCP/IP'},
    {id:10, idPadre: 4, codigo: 'CAMBIO DE NOMBRE DE RED /CONTRASEÑA'},
    {id:11, idPadre: 4, codigo: 'CAMBIO MODO AP'},
    {id:12, idPadre: 4, codigo: 'CONSOLA DE JUEGOS'},
    {id:13, idPadre: 4, codigo: 'DISPOSITIVOS APPLE'},
    {id:14, idPadre: 4, codigo: 'IMPRESORA'},
    {id:15, idPadre: 4, codigo: 'LAPTOP'},
    {id:16, idPadre: 4, codigo: 'OLVIDO DE CONTRASEÑA'},

    {id:17, idPadre: 5, codigo: 'RECONFIGURAR EQUIPO'},

    {id:18, idPadre: 6, codigo: 'CAMBIO ELEMENTO'},

    {id:19, idPadre: 7, codigo: 'RESET DE FABRICA'},

    {id:20, idPadre: 8, codigo: 'RECONFIGURAR EQUIPO'},

    {id:21, idPadre: 9, codigo: 'CAMBIO ELEMENTO'},

    {id:22, idPadre: 10, codigo: 'CAMBIO ELEMENTO'},

    {id:23, idPadre: 11, codigo: 'CAMBIO ELEMENTO'},

    {id:24, idPadre: 12, codigo: 'CAMBIO ELEMENTO'},

    {id:25, idPadre: 13, codigo: 'ADAPTADOR ELECTRICO DE OTRO DISPOSITIVO'},

    {id:26, idPadre: 13, codigo: 'AJUSTE CONEXION CABLE UTP A LOS PUERTOS DE DATOS DE LA ONT'},
    {id:27, idPadre: 13, codigo: 'CAMBIO ELEMENTO'},

    {id:28, idPadre: 14, codigo: 'FALLA EN MICROFILTRO'},
    {id:29, idPadre: 14, codigo: 'FALLA EN SPLITTER'},

    {id:29, idPadre: 15, codigo: 'MODEM XDSL'},

    {id:30, idPadre: 16, codigo: 'APARATO TELEFONICO'},
    {id:31, idPadre: 16, codigo: 'CANCELADO EN ETA PED EN REMEDY'},
    {id:32, idPadre: 16, codigo: 'MODEM XDSL'},
    {id:33, idPadre: 16, codigo: 'TELEFONO IP'},

    {id:34, idPadre: 17, codigo: 'DAÑO APARATO / NO ADECUADO'},

    {id:35, idPadre: 18, codigo: 'MODEM XDSL'},

    {id:36, idPadre: 19, codigo: 'TELEFONO IP'},

    {id:37, idPadre: 20, codigo: 'CANCELADO EN ETA PED EN REMEDY'},

    {id:38, idPadre: 21, codigo: 'CAMBIO CONFIGURACION'},

    {id:39, idPadre: 22, codigo: 'ARREGLO CRUZADA'},

    {id:40, idPadre: 23, codigo: 'CAMBIO ELEMENTO'},
    {id:41, idPadre: 23, codigo: 'CAMBIO FUENTE ENERGIA'},
    {id:42, idPadre: 23, codigo: 'CAMBIO PUERTO'},

    {id:43, idPadre: 24, codigo: 'CAMBIO CONFIGURACION'},

    {id:44, idPadre: 25, codigo: 'REPARACION VENTILACION'},

    {id:45, idPadre: 26, codigo: 'ACTUALIZACION FIRMWARE'},
    {id:46, idPadre: 26, codigo: 'CAMBIO CONFIG EQ CISCO MCAST'},

    {id:47, idPadre: 27, codigo: 'SE BRINDA INFORMACION'},
    {id:48, idPadre: 28, codigo: 'ARREGLO CRUZADA'},
    {id:49, idPadre: 29, codigo: 'AJUSTE CRUZADA'},
    {id:50, idPadre: 29, codigo: 'ARREGLO CRUZADA'},
    {id:51, idPadre: 29, codigo: 'CAMBIO CRUZADA'},

    {id:52, idPadre: 30, codigo: 'DAÑO EQUIPO CLIENTE'},

    {id:53, idPadre: 31, codigo: 'CUMPLIDO'},
    {id:54, idPadre: 31, codigo: 'INVIABLE'},
    {id:55, idPadre: 31, codigo: 'NEGADO'},

    {id:56, idPadre: 32, codigo: 'CUMPLIDO'},
    {id:57, idPadre: 32, codigo: 'INVIABLE'},
    {id:58, idPadre: 32, codigo: 'NEGADO'},

    {id:59, idPadre: 33, codigo: 'CUMPLIDO'},
    {id:60, idPadre: 33, codigo: 'INVIABLE'},
    {id:61, idPadre: 33, codigo: 'NEGADO'},


    {id:62, idPadre: 34, codigo: 'CAMBIO BLOQUE - REGLETA'},
    {id:63, idPadre: 34, codigo: 'CAMBIO CRUZADA'},
    {id:64, idPadre: 34, codigo: 'CAMBIO PAR'},

    {id:65, idPadre: 35, codigo: 'AJUSTE CRUZADA'},
    {id:66, idPadre: 35, codigo: 'ARREGLO CRUZADA'},
    {id:67, idPadre: 35, codigo: 'CAMBIO BLOQUE - REGLETA'},
    {id:68, idPadre: 35, codigo: 'CAMBIO CRUZADA'},
    {id:69, idPadre: 35, codigo: 'CAMBIO PAR'},

    {id:70, idPadre: 36, codigo: 'RECONSTRUCCION ELEMENTO'},

    {id:71, idPadre: 37, codigo: 'ENERGIA ETB SOLUCIONADO'},
    {id:72, idPadre: 37, codigo: 'ENERGIA OPERADOR SOLUCIONADO'},

    {id:73, idPadre: 38, codigo: 'DESTINO BLOQUEADO FIN SEMANA'},
    {id:74, idPadre: 38, codigo: 'DESTINO RESTRINGIDO'},
    {id:75, idPadre: 38, codigo: 'PROG NUM CLIENTE EN ORIGEN VIP'},

    {id:76, idPadre: 39, codigo: 'CANCELADO EN ETA PED EN REMEDY'},
    {id:77, idPadre: 39, codigo: 'RETIRO DEFINITIVO'},

    {id:77, idPadre: 40, codigo: 'AJUSTE CONEX. FISICAS CPE/LAN'},

    {id:77, idPadre: 41, codigo: 'NUMERO BLOQ PROTECCION INGRESO'},

    {id:77, idPadre: 42, codigo: 'PAGO/VOL/INVESTIGACIÓN'},

    {id:77, idPadre: 43, codigo: 'CAMBIO ELEMENTO'},
    {id:77, idPadre: 43, codigo: 'AJUSTE CONECTOR'},
    {id:77, idPadre: 43, codigo: 'CAMBIO ELEMENTO'},
]
let selectPrimerNivel = document.getElementById('codigosnone');
let selectSegundoNivel = document.getElementById('codigosntwo');
let selectTercerNivel = document.getElementById('codigosthree');
let optVacio = document.createElement('option');
optVacio.text = "Seleccione una opción";
optVacio.selected = true;
optVacio.hidden = true;

let inventario = [];
document.getElementById('agregar-in').addEventListener('click', event =>{

    let tr = document.createElement('tr');
    tr.setAttribute("id", `fila-in-${contadorRegistros}`);
    let td = document.createElement('td');
    let select = document.createElement('select');
    select.setAttribute("id", `tipo-material-${contadorRegistros}`);
    let option = document.createElement('option');
    option.value = "NoSerial";
    option.text = "No serializado";
    select.appendChild(option);
    option = document.createElement('option');
    option.value = "Serializado";
    option.text = "Serializado";
    select.appendChild(option);
    td.appendChild(select);
    tr.appendChild(td);

    td = document.createElement('td');
    select = document.createElement('select');
    select.setAttribute("id", `material-${contadorRegistros}`);
    option = document.createElement('option');
    option.value = "CONECTOR MECANICO OPTICO ODN SC-APC 8°";
    option.text = "CONECTOR MECANICO OPTICO ODN SC-APC 8°";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "CABLE FO DROP BAJA FRICCION 1 HILO";
    option.text = "CABLE FO DROP BAJA FRICCION 1 HILO";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "CABLE UTP CAT 6";
    option.text = "CABLE UTP CAT 6";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "TOMA DE PARED FO";
    option.text = "TOMA DE PARED FO";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "DROP 1 HILO INDOOR/OUTDOOR";
    option.text = "DROP 1 HILO INDOOR/OUTDOOR";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "HERRAJE RETENCION FO AREA DROP 1 HILO";
    option.text = "HERRAJE RETENCION FO AREA DROP 1 HILO";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "CAJA DISTRIBUCION DE FO PISO 4 SALIDAS";
    option.text = "CAJA DISTRIBUCION DE FO PISO 4 SALIDAS";
    select.appendChild(option);

    td.appendChild(select);
    tr.appendChild(td);

    td = document.createElement('td');
    let input = document.createElement('input')
    input.type = 'number';
    input.setAttribute("id", `cantidad-${contadorRegistros}`);
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = '783';
    td.setAttribute("id", `material-a-${contadorRegistros}`);
    tr.appendChild(td);

    td = document.createElement('td');
    let itemCross = document.createElement('i');
    itemCross.className = 'fa-solid fa-xmark';
    itemCross.setAttribute("id", `borrar-in-${contadorRegistros}`);
    td.appendChild(itemCross);
    tr.appendChild(td);

    // let tbody = document.getElementById('tbody-material');
    // tbody.appendChild(tr);

    document.getElementById('tbody-material').appendChild(tr);

    let nuevoInven = {
        id: contadorRegistros,
        tipoMaterial: document.getElementById(`tipo-material-${contadorRegistros}`).value,
        material: document.getElementById(`material-${contadorRegistros}`).value,
        cantidad: document.getElementById(`cantidad-${contadorRegistros}`).value,
        cantidadAsignada: document.getElementById(`material-a-${contadorRegistros}`).innerHTML,
        evento: false
    }
    inventario.push(nuevoInven);

    inventario.forEach(element=>{
        if(!element.evento){
            document.getElementById(`tipo-material-${element.id}`).addEventListener('change', event=>{
                console.log(document.getElementById(`tipo-material-${element.id}`));
                element.tipoMaterial = document.getElementById(`tipo-material-${element.id}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`material-${element.id}`).addEventListener('change', event=>{
                element.material = document.getElementById(`material-${element.id}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`cantidad-${element.id}`).addEventListener('change', event=>{
                element.cantidad = document.getElementById(`cantidad-${element.id}`).value;
                estadoGuardado = false;
                element.cantidad = Math.abs(element.cantidad);
                document.getElementById(`material-a-${element.id}`).innerHTML = element.cantidadAsignada - element.cantidad;
            })

            document.getElementById(`material-a-${element.id}`).addEventListener('change', event=>{
                element.cantidadAsignada = document.getElementById(`material-a-${element.id}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`borrar-in-${element.id}`).addEventListener('click', event=>{
                let row = document.getElementById(`fila-in-${element.id}`);
                let contadorElim = 0;

                // inventario.forEach(element =>{
                    if(element.id == contadorRegistros-1){
                        delete(inventario[contadorElim])
                        console.log(contadorElim);
                    }
                    contadorElim = contadorElim + 1;
                // })
                row.remove();
                estadoGuardado = false;
            })
            element.evento = true;
        }
    })
    contadorRegistros = contadorRegistros + 1;


})
document.getElementById('agregar-in-aseg').addEventListener('click', event =>{

    let tr = document.createElement('tr');
    tr.setAttribute("id", `fila-in-${contadorRegistros}`);
    let td = document.createElement('td');
    let select = document.createElement('select');
    select.setAttribute("id", `tipo-material-${contadorRegistros}`);
    let option = document.createElement('option');
    option.value = "NoSerial";
    option.text = "No serializado";
    select.appendChild(option);
    option = document.createElement('option');
    option.value = "Serializado";
    option.text = "Serializado";
    select.appendChild(option);
    td.appendChild(select);
    tr.appendChild(td);

    td = document.createElement('td');
    select = document.createElement('select');
    select.setAttribute("id", `material-${contadorRegistros}`);
    option = document.createElement('option');
    option.value = "CONECTOR MECANICO OPTICO ODN SC-APC 8°";
    option.text = "CONECTOR MECANICO OPTICO ODN SC-APC 8°";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "CABLE FO DROP BAJA FRICCION 1 HILO";
    option.text = "CABLE FO DROP BAJA FRICCION 1 HILO";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "CABLE UTP CAT 6";
    option.text = "CABLE UTP CAT 6";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "TOMA DE PARED FO";
    option.text = "TOMA DE PARED FO";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "DROP 1 HILO INDOOR/OUTDOOR";
    option.text = "DROP 1 HILO INDOOR/OUTDOOR";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "HERRAJE RETENCION FO AREA DROP 1 HILO";
    option.text = "HERRAJE RETENCION FO AREA DROP 1 HILO";
    select.appendChild(option);

    option = document.createElement('option');
    option.value = "CAJA DISTRIBUCION DE FO PISO 4 SALIDAS";
    option.text = "CAJA DISTRIBUCION DE FO PISO 4 SALIDAS";
    select.appendChild(option);

    td.appendChild(select);
    tr.appendChild(td);

    td = document.createElement('td');
    let input = document.createElement('input')
    input.type = 'number';
    input.setAttribute("id", `cantidad-${contadorRegistros}`);
    td.appendChild(input);
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = '783';
    td.setAttribute("id", `material-a-${contadorRegistros}`);
    tr.appendChild(td);

    td = document.createElement('td');
    let itemCross = document.createElement('i');
    itemCross.className = 'fa-solid fa-xmark';
    itemCross.setAttribute("id", `borrar-in-${contadorRegistros}`);
    td.appendChild(itemCross);
    tr.appendChild(td);

    // let tbody = document.getElementById('tbody-material');
    // tbody.appendChild(tr);

    document.getElementById('tbody-material-aseg').appendChild(tr);

    let nuevoInven = {
        id: contadorRegistros,
        tipoMaterial: document.getElementById(`tipo-material-${contadorRegistros}`).value,
        material: document.getElementById(`material-${contadorRegistros}`).value,
        cantidad: document.getElementById(`cantidad-${contadorRegistros}`).value,
        cantidadAsignada: document.getElementById(`material-a-${contadorRegistros}`).innerHTML,
        evento: false
    }
    inventario.push(nuevoInven);

    inventario.forEach(element=>{
        if(!element.evento){
            document.getElementById(`tipo-material-${element.id}`).addEventListener('change', event=>{
                console.log(document.getElementById(`tipo-material-${element.id}`));
                element.tipoMaterial = document.getElementById(`tipo-material-${element.id}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`material-${element.id}`).addEventListener('change', event=>{
                element.material = document.getElementById(`material-${element.id}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`cantidad-${element.id}`).addEventListener('change', event=>{
                element.cantidad = document.getElementById(`cantidad-${element.id}`).value;
                estadoGuardado = false;
                element.cantidad = Math.abs(element.cantidad);
                document.getElementById(`material-a-${element.id}`).innerHTML = element.cantidadAsignada - element.cantidad;
            })

            document.getElementById(`material-a-${element.id}`).addEventListener('change', event=>{
                element.cantidadAsignada = document.getElementById(`material-a-${element.id}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`borrar-in-${element.id}`).addEventListener('click', event=>{
                let row = document.getElementById(`fila-in-${element.id}`);
                let contadorElim = 0;

                // inventario.forEach(element =>{
                    if(element.id == contadorRegistros-1){
                        delete(inventario[contadorElim])
                        console.log(contadorElim);
                    }
                    contadorElim = contadorElim + 1;
                // })
                row.remove();
                estadoGuardado = false;
            })
            element.evento = true;
        }
    })
    contadorRegistros = contadorRegistros + 1;


})

document.getElementById('guardar-in').addEventListener('click', event =>{
    estadoGuardado = true;
})

selectPrimerNivel.addEventListener('change', event =>{
    $(selectSegundoNivel).empty();
    selectSegundoNivel.disabled = false;
    selectSegundoNivel.appendChild(optVacio);
    // console.log('a');

    codigosNivelTwo.forEach(element => {
        if(selectPrimerNivel.value == element.idPadre){
            let option = document.createElement('option')
            option.value = element.id;
            option.text = element.codigo;
            selectSegundoNivel.appendChild(option);
        }

    });
    if(!selectTercerNivel.disabled){
        $(selectTercerNivel).empty();
        selectTercerNivel.disabled = true;
        selectTercerNivel.appendChild(optVacio);
    }
})

selectSegundoNivel.addEventListener('change', event =>{
    console.log('a');
    $(selectTercerNivel).empty();
    selectTercerNivel.disabled = false;
    selectTercerNivel.appendChild(optVacio);
    codigosNivelThi.forEach(element => {
        if(selectSegundoNivel.value == element.idPadre){
            let option = document.createElement('option')
            option.value = element.id;
            option.text = element.codigo;
            selectTercerNivel.appendChild(option);
        }

    });
})