function prueba() {
    /*documento -> DOM*/
    var p = document.getElementById("titulo").innerText;
    const t = document.getElementById("demo1").innerText;
    //Modificar contenido html
    document.getElementById("demo1").innerHTML = "Contenido <span>cambiado</span>";
    //Modificar contenido como texto
    document.getElementById("demo2").innerText = "Contenido <span>cambiado</span>";
    // Mensajes a consola del navegador
    console.log("Botón presionado  " + p);
    // Alertas del navegador
    window.alert(t);

}
/* Obtener elementos por Name */
var btn = document.getElementById('btnNumero');

// Delegación de eventos
btn.addEventListener('click', () => { // Función anónima
    let numeros = document.getElementsByName('numero');
    numeros.forEach(function(numero) { //Función anónima
        if(numero.checked)
           window.alert(`Elegiste: ${numero.value}`);
    });


});
/*btn.addEventListener('click', function() {// Función anónima });*/

/* Obtener elementos por Tag */ 

function backgroundColorChange(color) {
    document.getElementById('contenedor3').style.background = color;
}

let cajas = document.getElementsByTagName("section");
for (var i=0; i<cajas.length; i++) {
    cajas[i].addEventListener('mouseover', (event) => {
        debugger;
        //backgroundColorChange(event.target.style.background);
        // Concentrar los estilos del elemento
        backgroundColorChange(getComputedStyle(event.target).backgroundColor);
    });
}

/* Obtener elementos por clase */ 
function elegirPorClase() {
    var ul = document.getElementById('listaNO');
    var items = document.getElementsByClassName("ejemplo");
    for(var i=0; i<items.length; i++)
        items[i].style.color = "red";
    let ol = document.getElementById('listaO');
    var elems = ol.getElementsByClassName("ejemplo");
    for (var i=0; i<elems.length; i++){
        elems[i].setAttribute('value', 10);
        elems[i].setAttribute('onclick', 'retornarEstilo()');
    }
}

function retornarEstilo() {
    let ul = document.getElementById('listaNO');
    var items = ul.getElementsByClassName('ejemplo');
    for (var i=0; i<items.length; i++)
        items[i].style.color ="black";
}

/* Obtener elementos por Selector */
let boton = document.getElementById('btnSelector');
boton.addEventListener('click', () => {
    let titulos = document.querySelectorAll('div>h1');
    for (var i=0; i<titulos.length; i++) {
        titulos[i].style.color = "green";
    }
    let parrafos = document.querySelectorAll('#contenedor5>p:first-of-type');
    for (var i=0; i<parrafos.length; i++) {
        parrafos[i].style.background = "pink";
    }
    let parrafo = document.querySelector('p:first-child');
    parrafo.style.background = "blue";
});


