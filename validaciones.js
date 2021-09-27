// Definiendo el array global
let registros = [];

function validar_nombre_usuario(string) {
    var x = document.getElementById("dato_nombre_usuario").value;
    var re_nom = new RegExp("^([A-Z]{1,}[a-z]*?)(\\s[A-Z]{1,}[a-z]*?)?(\\s[A-Z]{1,}[a-z]*?)?(\\s[A-Z]{1,}[a-z]*?)?$");
    if (re_nom.test(x) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validar_edad_usuario(edad) {
    var y = parseInt(document.getElementById("dato_edad_usuario").value);
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
    var z = document.getElementById("dato_contrasena").value;
    var re_con = new RegExp("^[a-zA-Z0-9]{6,}$");
    if (re_con.test(z) == true) {
        return true;
    }
    else {
        return false;
    }
}

function agregarRegistro(){
    let v1 = validar_nombre_usuario();
    let v2 = validar_edad_usuario();
    let v3 = validar_contrasena();

    if (v1 == true && v2 == true && v3 == true){
        var reg = { 
            usuario: document.getElementById("dato_nombre_usuario").value,
            edad: document.getElementById("dato_edad_usuario").value,
            contrasena: document.getElementById("dato_contrasena").value
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
}

/*
function prueba(){
    agregarRegistro()
    OrdenarArreglo()
}
*/

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;