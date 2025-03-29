const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    form.style.left = "50%"
    form.style.transformm = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderFormulario() {
    form.style.left = "-300px"
    form.style.tranform = "translateX(0)"
    mascara.style.visibility = "hidden"
}