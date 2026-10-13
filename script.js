
const formulario = document.querySelector("#registro-form");
const resultado = document.querySelector("#resultado");

const salidas = {
    nombre: document.querySelector("#salida-nombre"),
    fecha: document.querySelector("#salida-fecha"),
    edad: document.querySelector("#salida-edad"),
    telefono: document.querySelector("#salida-telefono"),
    cedula: document.querySelector("#salida-cedula"),
};


formulario.addEventListener("submit", (evento) => {
   
    evento.preventDefault();

  
    const datos = {
        nombre: formulario.elements.nombre.value.trim(),
        fecha: formulario.elements.fecha.value,
        edad: formulario.elements.edad.value,
        telefono: formulario.elements.telefono.value.trim(),
        cedula: formulario.elements.cedula.value.trim(),
    };

    
    salidas.nombre.textContent = datos.nombre;
    salidas.fecha.textContent = datos.fecha;
    salidas.edad.textContent = `${datos.edad} años`;
    salidas.telefono.textContent = datos.telefono;
    salidas.cedula.textContent = datos.cedula;

    
    resultado.classList.remove("d-none");
});


formulario.addEventListener("reset", () => {
    resultado.classList.add("d-none");

    Object.values(salidas).forEach((salida) => {
        salida.textContent = "";
    });
});