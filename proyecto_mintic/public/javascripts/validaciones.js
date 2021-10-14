// Definiendo el array global
var registros = [];

function validar_nombre_usuario(string) {
    var x = document.getElementById(string).value;
    var re_nom = new RegExp("^[a-zA-Z0-9]{8,16}$");
    if (re_nom.test(x) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validar_edad_usuario(edad) {
    var y = parseInt(document.getElementById(edad).value);
    if(typeof(y) == 'number'){
        if (y >= 13 && y < 110 ) {
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return false;
    }
    
}

function validar_contrasena(string) {
    var z = document.getElementById(string).value;
    var re_con = new RegExp("^[a-zA-Z0-9]{6,}$");
    if (re_con.test(z) == true) {
        return true;
    }
    else {
        return false;
    }
}

function agregarRegistro(d_nom, d_edad, d_contra){
    let v1 = validar_nombre_usuario(d_nom);
    let v2 = validar_edad_usuario(d_edad);
    let v3 = validar_contrasena(d_contra);

    if (v1 == true && v2 == true && v3 == true){
        var reg = { 
            usuario: document.getElementById(d_nom).value,
            edad: document.getElementById(d_edad).value,
            contrasena: document.getElementById(d_contra).value
        }

        registros.push(reg)
        
    }
}

function OrdenarArreglo(){
    // Función comparativa para ordenar los elementos del objeto de registro
    registros.sort(function (a, b) {
        if (a.edad > b.edad) {
            return 1;
        }
        if (b.edad > a.edad) {
            return -1;
        }
        return 0;
    });

    console.log(registros);
    return registros
}


function prueba(datoNom, datoEdad, datoContr){
    agregarRegistro(datoNom, datoEdad, datoContr)
    OrdenarArreglo()
}
