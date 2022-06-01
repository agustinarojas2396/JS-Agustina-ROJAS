let eleccion = parseInt( prompt('Enumere del 1 al 10 como está el té'));

while (eleccion != "ESC" ) {
    switch (eleccion) {
        case 1: alert ("Para nada rico"); break;
        case 2: alert("safable"); break;
        case 3: alert("un poco rico"); break;
        case 4: alert("Mas o menos rico"); break;
        case 5: alert("rico"); break;
        case 6: alert("algo rico"); break;
        case 7: alert("bastante rico"); break;
        case 8: alert("muy rico"); break;
        case 9: alert("riquisimo"); break;
        case 10: alert("perfecto"); break;

    default: eleccion = "no sabe"; break;

}
}


//let eleccion = parseInt( prompt('Enumere del 1 al 10 como está el té'));

//for (let i=0; i <=10 ; i++) {
//    if(eleccion == 1) alert ('Para nada rico')
//        else if (eleccion == 2 ) alert('safable');
//        else if ( eleccion == 3) alert('un poco rico');
//        else if ( eleccion == 4) alert('Mas o menos rico');
//        else if ( eleccion == 5) alert('rico');
//        else if ( eleccion == 6) alert('algo rico');
//        else if ( eleccion == 7) alert('bastante rico');
//        else if ( eleccion == 8) alert('muy rico');
//        else if ( eleccion == 9) alert('riquisimo');
//        else if ( eleccion == 10) alert('perfecto');

//    console.log(i)}
