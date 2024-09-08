var usuario = document.querySelector('input[type="text"]');
var clave = document.querySelector('input[type="password"]');


clave.addEventListener('focus', function(event){
    event.target.style.background = "gray";
    event.target.style.color = "white";
});

clave.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color = "black";
});


var usuarios=["admin", "usuario", "invitado1", "invitado2", "invitado3"];
var claves=["admin123", "usuario123", "invitado123", "invitado234", "aaron345"];

function cargar(frm){
    var usu=frm.txtusuario.value;
    let i = -1;
    for(let j=0; j<usuarios.length;j++){
        if(usuarios[j]==usu){
            i=j; break;
        }
    }

    if(i==-1){
        window.event.preventDefault();
        alert("El usuario y/o contraseña incorrecto"); return;

    }

    var clave=frm.txtclave.value;
    if(clave==claves[i]){
        alert("Bienvenido " + usu);
        window.open("https://www.google.com.pe/");
    }
    else{
        window.event.preventDefault();
        alert("El usuario y/o contraseña incorrecto");
    }
}
