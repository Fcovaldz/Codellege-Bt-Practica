function array20() {
    //var arreglo = new Array();
    var arreglo = [];
    var i = valor;
    
    do {
        var valor = prompt("Nombre de Angulos/ Ingresar los Grados: ");
        arreglo.push(valor);
        for(var i=0; i<90; i++){
            var arreglo = ('Angulos: Agudo');
        }
        for(var i=90; i<91; i++){
            var arreglo = ('Angulo: Recto');
        }
        for(var i=0; i<90; i++){
            var arreglo = ('Angulo: Obtuso');
        }
        for(var i=0; i<90; i++){
            var arreglo = ('Angulo: Llano');
        }
        } while(i == valor);
    window.alert(arreglo);
}

array20();
