function angulos() {
    var agudo = [];
    var recto = [];
    
    var cont = 1;
    for(var i=0; i<91; i++) {
        agudo.push(cont);
        cont++;
        cont.push(agudo);
    }
    for(var i=90; i<91; i++) {
        recto.push(cont)
        cont++;
        cont.push(recto);
       
    }
    for(var i=0; i<200; i++) {
    

    }
    window.alert(cont)
}

angulos();


