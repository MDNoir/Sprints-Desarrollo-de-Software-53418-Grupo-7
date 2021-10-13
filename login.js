let registros = [];

/*

var reg = { 
    usuario: "mdoc",
    edad: "25",
    contrasena: "suanfonzon"
}

registros.push(reg)
*/

function validar_captcha(recaptcha){
    var x = document.getElementById("in_login_captcha").value;
    var re_cap = new RegExp("^[Bb][Oo][Gg][Oo][Tt][AÁaá]$");
    if (re_cap.test(x) == true) {
        return true;
    }
    else {
        return false;
    }
}


function iniciar_sesion(user, contra, recaptcha){
    
    var y = document.getElementById("in_login_username").value;
    var z = document.getElementById("in_login_contrasena").value;
    var w = validar_captcha();
    for (var i = 0; i < registros.length; i++) {
        if (y == registros[i].usuario && z == registros[i].contrasena){
            return true;
        }
        else{
            return false; 
        }
    }
}

/*
function test(){
    validar_captcha();
    iniciar_sesion();
}
*/

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;


