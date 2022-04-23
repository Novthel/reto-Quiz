
let gamers = [];


export function saveGame(score){

    const nombre = document.querySelector('.gamer').value;

    if(nombre === '') {
        return;
   }
    
    const obj = {
        id: Date.now(),
        nombre,
        score
    }
    
    gamers = [...gamers, obj];
    localStorage.setItem('Gamer', JSON.stringify( gamers ));
      
}