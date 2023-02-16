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