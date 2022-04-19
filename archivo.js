function fixture() {

    do {
        op = prompt("Fixture interactivo de 4 Equipos/Selecciones: Ingrese del 1 al 4")

        switch (op) {
            case '1':
                seleccionUno = prompt("Ingrese Selección")
                break;
            case '2':
                 seleccionUno = prompt("Ingrese Primer Seleccion/Equipo ")
                 seleccionDos = prompt("Ingrese siguiente Selección/Equipo")
                break;
            case '3':
                 seleccionUno = prompt("Selección/Equipo 1-3")
                 seleccionDos = prompt("Selección/Equipo 2-3")
                 seleccionTres = prompt ("Selección/Equipo 3-3")
                break;
            case '4':
                seleccionUno = prompt("Primer Selección/Equipo")
                seleccionDos = prompt("Segunda Selección/Equipo")
                seleccionTres = prompt("Tercer Selección/Equipo")
                seleccionCuatro = prompt ("Cuarta Selección/Equipo")
                break;

            default:
                console.log("Error")
        }


        if (op == 1) {

            alert("Su Grupo quedó conformado por:" + " " + seleccionUno)
        }
        else if (op == 2) {
            alert("Su Grupo quedó conformado por:" + " " + seleccionUno + "-" + seleccionDos)
        }

        else if (op == 3) {

           alert("Su Grupo quedó conformado por:" + " " + seleccionUno + "-" + seleccionDos + "-" + seleccionTres)
        }

        else if (op == 4) {

            alert("Su Grupo quedó conformado por:" + " " + seleccionUno + "-" + seleccionDos + "-" + seleccionTres + "-" + seleccionCuatro)

        }
        continuar = prompt("Presione una tecla para formar nuevo grupo - De lo contrario escriba salir")

    } while (continuar != "salir")
}

fixture()