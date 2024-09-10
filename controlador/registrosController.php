<?php

class usuariosController{

    public function __construct(){
        require ('modelo/registrosController.php');
        echo "Se ejecuta controllador "

    }

    //SE LLAMA AL MODELO
    public function cargarDatos(){
        echo "Cargando...."
        $usuariosObj = new RegistroModelo();
        $datos = $usuariosObj->obtenerRegistros();
        
        //ENVIAR DATOS A LA VISTA

        
    }
}
