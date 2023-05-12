let cantsvaag = 0;
let iterable = 0;
let listSVAShop = [];
let listSelects = ['can-VC', 'can-vD', 'can-PC', 'canWp', 'canMTW', 'canMth', 'canMa'];
// paso 2 

document.getElementById('con-venta-SVA').addEventListener("click", event =>{
    $( document ).ready(function() {
        $('#modal-sva').modal('show')
    });
    $('#con-new-sva').empty();
    // document.getElementById('c-VC').checked = false;
    // document.getElementById('can-VC').disabled = true;
    // document.getElementById('can-VC').selectedIndex = 0
    // document.getElementById('c-VC').checked = false;
    
    // document.getElementById('c-vD').checked = false;
    // document.getElementById('can-vD').disabled = true;
    // document.getElementById('can-vD').selectedIndex = 0

    // document.getElementById('c-PC').checked = false;
    // document.getElementById('can-PC').disabled = true;
    // document.getElementById('can-PC').selectedIndex = 0
    
    // document.getElementById('c-WP').checked = false;
    // document.getElementById('canWp').disabled = true;
    // document.getElementById('canWp').selectedIndex = 0
    // document.getElementById('c-MTW').disabled = false;
    // document.getElementById('c-MTH').disabled = false;
    // document.getElementById('c-MA').disabled = false;
    
    // document.getElementById('c-MA').checked = false;
    // document.getElementById('canMTW').disabled = true;
    // document.getElementById('c-WP').disabled = false;
    // document.getElementById('c-MTH').disabled = false;
    // // document.getElementById('c-MA').disabled = false;
    // document.getElementById('canMTW').selectedIndex = 0
})

// Habilitar cantidad con los checkbox de sva
document.getElementById('c-VC').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('can-VC').disabled = false;
        document.getElementById('c-vD').disabled = true;
        cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('c-vD').disabled = false;
        document.getElementById('can-VC').disabled = true;
        document.getElementById('can-VC').selectedIndex = 0
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})
document.getElementById('c-vD').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('c-VC').disabled = true;
        document.getElementById('can-vD').disabled = false;
        cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('c-VC').disabled = false;
        document.getElementById('can-vD').disabled = true;
        document.getElementById('can-vD').selectedIndex = 0
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})
document.getElementById('c-PC').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('can-PC').disabled = false;
                cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('can-PC').disabled = true;
        document.getElementById('can-PC').selectedIndex = 0
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})
document.getElementById('c-WP').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('canWp').disabled = false;
        document.getElementById('c-MTW').disabled = true;
        document.getElementById('c-MTH').disabled = true;
        document.getElementById('c-MA').disabled = true;
        cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('canWp').disabled = true;
        document.getElementById('canWp').selectedIndex = 0
        document.getElementById('c-MTW').disabled = false;
        document.getElementById('c-MTH').disabled = false;
        document.getElementById('c-MA').disabled = false;
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})
document.getElementById('c-MTW').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('canMTW').disabled = false;
        document.getElementById('c-WP').disabled = true;
        document.getElementById('c-MTH').disabled = true;
        document.getElementById('c-MA').disabled = true;
        cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('canMTW').disabled = true;
        document.getElementById('c-WP').disabled = false;
        document.getElementById('c-MTH').disabled = false;
        // document.getElementById('c-MA').disabled = false;
        document.getElementById('canMTW').selectedIndex = 0
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})
document.getElementById('c-MTH').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('canMth').disabled = false;
        document.getElementById('c-WP').disabled = true;
        document.getElementById('c-MTW').disabled = true;
        document.getElementById('c-MA').disabled = false;
        cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('canMth').disabled = true;
        document.getElementById('c-WP').disabled = false;
        document.getElementById('c-MTW').disabled = false;
        document.getElementById('c-MA').disabled = true;
        document.getElementById('canMth').selectedIndex = 0
        document.getElementById('canMa').disabled = true;
        document.getElementById('canMa').selectedIndex = 0
        document.getElementById('c-MA').checked = false;
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})
document.getElementById('c-MA').addEventListener('change', event =>{
    if(event.srcElement.checked){
        document.getElementById('canMa').disabled = false;
        cantsvaag = cantsvaag + 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }else{
        document.getElementById('canMa').disabled = true;
        document.getElementById('canMa').selectedIndex = 0
        cantsvaag = cantsvaag - 1;
        document.getElementById('can-sva').innerHTML = cantsvaag;
    }
})

let listCheckbox = ['c-VC', 'c-vD', 'c-PC', 'c-WP', 'c-MTW', 'c-MTH', 'c-MA'];
let total = 0;

document.getElementById('btnventSva').addEventListener('click', event =>{
    let i = 0;
    listCheckbox.forEach(checkbox => {
        if(document.getElementById(checkbox).checked){
            listSVAShop.push({
                name: checkbox,
                cantidad: document.getElementById(listSelects[i]).value
            });
            // console.log(document.getElementById(checkbox))
            if(checkbox == 'c-MTW'){
                listSVAShop[listSVAShop.length - 1].apUno = '0';
                listSVAShop[listSVAShop.length - 1].apDos = '0';
            }else if(checkbox == 'c-MTH'){
                listSVAShop[listSVAShop.length - 1].apUno = '0';
                listSVAShop[listSVAShop.length - 1].apDos = '0';
                listSVAShop[listSVAShop.length - 1].apTres = '0';
                listSVAShop[listSVAShop.length - 1].adicional = false;
                posicion = i;
            }else if(checkbox == 'c-MA'){
                listSVAShop[posicion].apCuatro = '0';
                listSVAShop[posicion].adicional = true;
            }
        }
        i = i + 1;
        iterable = iterable + 1;
    });

    listSVAShop.forEach(element => {
        
        if(element.name == 'c-WP'){
            let fila = document.createElement("tr");
            fila.className = "tempSele";
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("WIFI PLUS TIPO 1");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            total = total + 0;
            var celdatTwo = document.createElement("td");
            var textoCeldaTwo = document.createTextNode(0);
            celdatTwo.appendChild(textoCeldaTwo);
            fila.appendChild(celdatTwo);

            document.getElementById('con-new-sva').appendChild(fila);
        }else if(element.name == "c-VC"){
            let fila = document.createElement("tr");
            fila.className = "tempSele";
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("SVA MÁS VELOCIDAD 50M");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celdatTwo = document.createElement("td");
            total = total + 15000;
            var textoCeldaTwo = document.createTextNode("15000");
            celdatTwo.appendChild(textoCeldaTwo);
            fila.appendChild(celdatTwo);

            document.getElementById('con-new-sva').appendChild(fila);

        }else if (element.name == "c-vD"){
            let fila = document.createElement("tr");
            fila.className = "tempSele";
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("SVA MÁS VELOCIDAD 100M");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            total = total + 25000;
            var celdatTwo = document.createElement("td");
            var textoCeldaTwo = document.createTextNode("25000");
            celdatTwo.appendChild(textoCeldaTwo);
            fila.appendChild(celdatTwo);

            document.getElementById('con-new-sva').appendChild(fila);

        }else if(element.name == "c-PC"){
            console.log(element.cantidad);
            let i = 0;
            while(i< element.cantidad){
                let fila = document.createElement("tr");
                fila.className = "tempSele";
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode("PUNTO CABLEADO");
                celda.appendChild(textoCelda);
                fila.appendChild(celda);
                total = total + (i >= 2 ? 120000 : 0);
                var celdatTwo = document.createElement("td");
                var textoCeldaTwo = document.createTextNode(i >= 2 ? '120000' : '0');
                // var textoCeldaTwo = document.createTextNode('p');
                celdatTwo.appendChild(textoCeldaTwo);
                fila.appendChild(celdatTwo);

                document.getElementById('con-new-sva').appendChild(fila);

                i = i + 1;
            }

        }else if (element.name == 'c-MTW'){
            let fila = document.createElement("tr");
            fila.className = "tempSele";
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("SOLUCIÓN AP MESH 2");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            total = total + 8000;
            var celdatTwo = document.createElement("td");
            var textoCeldaTwo = document.createTextNode("8000");
            celdatTwo.appendChild(textoCeldaTwo);
            fila.appendChild(celdatTwo);

            document.getElementById('con-new-sva').appendChild(fila);
        }else if(element.name == 'c-MTH'){
            let fila = document.createElement("tr");
            fila.className = "tempSele";
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("SOLUCIÓN AP MESH 3");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            total = total + 8000;
            var celdatTwo = document.createElement("td");
            var textoCeldaTwo = document.createTextNode("8000");
            celdatTwo.appendChild(textoCeldaTwo);
            fila.appendChild(celdatTwo);

            document.getElementById('con-new-sva').appendChild(fila);

        }else if(element.name == 'c-MA'){
            let fila = document.createElement("tr");
            fila.className = "tempSele";
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("SOLUCIÓN AP ADICIONAL");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            total = total + 4000;

            var celdatTwo = document.createElement("td");
            var textoCeldaTwo = document.createTextNode("4000");
            celdatTwo.appendChild(textoCeldaTwo);
            fila.appendChild(celdatTwo);

            document.getElementById('con-new-sva').appendChild(fila);
        }

        document.getElementById('total-sva').innerHTML = total;



    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#modal-sva').modal('hide')
            $('#info-modal-sva').modal('toggle')

        });
      }, "3000");
})
let seriales = ['D41FED078809554A0', '1A84EF8E4A43A48C0', '294D3F8E4A43C3DB0'];
document.getElementById('btninfoSva').addEventListener('click', event =>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $('#info-modal-sva').modal('hide')
            $('#paso-dos').addClass("paso-no-actived");
            $('#paso-dos-aprov').removeClass('paso-no-actived');
            $('#id-orden').empty()
            document.getElementById('id-orden').appendChild(document.createTextNode('MDM-FIBRA-000081569'))
            shopSva();
            document.getElementById('con-venta-SVA').style.display = "none";
            document.getElementById('btn-soporte-eficiente').style.display = "none";
        });
      }, "3000");
})

function implaSelects(array, select){
    array.forEach(element => {
        let option = document.createElement('option');
        option.value = element;
        option.text = element;
        select.appendChild(option);
    });
}
function shopSva(){
    listSVAShop.forEach(element => {
        let label = document.createElement("label");
        let select = document.createElement("select");
        let option = document.createElement("option");
        let cross = document.createElement('div');
        let crossIco = document.createElement('i');
        
        if(element.name == "c-WP"){
            element.campo = "select-wp";
            label.appendChild(document.createTextNode('AP 1'));
            label.setAttribute("id", "label-wp");
            select.setAttribute("id", "select-wp");
            implaSelects(seriales, select);
            cross.className = "croos-sva";
            cross.setAttribute("id", "cross-wp");
            crossIco.className = "fa-solid fa-xmark";
            cross.appendChild(crossIco)

            document.getElementById('serv-paso-dos-aprov').appendChild(label);
            document.getElementById('serv-paso-dos-aprov').appendChild(select);
            document.getElementById('serv-paso-dos-aprov').appendChild(cross);
            document.getElementById('cross-wp').addEventListener('click', event=>{
                document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-wp'));
                document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-wp'));
                document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-wp'));

                let i = 0;

                listSVAShop.forEach(element =>{
                    if(element.name == "c-WP"){
                        delete(listSVAShop[i]);
                    }
                    i = i + 1;
                })
            })



    //     }else if(element.name == "c-MTW"){
    //         var label = document.createElement("label");
    //         let textLabel = document.createTextNode("AP MESH 1");
    //         label.appendChild(textLabel);
    //         label.setAttribute("id", "label-MTW-1");
    //         let select = document.createElement("select");
    //         select.setAttribute("id", "select-MTW-1");
    //         let optionUno  = document.createElement("option")
    //         optionUno.value = "AP - MESH 1";
    //         optionUno.text = "AP - MESH 1";
    //         select.appendChild(optionUno)
    //         let optionDos  = document.createElement("option");
    //         optionDos.value = "AP - MESH 1";
    //         optionDos.text = "AP - MESH 1";
    //         select.appendChild(optionDos)
    //         let optionTres  = document.createElement("option")
    //         optionTres.value = "AP - MESH 1";
    //         optionTres.text = "AP - MESH 1";
    //         select.appendChild(optionTres)
    //         let optionCuatro  = document.createElement("option")
    //         optionCuatro.value = "AP - MESH 1";
    //         optionCuatro.text = "AP - MESH 1";
    //         select.appendChild(optionCuatro)
    //         let cross = document.createElement('div');
    //         let crossIco = document.createElement('i');
    //         cross.className = "croos-sva";
    //         cross.setAttribute("id", "cross-MTW-1");
    //         crossIco.className = "fa-solid fa-xmark";
    //         cross.appendChild(crossIco)

    //         document.getElementById('serv-paso-dos-aprov').appendChild(label);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(select);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(cross);

    //         label = document.createElement("label");
    //         textLabel = document.createTextNode("AP MESH 2");
    //         label.appendChild(textLabel);
    //         label.setAttribute("id", "label-MTW-2");
    //         select = document.createElement("select");
    //         select.setAttribute("id", "select-MTW-2");
    //         optionUno  = document.createElement("option")
    //         optionUno.value = "AP - MESH 2";
    //         optionUno.text = "AP - MESH 2";
    //         select.appendChild(optionUno)
    //         optionDos  = document.createElement("option");
    //         optionDos.value = "AP - MESH 2";
    //         optionDos.text = "AP - MESH 2";
    //         select.appendChild(optionDos)
    //         optionTres  = document.createElement("option")
    //         optionTres.value = "AP - MESH 2";
    //         optionTres.text = "AP - MESH 2";
    //         select.appendChild(optionTres)
    //         optionCuatro  = document.createElement("option")
    //         optionCuatro.value = "AP - MESH 2";
    //         optionCuatro.text = "AP - MESH 2";
    //         select.appendChild(optionCuatro)
    //         cross = document.createElement('div');
    //         crossIco = document.createElement('i');
    //         cross.className = "croos-sva";
    //         cross.setAttribute("id", "cross-MTW-2");
    //         crossIco.className = "fa-solid fa-xmark";
    //         cross.appendChild(crossIco)

    //         document.getElementById('serv-paso-dos-aprov').appendChild(label);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(select);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(cross);


    //         document.getElementById('cross-MTW-1').addEventListener('click', event=>{
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-MTW-1'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-MTW-1'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-MTW-1'));

    //             let i = 0;

    //             listSVAShop.forEach(element =>{
    //                 if(element.name == "c-MTW"){
    //                     delete(listSVAShop[i].apUno)
    //                 }
    //                 canElim = canElim + 1;
    //                 if(canElim == 2){
    //                     delete(listSVAShop[i]);
    //                     canElim = 0;
    //                 }
    //                 i = i + 1;
    //             })
    //         })

    //         document.getElementById('cross-MTW-2').addEventListener('click', event=>{
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-MTW-2'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-MTW-2'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-MTW-2'));

    //             let i = 0;

    //             listSVAShop.forEach(element =>{
    //                 if(element.name == "c-MTW"){
    //                     delete(listSVAShop[i].apDos)
    //                 }
    //                 canElim = canElim + 1;
    //                 if(canElim == 2){
    //                     delete(listSVAShop[i]);
    //                     canElim = 0;
    //                 }
    //                 i = i + 1;
    //             })
    //         })

    //     }else if(element.name == "c-MTH"){
    //         var label = document.createElement("label");
    //         let textLabel = document.createTextNode("AP MESH 1");
    //         label.appendChild(textLabel);
    //         label.setAttribute("id", "label-MTW-1");
    //         let select = document.createElement("select");
    //         select.setAttribute("id", "select-MTW-1");
    //         let optionUno  = document.createElement("option")
    //         optionUno.value = "AP - MESH 1";
    //         optionUno.text = "AP - MESH 1";
    //         select.appendChild(optionUno)
    //         let optionDos  = document.createElement("option");
    //         optionDos.value = "AP - MESH 1";
    //         optionDos.text = "AP - MESH 1";
    //         select.appendChild(optionDos)
    //         let optionTres  = document.createElement("option")
    //         optionTres.value = "AP - MESH 1";
    //         optionTres.text = "AP - MESH 1";
    //         select.appendChild(optionTres)
    //         let optionCuatro  = document.createElement("option")
    //         optionCuatro.value = "AP - MESH 1";
    //         optionCuatro.text = "AP - MESH 1";
    //         select.appendChild(optionCuatro)
    //         let cross = document.createElement('div');
    //         let crossIco = document.createElement('i');
    //         cross.className = "croos-sva";
    //         cross.setAttribute("id", "cross-MTW-1");
    //         crossIco.className = "fa-solid fa-xmark";
    //         cross.appendChild(crossIco)

    //         document.getElementById('serv-paso-dos-aprov').appendChild(label);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(select);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(cross);

    //         label = document.createElement("label");
    //         textLabel = document.createTextNode("AP MESH 2");
    //         label.appendChild(textLabel);
    //         label.setAttribute("id", "label-MTW-2");
    //         select = document.createElement("select");
    //         select.setAttribute("id", "select-MTW-2");
    //         optionUno  = document.createElement("option")
    //         optionUno.value = "AP - MESH 2";
    //         optionUno.text = "AP - MESH 2";
    //         select.appendChild(optionUno)
    //         optionDos  = document.createElement("option");
    //         optionDos.value = "AP - MESH 2";
    //         optionDos.text = "AP - MESH 2";
    //         select.appendChild(optionDos)
    //         optionTres  = document.createElement("option")
    //         optionTres.value = "AP - MESH 2";
    //         optionTres.text = "AP - MESH 2";
    //         select.appendChild(optionTres)
    //         optionCuatro  = document.createElement("option")
    //         optionCuatro.value = "AP - MESH 2";
    //         optionCuatro.text = "AP - MESH 2";
    //         select.appendChild(optionCuatro)
    //         cross = document.createElement('div');
    //         crossIco = document.createElement('i');
    //         cross.className = "croos-sva";
    //         cross.setAttribute("id", "cross-MTW-2");
    //         crossIco.className = "fa-solid fa-xmark";
    //         cross.appendChild(crossIco)

    //         document.getElementById('serv-paso-dos-aprov').appendChild(label);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(select);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(cross);

    //         label = document.createElement("label");
    //         textLabel = document.createTextNode("AP MESH 3");
    //         label.appendChild(textLabel);
    //         label.setAttribute("id", "label-MTW-3");
    //         select = document.createElement("select");
    //         select.setAttribute("id", "select-MTW-3");
    //         optionUno  = document.createElement("option")
    //         optionUno.value = "AP - MESH 3";
    //         optionUno.text = "AP - MESH 3";
    //         select.appendChild(optionUno)
    //         optionDos  = document.createElement("option");
    //         optionDos.value = "AP - MESH 3";
    //         optionDos.text = "AP - MESH 3";
    //         select.appendChild(optionDos)
    //         optionTres  = document.createElement("option")
    //         optionTres.value = "AP - MESH 3";
    //         optionTres.text = "AP - MESH 3";
    //         select.appendChild(optionTres)
    //         optionCuatro  = document.createElement("option")
    //         optionCuatro.value = "AP - MESH 3";
    //         optionCuatro.text = "AP - MESH 3";
    //         select.appendChild(optionCuatro)
    //         cross = document.createElement('div');
    //         crossIco = document.createElement('i');
    //         cross.className = "croos-sva";
    //         cross.setAttribute("id", "cross-MTW-3");
    //         crossIco.className = "fa-solid fa-xmark";
    //         cross.appendChild(crossIco)

    //         document.getElementById('serv-paso-dos-aprov').appendChild(label);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(select);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(cross);


    //         document.getElementById('cross-MTW-1').addEventListener('click', event=>{
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-MTW-1'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-MTW-1'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-MTW-1'));

    //             let i = 0;

    //             listSVAShop.forEach(element =>{
    //                 if(element.name == "c-MTH"){
    //                     delete(listSVAShop[i].apUno)
    //                     canElim = canElim + 1;
    //                 }
    //                 if(element.adicional){
    //                     if(canElim == 4){
    //                         delete(listSVAShop[i]);
    //                         delete(listSVAShop[posicion+1]);
    //                         console.log(posicion+1)
    //                         console.log('qqqqqqq')
    //                         canElim = 0;
    //                     }
    //                     i = i + 1;
    //                 }else{
    //                     if(canElim == 3){
    //                         delete(listSVAShop[i]);
    //                         canElim = 0;
    //                     }
    //                     i = i + 1;
    //                 }
                    
    //             })
    //         })

    //         document.getElementById('cross-MTW-2').addEventListener('click', event=>{
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-MTW-2'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-MTW-2'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-MTW-2'));

    //             let i = 0;

    //             listSVAShop.forEach(element =>{
    //                 if(element.name == "c-MTH"){
    //                     delete(listSVAShop[i].apDos)
    //                     canElim = canElim + 1;
    //                 }
    //                 if(element.adicional){
    //                     if(canElim == 4){
    //                         delete(listSVAShop[i]);
    //                         delete(listSVAShop[posicion+1]);
    //                         canElim = 0;
    //                     }
    //                     i = i + 1;
    //                 }else{
    //                     if(canElim == 3){
    //                         delete(listSVAShop[i]);
    //                         canElim = 0;
    //                     }
    //                     i = i + 1;
    //                 }
                    
    //             })
    //         })

    //         document.getElementById('cross-MTW-3').addEventListener('click', event=>{
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-MTW-3'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-MTW-3'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-MTW-3'));

    //             let i = 0;

    //             listSVAShop.forEach(element =>{
    //                 if(element.name == "c-MTH"){
    //                     delete(listSVAShop[i].apTres)
    //                     canElim = canElim + 1;
    //                 }
    //                 if(element.adicional){
    //                     if(canElim == 4){
    //                         delete(listSVAShop[i]);
    //                         delete(listSVAShop[posicion+1]);
    //                         canElim = 0;
    //                     }
    //                     i = i + 1;
    //                 }else{
    //                     if(canElim == 3){
    //                         delete(listSVAShop[i]);
    //                         alert('A');
    //                         canElim = 0;
    //                     }
    //                     i = i + 1;
    //                 }
                    
    //             })
    //         })

    //     }else if(element.name == "c-MA"){
    //         label = document.createElement("label");
    //         textLabel = document.createTextNode("AP MESH 4");
    //         label.appendChild(textLabel);
    //         label.setAttribute("id", "label-MTW-4");
    //         select = document.createElement("select");
    //         select.setAttribute("id", "select-MTW-4");
    //         optionUno  = document.createElement("option")
    //         optionUno.value = "AP - MESH 4";
    //         optionUno.text = "AP - MESH 4";
    //         select.appendChild(optionUno)
    //         optionDos  = document.createElement("option");
    //         optionDos.value = "AP - MESH 4";
    //         optionDos.text = "AP - MESH 4";
    //         select.appendChild(optionDos)
    //         optionTres  = document.createElement("option")
    //         optionTres.value = "AP - MESH 4";
    //         optionTres.text = "AP - MESH 4";
    //         select.appendChild(optionTres)
    //         optionCuatro  = document.createElement("option")
    //         optionCuatro.value = "AP - MESH 4";
    //         optionCuatro.text = "AP - MESH 4";
    //         select.appendChild(optionCuatro)
    //         cross = document.createElement('div');
    //         crossIco = document.createElement('i');
    //         cross.className = "croos-sva";
    //         cross.setAttribute("id", "cross-MTW-4");
    //         crossIco.className = "fa-solid fa-xmark";
    //         cross.appendChild(crossIco)

    //         document.getElementById('serv-paso-dos-aprov').appendChild(label);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(select);
    //         document.getElementById('serv-paso-dos-aprov').appendChild(cross);

    //         document.getElementById('cross-MTW-4').addEventListener('click', event=>{
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('label-MTW-4'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('select-MTW-4'));
    //             document.getElementById('serv-paso-dos-aprov').removeChild(document.getElementById('cross-MTW-4'));

    //             let i = 0;

    //             listSVAShop.forEach(element =>{
    //                 if(element.name == "c-MTH"){
    //                     delete(listSVAShop[posicion].apCuatro)
    //                     // listSVAShop[posicion].adicional = false;
    //                     canElim = canElim + 1;
    //                 }
    //                 if(canElim == 4){
    //                     delete(listSVAShop[i]);
    //                     delete(listSVAShop[posicion+1]);
    //                     canElim = 0;
    //                 }
    //                 i = i + 1;
    //             })
    //         })

        }
    });
}