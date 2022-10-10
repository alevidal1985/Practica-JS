function Prueba() {
    const parr1 = document.getElementById("parr1")

    parr1.innerHTML = "Esto es una prueba"
}

function fNombreApellido() {
    const parr1 = document.querySelector("#parr1")
    const nombre = document.querySelector("#nombre")
    const apellido = document.querySelector("#apellido")


    parr1.innerHTML = `Tu nombre completo es ${nombre.value} ${apellido.value}`; 
    //parr1.innerHTML = "Tu nombre completo es ";
}

function backColor(fondo) {

    document.body.style.backgroundColor=fondo;
    localStorage.setItem("fondo",fondo);
 

}

