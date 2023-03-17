async function consumirApi (){ // creo una funcion asincrona a la cual le doy de nombre consumir api es async porque estoy consumiendo una api
    let api = await fetch ('https://my-json-server.typicode.com/SantiagoDelgadoo/Pehua-Phone/phone') //declaro variable quue en este caso se llama api y despues la igualo a await para que espere la respuesta y fetch para que recupere la informacion del json y le paso el link de la api
    console.log(api); //compruebo que el json este funcionando correctamente

    let datosCelulares = await api.json() //delcaro variable que va a ser igual a los datos, es decir a los celulares con cada uno de sus detalles y a lo paso a formato json
    console.log(datosCelulares);
imprimir(datosCelulares) //llamo a la funcion
}
consumirApi () //llamo a la funcion



////////////////////////////////////////////////////// IMPRIMO LAS CARDS DINAMICAS ///////////////////////////////////////////////////////////////

function imprimir (array){ //creo la funcion imprimir y le paso un parametro en este
    let containerCards = document.getElementById ("containerbigcards") //declaro variable que va a ser la q va a contener la card y la igualo a elementbyid y traigo el id del padre de la card
    console.log(containerCards);
    array.forEach(celular => { //llamo a el parametro que en este caso seria el que contiene los celulares y utilizo forEach para que recorra ese arary
        containerCards.innerHTML+=
        `<div class="card">
        <div class="imgcard">
            <img src="${celular.photo}"
                alt="${celular.name}">
        </div>
        <div class="descriptioncontainercard">
            <h3>${celular.name}</h3>
            <li>${celular.brand}</li>
            <li>${celular.screen}</li>
            <li>${celular.frontcamera}</li>
            <li>${celular.internalmemory}</li>
            <li>${celular.rammemory}</li>
            <div class="preciocard">${celular.price}</div>
            <button class="button2 btn-donate">
                Add to cart
            </button>
        </div>
    </div>`
    });
    
} 
