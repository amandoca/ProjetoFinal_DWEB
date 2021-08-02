//Mudar Figura (MUSEUS)//

const obj_sel_exemplo_museu = document.querySelector('#sel_exemplo_museu')
const obj_img_exemplo_museu = document.querySelector('#img_exemplo_museu')
const obj_img_humores = document.querySelector('#img_humores')
const obj_p_exemplo_museu = document.querySelector('#p_exemplo_museu')
const obj_sel_humor = document.querySelector('#sel_humor')
const obj_p_humores = document.querySelector('#p_humores')

obj_sel_exemplo_museu.addEventListener('change', FunMudaFigura)

function FunMudaFigura() {
    obj_img_exemplo_museu.setAttribute('src', 'Imagens/' + obj_sel_exemplo_museu.value + '.png')
    obj_img_exemplo_museu.setAttribute('alt', 'Museu ' + obj_sel_exemplo_museu.value)
    obj_img_exemplo_museu.setAttribute('title', 'Museu ' + obj_sel_exemplo_museu.value)
    obj_p_exemplo_museu.innerText = 'Museu ' + obj_sel_exemplo_museu.value

}


//Mudar a Figura do Ingresso//

const obj_rb_array = document.querySelectorAll('[name="btn_ingresso"]')
const obj_img_ingresso = document.querySelector('#img_ingresso')

for (obj_rb of obj_rb_array) {
    obj_rb.addEventListener('click', FunMudaIngresso)
}


function FunMudaIngresso() {
    for (obj_rb of obj_rb_array) {
        if (obj_rb.checked) {
            obj_img_ingresso.setAttribute('src', 'Imagens/' + obj_rb.value + '.gif')
            obj_img_ingresso.setAttribute('title', 'INGRESSO ' + obj_rb.value)
        }
    }
}