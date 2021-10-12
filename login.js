let registros = [];


function validar_captcha(recaptcha){
    var x = document.getElementById("in_login_captcha").value;
    var re_nom = new RegExp("^[Bb][Oo][Go][Tt][AÁaá]$");
    if (re_nom.test(x) == true) {
        return true;
    }
    else {
        return false;
    }
}


function iniciar_sesion(usuario, contrasena, recaptcha){
    
    var y = document.getElementById("in_login_username").value;
    for (var i = 0; i < registros.length; i++) {
        if (y == registros[1][us]){
            return true;
        }
        else{
            return false; 
        }
    }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;


