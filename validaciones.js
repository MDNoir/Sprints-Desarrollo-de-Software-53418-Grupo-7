function validar_nombre_usuario(string) {
    var x = document.getElementById("dato_nombre_usuario").value;
    var re = new RegExp("^([A-Z]{1,}[a-z]*?)(\\s[A-Z]{1,}[a-z]*?)?(\\s[A-Z]{1,}[a-z]*?)?(\\s[A-Z]{1,}[a-z]*?)?$");
    if (re.test(x) == true) {
        window.alert("Validación Completada");
        return true;
    }
    else {
        window.alert("Datos no válidos")
        return false;
    }
}

function validar_edad_usuario(edad) {
    var y = document.getElementById("dato_edad_usuario").value;
}

function validar_contrasena(string) {
    var z = document.getElementById("dato_contrasena").value;
}

/*
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;*/