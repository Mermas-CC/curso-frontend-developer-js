const email = document.getElementById("email");
const menu_email = document.querySelector(".desktop-menu");
const barras = document.querySelector(".menu");
const menu_barras = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".carrito");
const carrito_detalle = document.querySelector(".product-detail");
const cerrar_detalle = document.querySelector(".titleOrder");

cerrar_detalle.addEventListener("click", toggleDetalle);

carrito.addEventListener("click", toggleDetalle);

function toggleDetalle() {
  const temp1 = menu_barras.classList.contains("inactive");
  const temp2 = menu_email.classList.contains("inactive");

  if (!temp1) {
    menu_barras.classList.add("inactive");
  }
  if (!temp2) {
    menu_email.classList.add("inactive");
  }
  carrito_detalle.classList.toggle("inactive");
}

barras.addEventListener("click", toggleMenBarras);

function toggleMenBarras() {
  const temp = carrito_detalle.classList.contains("inactive");
  if (!temp) {
    carrito_detalle.classList.toggle("inactive");
  }
  menu_barras.classList.toggle("inactive");
}

email.addEventListener("click", togglemenucito);
function togglemenucito() {
  const temp = carrito_detalle.classList.contains("inactive");
  if (!temp) {
    carrito_detalle.classList.toggle("inactive");
  }
  menu_email.classList.toggle("inactive");
}

//----------------------------PRODUCTOS-----------------------------------------
const productList = [];
productList.push({
  nombre: "bike",
  precio: "100",
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  descripcion: "la mejor bike del mundo",
});
productList.push({
  nombre: "pantalla",
  precio: "304",
  img: "https://th.bing.com/th/id/R.56ec7c78aa7959e01c5565b8d4ce7f95?rik=skBypXqfPC0ynA&pid=ImgRaw&r=0",
  descripcion: "la mejor bike del mundo",
});
productList.push({
  nombre: "silla",
  precio: "3044",
  img: "https://th.bing.com/th/id/OIP.C32ZJF_8X3RpVsb5wC_5VgHaHa?pid=ImgDet&rs=1",
  descripcion: "la mejor bike del mundo",
});