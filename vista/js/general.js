//PRUEBA DE CONEXION A LA BASE DE DATOS

function conectar(){
    fetch('../../controlador/restrosController.php',{
        method: 'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded; charser=UFT-8'},
        body: data
    })
}

/*VARIABLES ARRAYS GLOBALES PARA ALMACENAR DATOS*/
var productos = [];
var usuarios = [];

/* EMPIEZA -CRUD PARA EL REGISTRO DE USUARIOS-*/
function agregarRegistro() {

    var data = new FormData();
    data.append('documento', document.getElementById('documento').value);
    data.append('nombre', document.getElementById('nombre').value);
    data.append('apellido', document.getElementById('apellido').value);
    data.append('correo', document.getElementById('correo').value);
    data.append('key', document.getElementById('contrasena').value);
 
    usuarios.push(data)
    console.log('doc: ',data.get('documento'),'nom: ', data.get('nombre'), 
    'ape: ', data.get('apellido'),'correo: ', data.get('correo'), 'key: ', data.get('key'));
    alert("Formulario enviado. Por favor vuelva al inicio de sesion, gracias \nUtiliza " + data.get('nombre') + " como usuario y la nueva contraseña. Gracias");
}

function consultarRegistro() {
    console.log(usuarios)
}

/* FINALIZA -CRUD PARA EL REGISTRO DE USUARIOS-*/

/*INICIA LA FUNCION DE INICIAR SESION*/

function inicioSesion() {
    var data = new FormData();
    data.append('nombre', document.getElementById('nombre').value);
    data.append('key', document.getElementById('contrasena').value);

    usuarios.push(data.get('nombre'), data.get('key'))
    console.log('Acaba de ingresa: ',usuarios)

    // if(true){
    //     alert(data.get('nombre')+ ' ya iniciaste sesion')
    // }else{
    //     alert(data.get('nombre')+ ' No se encuentra registrado')
    // }
    alert(data.get('nombre')+ ' ya iniciaste sesion')
}

/*FIN DE LA FUNCION INICIO DE SESION*/







