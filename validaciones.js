// Definiendo el array global
var registroGlobal = [];

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
        window.alert("Datos validados correctamente");
        var registro = []
        registro[0] = document.getElementById("dato_nombre_usuario").value;
        registro[1] = document.getElementById("dato_edad_usuario").value;
        registro[2] = document.getElementById("dato_contrasena").value;

        registroGlobal.push(registro)
        console.log(registro)
    }
    else{
        window.alert("Datos inválidos");
    }
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;