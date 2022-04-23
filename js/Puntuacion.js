
function crearHTML() {

    if(gamers.length > 0 ) {
        
        gamers.forEach( obj =>  {
            // crear boton de eliminar
            const botonBorrar = document.createElement('a');
            botonBorrar.classList = 'borrar-tweet';
            botonBorrar.innerText = 'X';

            // Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');

            // Añade el texto
            li.innerText = tweet.texto;

            // añade el botón de borrar al tweet
            li.appendChild(botonBorrar);

            // añade un atributo único...
            li.dataset.tweetId = tweet.id;

            // añade el tweet a la lista
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}