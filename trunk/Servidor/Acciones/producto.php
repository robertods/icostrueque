<?	
    importar("Servidor/Modelos/producto.class.php");
	importar("Servidor/Modelos/usuario.class.php");
	importar("Servidor/Modelos/seguridad.class.php");
	Seguridad::Check();
	
	$producto = new  Producto();	
	$usuario = new Usuario();
		
	global $dato;
	if($dato){
						
			$informacion = $producto ->obtenerPaginaProducto($dato);
			$var['base_modificada'] = '<base href="../"/>';
						
		    $var['titulo'] = $informacion[0]['titulo_producto'];
			$var['descripcion'] = $informacion[0]['descripcion_producto'];
			$var['nombre'] = $informacion[0]['nombre_perfil'];
	     	$var['prestigio'] = $informacion[0]['prestigio_perfil'];
			$var['id_usuario_ofrece'] = $informacion[0]['id_usuario'];
			$var['url_usuario_ofrece'] = $informacion[0]['url_usuario'];
			
			$dir = "Cliente/Imagenes/Usuarios/";		
			$var['foto_usuario_ofrece'] = (file_exists($dir.$var['url_usuario_ofrece'].".png"))? $var['url_usuario_ofrece'] : 'default';		
						
			importar("Cliente/Vistas/pagina-producto.html");
			die;
	}
			
	header("location: inicio");
	
?>