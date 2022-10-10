function Prueba() {
    const parr1 = document.getElementById("parr1")

    parr1.innerHTML = "Esto es una prueba"
}

function fNombreApellido() {
    const parr1 = document.getElementById("parr1");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");


    parr1.innerHTML = `Tu nombre completo es ${nombre.value} ${apellido.value}`; 
    //parr1.innerHTML = "Tu nombre completo es ";
}

function backColor(fondo) {

    document.body.style.backgroundColor=fondo;
    localStorage.setItem("fondo",fondo);
 

}

