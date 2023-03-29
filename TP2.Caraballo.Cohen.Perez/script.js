let lista = [
    {
        texto: "Hacer matemática",
        fechaYHoraCreado: Date.now(),
        fechaYHoraTachado: Date.now(),
    },
    {
        texto: "Hacer Efsi",
        fechaYHoraCreado: Date.now(),
        fechaYHoraTachado: Date.now(),
    },
    {
        texto: "Leer Lengua",
        fechaYHoraCreado: Date.now(),
        fechaYHoraTachado: Date.now(),
    }
]

console.log(lista);

btnAgregarTarea = document.getElementById("btnAgregarTarea");

function agregarTarea(){
    let textoAgregado = document.getElementById('accion').value;
    lista.texto.push(textoAgregado);
    mostrarLista();
    document.getElementById('accion').value = "";
}


/*btnAgregarTarea.onclick = function agregarTarea(){
    let textoAgregado = document.getElementById('accion').value;
    lista.texto.push(textoAgregado);
    mostrarLista();
    document.getElementById('accion').value = "";
   
}*/
  
console.log(lista);

let verLista = document.getElementById("lista")