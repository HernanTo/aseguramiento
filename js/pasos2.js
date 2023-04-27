let btn_prev_7 = document.getElementById('btn-paso-7');

window.onload = () => {
    paso_6.style.display = 'block'
};

btn_prev_7.addEventListener('click', () =>{
    paso_6.style.display = 'none'
    paso_7.style.display = 'block'
})

let select_1 = document.getElementById('select-1');
select_1.addEventListener('change', () =>{
    let select_2 = document.getElementById('select-2');
    

    select_2.disabled = false;

    select_2.addEventListener('change', () => {
        let select_3 = document.getElementById('select-3');
        
        select_3.disabled = false;

        select_3.addEventListener('change', () =>{
            let select_4 = document.getElementById('select-4');

            select_4.disabled = false;
        })
    })
})


let no_retorno = false;

let btn_final = document.getElementById('btn-paso-3');
btn_final.addEventListener('click', ()=>{
    modal_no_retorno = document.getElementById('modal-confirm2');
    modal_no_retorno.style.display = 'block';
    no_retorno = true;

    let btn_con = document.getElementById('btn-con');
    btn_con.addEventListener('click', ()=>{
        window.location="./orden2.html";
    })
})