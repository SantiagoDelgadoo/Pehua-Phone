async function consumirApi (){ // creo una funcion asincrona a la cual le doy de nombre consumir api es async porque estoy consumiendo una api
    let api = await fetch ('https://my-json-server.typicode.com/SantiagoDelgadoo/Pehua-Phone/phone') //declaro variable quue en este caso se llama api y despues la igualo a await para que espere la respuesta y fetch para que recupere la informacion del json y le paso el link de la api
    console.log(api); //compruebo que el json este funcionando correctamente
}
consumirApi () //llamo a la funcion


