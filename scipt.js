const email = document.getElementById ('email')
const menu_email = document.querySelector ('.desktop-menu')
const barras = document.querySelector('.menu')
const menu_barras =document.querySelector('.mobile-menu')
const carrito = document.querySelector('.carrito')
const carrito_detalle = document.querySelector('.product-detail')
const cerrar_detalle =document.querySelector('.titleOrder')

cerrar_detalle.addEventListener('click', toggleDetalle)

carrito.addEventListener('click', toggleDetalle)

function toggleDetalle(){
    const temp1= menu_barras.classList.contains('inactive')
    const temp2= menu_email.classList.contains('inactive')
    
    if (!temp1){
        menu_barras.classList.add('inactive')
    }
    if (!temp2){
        menu_email.classList.add('inactive')
    }
    carrito_detalle.classList.toggle('inactive')
}


barras.addEventListener('click', toggleMenBarras)

function toggleMenBarras(){
    const temp= carrito_detalle.classList.contains('inactive')
    if (!temp){
        carrito_detalle.classList.toggle('inactive')    
    }
    menu_barras.classList.toggle('inactive')
}

email.addEventListener('click', togglemenucito)
function togglemenucito(){
    const temp= carrito_detalle.classList.contains('inactive')
    if (!temp){
        carrito_detalle.classList.toggle('inactive')
    }
    menu_email.classList.toggle('inactive')
}