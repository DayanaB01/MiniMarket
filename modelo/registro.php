<?php
include 'config/config.php'

class registro extends Conexion {
    
    //DECLARACION DE VARIABLES
    private $con;
    private $usuarios = array();

    //CONSTRUCTOR DE LA CLASE
    function __construct(){
        $objetoConexion = new Conexion();
        $con = objetoConexion->crearConexion();
    }

    //FUNCIONES PARA TRAER DATOS

    function obtenerRegistros(){
        $sql = "SELECT * FROM registros";
        $query_registros = pg_query($sql);
        if ($query_registros) {
            echo "Usuarios listos".pg_num_rows($query_registros)." mm";
        }

        while($fila = pg_fetch_object($query_registros)){
            echo "Nombre: ".$fila->nombre." MMM";
            $usuarios[] = $fila;
        }

        return $usuarios;
    }
}