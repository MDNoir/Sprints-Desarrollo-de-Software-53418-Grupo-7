

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
        if (y == validaciones.registros[i].usuario && z == validaciones.registros[i].contrasena && w == true){
            console.log("sesion iniciada");
            return true;
        }
        else{
            console.log("error");
            return false; 
        }
    }
}

function test(us, con, cap){
    validar_captcha(cap);
    iniciar_sesion(us, con, cap);
}