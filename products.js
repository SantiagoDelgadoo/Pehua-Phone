async function consumirApi() { // creo una funcion asincrona a la cual le doy de nombre consumir api es async porque estoy consumiendo una api
    let containerCards = document.getElementById("containerbigcards") //traigo el contenedor donde quiero q aparezca el cargador de la pagina
    containerCards.innerHTML = //hago que se imprima y debajo en linea 40 lo vacio
        `
        <div class="ratoncito">
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
</div>
    `
    let api = await fetch('https://my-json-server.typicode.com/SantiagoDelgadoo/Pehua-Phone/phone') //declaro variable quue en este caso se llama api y despues la igualo a await para que espere la respuesta y fetch para que recupere la informacion del json y le paso el link de la api
    console.log(api); //compruebo que el json este funcionando correctamente

    let arrayCelulares = await api.json() //delcaro variable que va a ser igual a los datos, es decir a los celulares con cada uno de sus detalles y a lo paso a formato json
    console.log(arrayCelulares);
    imprimir(arrayCelulares) //llamo a la funcion

    function barraSearch() { //declaro funcion para tener codigo limpio y prolijo
        let textoEscritoPorUsuario = " " //declaro variable y la igualo a un string vacio que esto va a ser lo que escriba la persona
        let search = document.getElementById('search') //declaro otra variable en la cual me voy a traer mi barra de busqueda con el get element by id es decir con el id de la misma
        console.log(search);
        search.addEventListener('keyup', (x) => { //le paso un escuchador de eventos de tipo keyup es decir que va a tomar cada vez que la persona escriba algo en el search 
            textoEscritoPorUsuario = x.target.value.toLowerCase() // hago que textoescritoporusuario sea igual a lo que la persona escribio
            let arrayDeCelularesFiltrados = arrayCelulares.filter((celular) => { //hago un filtro de de mis celulares y digo que por cada celular del array
                return celular.name.toLowerCase().includes(textoEscritoPorUsuario) //me retorne es decir me muestre el nombre del celular en minuscula que incluya lo que escribio la persona
            })
            if (arrayDeCelularesFiltrados.length === 0) { // si el celular que busco la persona en el search no se encuentra
                containerCards.innerHTML = // que me imprima el gif que esta a continuacion y que no se encontraron resultados
                    `
                <div class="containernotfound">
                <img src="./recursos/gif.gif" alt="not found">
                <p> Not Found </p>
                </div>
                `
            } else { //si se encuentra lo buscado
                imprimir(arrayDeCelularesFiltrados) //que muestre el celular que coincida con eso
            }
        })
        search.addEventListener('input', (x) => { // a mi barra de search le paso un escuchador de eventos de tipo input es decir de tipo boton 
            if (search.value === "") { //hago un condicional de que si la barra de search.value es decir esta vacio 
                imprimir(arrayCelulares) //que imprima todos los telefonos
            }
        })
    }
    barraSearch()
}
consumirApi() //llamo a la funcion

let arrayDeCelulares = phones.map((phone) => phone.internalmemory)  
let arrayDeCelularesSeteadas = new Set(arrayDeCelulares) //set es una lista sin repetir
arrayDeCelularesSeteadas.forEach(imprimirCheckbox)



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


/////////////////////////////////////////////IMPRIMO LOS CHECKBOX DINAMICOS////////////////////////////////////////////////////////////////////////
let contenedorcheck = document.getElementById(contenedor);

function imprimirCheckbox(internalmemory) {
    /* let fn = (phone) => phone.internalmemory;
    let internalmemory = new Set(phone.filter(fn).map(fn));
    internalmemory.forEach((internalmemory) => { */
        containerCheckbox.innerHTML +=
            `<label class="labelcheck">${internalmemory}
          <input type="checkbox" value="${internalmemory}" class="inputcheckbox">
          </label>`;
    };
imprimirCheckbox(internalmemory);

