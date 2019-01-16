const btn = document.querySelector(".btn");
const info = document.querySelector(".info");
 

btn.addEventListener("click", obtenerDatos);

function obtenerDatos(){
//console.log("estoy dentro de la funcion")
const ajax = new XMLHttpRequest();
//console.log(ajax);

ajax.open('GET', 'usuarios.json',true);
//QUE ES ASINCORNO
ajax.send();
//enviamos todo
//la respuesta
ajax.onreadystatechange = function(){

	//pregunto por los estados 
	if(this.readyState ==4 && this.status == 200){
		//aqui ejecuto toda la respues
		
		let datos = JSON.parse(this.responseText);
		//console.log(datos);
		const tabla = document.querySelector("#customers");
		tabla.inerHTML = '';
		for(let item of datos){
			console.log(item.name);
			tabla.innerHTML += `
		<tr>
	    <td>${item.company.name}</td>
	    <td>${item.name}</td>
	    <td>${item.address.city}</td>
	    <td>${item.email}</td>
	    <td>${item.username}</td>
	    <td>${item.phone}</td>
	    <td>${item.website}</td>

	  </tr>`

		}
		

		}
    }


}