function serie2() {
    let numero = 2;
    let serie = "";
    while(numero <=100){
        serie += numero;
        numero += 2;
    }
    document.write(serie + "<br>");
}

serie2();

function array20() {
    //var arreglo = new Array();
    var arreglo = [];
    var i = valor;
    do {
        var valor = prompt("Número: ");
        arreglo.push(valor);
        for(var i=0; i<90; i++){
            var arreglo = [i];
        }
        } while(i == valor);
    window.alert(arreglo);
}

//array20();

function array100() {
    var matriz = [];
    var arreglo = [];
    var cont = 1;
    for(var i=0; i<10; i++) {
        var arreglo = [];
        for(var j=0; j<10; j++) {
            arreglo.push(cont);
            cont++;
        }
        matriz.push(arreglo);
    }
    for(var i=0; i<10; i++) {
        document.write(matriz[i] + "<br>");

    }
}

array100();

function array2x3() {
    //var arreglo = new Array();
    var arreglo = [];
    var matriz = [];
    var valor;
    
            for(var i=0; i<2; i++) {
            var arreglo = [];
            for(var j=0; j<3; j++) {
                var valor = prompt("Número: ");
                arreglo.push(valor);
                
            }
            matriz.push(arreglo);
        }
        for(var i=0; i<2; i++){
            document.write("<br>")
            for(var j=0; j<3; j++) {
                document.write(matriz[i][j] + " ");

            }
        }
        window.alert(arreglo,matriz);
        
    } 
   


array2x3();