async function consumirApi() { // creo una funcion asincrona a la cual le doy de nombre consumir api es async porque estoy consumiendo una api
    let containerCards = document.getElementById("containerbigcards") //traigo el contenedor donde quiero q aparezca el cargador de la pagina
    containerCards.innerHTML = //hago que se imprima y debajo en linea 40 lo vacio
        `
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
    `
    let api = await fetch('https://my-json-server.typicode.com/SantiagoDelgadoo/Pehua-Phone/phone') //declaro variable quue en este caso se llama api y despues la igualo a await para que espere la respuesta y fetch para que recupere la informacion del json y le paso el link de la api
    console.log(api); //compruebo que el json este funcionando correctamente

    let datosCelulares = await api.json() //delcaro variable que va a ser igual a los datos, es decir a los celulares con cada uno de sus detalles y a lo paso a formato json
    console.log(datosCelulares);
    imprimir(datosCelulares) //llamo a la funcion
}
consumirApi() //llamo a la funcion



////////////////////////////////////////////////////// IMPRIMO LAS CARDS DINAMICAS ///////////////////////////////////////////////////////////////

function imprimir(array) { //creo la funcion imprimir y le paso un parametro en este
    let containerCards = document.getElementById("containerbigcards") //declaro variable que va a ser la q va a contener la card y la igualo a elementbyid y traigo el id del padre de la card
    console.log(containerCards);
    containerCards.innerHTML = " " //hago un string vacio para vaciar este cargador y que no quede todo el tiempo cuando las cards de la pagina ya hayan cargado
    array.forEach(celular => { //llamo a el parametro que en este caso seria el que contiene los celulares y utilizo forEach para que recorra ese array, basicamente hago que de cada celular me muestre lo que le pido a continuacion en forma de bucle
        containerCards.innerHTML += //esto hace que se imprima siempre y cuando llame a la funcion y la inicie como hice en la linea 7
            `<div class="card">
        <div class="imgcard">
            <img src="${celular.photo}"
                alt="${celular.name}">
        </div>
        <div class="descriptioncontainercard">
            <h3>${celular.name}</h3>
            <li>Brand: ${celular.brand}</li>
            <li>Screen: ${celular.screen}</li>
            <li>Front Camera: ${celular.frontcamera}</li>
            <li>Internal Memory: ${celular.internalmemory}</li>
            <li>Ram Memory: ${celular.rammemory}</li>
            <div class="preciocard">$${celular.price} USD</div>
            <button class="button2 btn-donate">
                Add to cart
            </button>
        </div>
    </div>`
    });
} 