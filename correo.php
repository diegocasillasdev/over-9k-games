<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if($_POST){
   echo "Los datos recibidos son: <br>Nombre: ".$_POST['nombre']."<br> "
            . "email: ".$_POST['email']."<br> Mensaje: ".$_POST['mensaje'];
	/*		
  $destino= "diegocasillasbragado@gmail.com";
  $remitente = $_POST['email'];
  $asunto = "Mensaje enviado por: ".$_POST['nombre'];
  $mensaje= $_POST['mensaje'];
  mail($destino,$asunto,$mensaje,"FROM: $remitente");
  header("location:formulariocorrecto.html");*/
}
else{
    echo "No se ha podido enviar el correo.";
}

?>