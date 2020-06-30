	window.addEventListener("load",function(){

		var registrarse = document.getElementById("botonRegistrarse");
		botonRegistrarse.addEventListener("click", function(e){
			var validar=validarCampos();

			if(!validar){
				e.preventDefault();
			}
		});
	});

	function validarCampos(){

		var nombre= document.getElementById('nombre').value;
		var telefono= document.getElementById('telefono').value;
		var email= document.getElementById('email').value;
		var red= document.getElementById('red').value;
		var alerta='';
		var camposValidados=true;

		if(nombre.length == 0){
			alerta +='Ingrese nombre';
		}


		if(telefono.length == 0){
			alerta +='Ingrese teléfono';
		}


		if(email.length == 0){
			alerta +='Ingrese email';
		}


		if(red.length == 0){
			alerta +='Ingrese redes sociales';
		}


		if(nombre.length != 0){
			camposValidados=false;
			alerta(alerta);
		}

		return camposValidados;
	}



	}