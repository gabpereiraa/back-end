/**
 * Confirmar a exclusao de um contato 
 */

 
 function confirmar(idcon){
	 let resposta = confirm("confirma a exclusão desse contato?")
	 if(resposta === true){
		 //alert(idcon)
		 window.location.href = "delete?idcon=" + idcon
		 
		 
	 }
 }