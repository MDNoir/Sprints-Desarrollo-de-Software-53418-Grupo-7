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
    var x = document.getElementById(recaptcha).value;
    var re_cap = new RegExp("^[Bb][Oo][Gg][Oo][Tt][AÁaá]$");
    if (re_cap.test(x) == true) {
        return true;
    }
    else {
        return false;
    }
}

function iniciar_sesion(user, contra, recap){
    
    var y = document.getElementById(user).value;
    var z = document.getElementById(contra).value;
    var w = validar_captcha(recap);
    for (var i = 0; i < registros.length; i++) {
        if (y == registros[i].usuario && z == registros[i].contrasena && w == true){
            console.log("sesion iniciada");
            return true;
        }
        else{
            console.log("error");
            return false; 
        }
    }
}



function test(d_us, d_cont, d_cap){
    validar_captcha(d_cap);
    iniciar_sesion(d_us, d_cont, d_cap);
}


module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;


