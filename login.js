

function validar_captcha(recaptcha){
    var x = document.getElementById("in_login_captcha").value;
    var re_cap = new RegExp("^[Bb][Oo][Gg][Oo][Tt][AÁaá]$");
    if (re_cap.test(x) == true) {
        console.log("eres humano");
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
        if (y == validaciones.registros[i].usuario && z == validaciones.registros[i].contrasena){
            console.log("sesion iniciada");
            return true;
        }
        else{
            console.log("error");
            return false; 
        }
    }
}

function test(){
    validar_captcha()
    iniciar_sesion()
}