var usuarios = [];
var productos = [];


function registro(event) {

    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var nac = document.getElementById("nacimiento").value;
    var cor = document.getElementById("correo").value;
    var con = document.getElementById("contrasena").value;


    var usuario = [];

    usuario.nombre = nom;
    usuario.apellido = ape;
    usuario.nacimiento = nac;
    usuario.correo = cor;
    usuario.contrasena = con;


    usuarios.push(usuario);
    console.log(usuarios);
    alert("Formulario enviado. Por favor vuelva al inicio de sesion, gracias \nUtiliza " + nom + " como usuario y la nueva contraseña. Gracias");



}


function agregar() {
    console.log(usuarios.nom);

}
function inicioSesion() {
    alert("Ya iniciaste sesion");
}






