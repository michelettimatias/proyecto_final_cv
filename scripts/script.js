const desplegar = (id) =>{
	let elemento = document.querySelector("#"+id);
	let classElemento = elemento.className;
	if(classElemento.includes("h-16")){
		classElemento=classElemento.replace(" h-16", "");
		elemento.childNodes[1].childNodes[5].innerHTML="expand_less";
	}else{
		classElemento=classElemento+" h-16";
		elemento.childNodes[1].childNodes[5].innerHTML="expand_more";
	}
	elemento.className=classElemento;
}

document.getElementById("contactSubmit").addEventListener("click", function(event){
	event.preventDefault();
	validar();
  });

const validar = () =>{
	if(notEmpty(getValue("name"))){
		if(notEmpty(getValue("lastname"))){
			if(validateMail(getValue("mail"))){
				if(notEmpty(getValue("phone"))){
					if(!isNaN(getValue("phone"))){
						if(notEmpty(getValue("message"))){
							alert("Mensaje enviado");
							resetForm();
						}else{
							alert("Escriba una breve descripción del motivo de su contacto");
							focus("message");
						}
					}else{
						alert("El número telefónico solamente puede contener números");
						focus("phone");
					}
				}else{
					alert("Ingrese un número telefónico");
					focus("phone");
				}
			}else{
				alert("Ingrese una dirección de correo válida");
				focus("mail");
			}
		}else{
			alert("Ingrese su apellido");
			focus("lastname");
		}
	}else{
		alert("Ingrese su nombre");
		focus("name");
	}
}

const getValue = (id) => {
	return document.getElementById(id).value;
}

const notEmpty = (id) => {
	return id.length>0;
}

const validateMail = (mail) =>{
	if(mail.includes("@")){
		if(mail.indexOf("@")===mail.lastIndexOf("@")){
			if(mail.indexOf("@")!==0&&mail.indexOf("@")!==mail.length-1){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}else{
		return false;
	}
}

const focus = (id) => {
	document.getElementById(id).focus();
}

const resetForm = () => {
	document.getElementById("name").value="";
	document.getElementById("lastname").value="";
	document.getElementById("mail").value="";
	document.getElementById("phone").value="";
	document.getElementById("message").value="";
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

