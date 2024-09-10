<?php
    class Conexion{
        function crearConexion(){
            $conexion = pg_connect(
                "host = localhost
                 dbname = minimarket
                 user = postgres
                 password = Manu"
            );

            if ($conexion) {
                echo "conectado exitosamente!"
            }else{
                echo "Error desconocido :("
            }

            return $conexion;
        }
    }
?>