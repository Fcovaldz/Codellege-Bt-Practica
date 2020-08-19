var arrayTablas = []

var btnRun = document.getElementById('run')
btnRun.addEventListener('click', llenarArray)

var padre = document.getElementById('padre');

// Recorre dos ciclos para llenar arrayTablas con cada una de las tablas de multiplicar
function llenarArray(){
    //incrementar
    //   lo podemos hacer con i++, i+1, i+=1
    //decrementar
    //   lo podemos hacer con i--, i-1, i-=1
    for( var i = 1; i<10; i++){
        
        var tabla = []
        

        

        for(var j = 1; j<=10; j++){
            // Creador de cada operacion de las tablas
            //push inserta valores al final de un array
            tabla.push(i*j);

          
        }
        arrayTablas.push(tabla);
    }
    //console.log(arrayTablas);
    manipularDom()

}

function manipularDom(){
    for (let i=1; i<=arrayTablas.length; i++){
        // Creador de las listas para las tablas
    var hijo = document.createElement('ul');
    hijo.classList = 'list-group col-4 mb-2'
    padre.appendChild(hijo);

    var claseColor = colorItems(i);

    for(var j = 1; j<=arrayTablas.length; j++){
    var item = document.createElement('li');
    item.classList = `list-group-item text-center ${claseColor}`
            
    //item.textContent = i + '*' + j + '=' + tabla[j-1];
    item.textContent = `${i} * ${j} = ${arrayTablas[j-1][i-1]}`;
    
    hijo.appendChild(item);
    }
    

  }

}

function colorItems(valor){
    
    switch (valor){
        case 1:
            return('list-group-item-primary')
        break;
        case 2:
            return('list-group-item-success')
        break;
        case 3:
            return('list-group-item-warning')
        break;
        case 4:
            return('list-group-item-danger')
        break;
        case 5:
            return('list-group-item-info')
        break;
        case 6:
            return('list-group-item-secondary')
        break;
        case 7:
            return('list-group-item-dark')
        break;
        case 8:
            return('list-group-item-text-info border-info')
        break;
        case 9:
            return('list-group-item-success border border-success')
        break;
    }
}
