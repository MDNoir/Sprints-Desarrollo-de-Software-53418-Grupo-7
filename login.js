let registros = [];

function validar_nombre_usuario(string) {
    var x = document.getElementById(string).value;
    var re_nom = new RegExp("^([A-Z]{1,}[a-z]*?)(\\s[A-Z]{1,}[a-z]*?)?(\\s[A-Z]{1,}[a-z]*?)?(\\s[A-Z]{1,}[a-z]*?)?$");
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

function agregarRegistro(usuario, edad, contrasena){
    let v1 = validar_nombre_usuario();
    let v2 = validar_edad_usuario();
    let v3 = validar_contrasena();

    if (v1 == true && v2 == true && v3 == true){
        var reg = { 
            usuario: document.getElementById(usuario).value,
            edad: document.getElementById(edad).value,
            contrasena: document.getElementById(contrasena).value
        }

        registros.push(reg)
        
    }
}

function validar_captcha(rcaptcha){
    var re_cap = new RegExp("^[Bb][Oo][Gg][Oo][Tt][AÁaá]$");
    if (re_cap.test(rcaptcha) == true) {
        return true;
    }
    else {
        return false;
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha){
    
    for (var i = 0; i < registros.length - 1; i++) {
        if (usuario == registros[i].usuario && contrasena == registros[i].contrasena){
            var w = validar_captcha(rcaptcha);
            if (w == true){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false; 
        }
    }
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;


