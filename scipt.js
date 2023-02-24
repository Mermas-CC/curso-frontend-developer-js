const email = document.getElementById ('email')
const menucito = document.querySelector ('.desktop-menu')

email.addEventListener('click', togglemenucito)
function togglemenucito(){
    menucito.classList.toggle('inactive')
}