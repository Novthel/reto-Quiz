import { Question } from '../models/Question.js';
import { UI } from '../models/UI.js';
import { cuestionario } from '../data/Cuestionario.js';
import { ramdon } from './funciones.js';

let score = 0;
const ui = new UI();
let gamers = [];

function preguntar(){
    
 const [ n, categoria ] = ramdon(score);

 if(n <= 4){
    const i = Math.floor(Math.random() * 5);
    const question = new Question(cuestionario[n][i].pregunta, cuestionario[n][i].opciones)
    ui.mostrarPregunta(question, isCorrect, categoria)  
  
 }else{
  
  ui.winScreen(score, saveGame);
 }
}


function isCorrect(resp){

  if(resp){
    score += 100

    ui.limpiarCategoria()
    ui.limpiarOpciones();
    ui.limpiarQuestion();
    preguntar()

  }else{
    ui.imprimir('Respuesta Incorrecta. Fin del juego', score, 'error');

    setTimeout(()=>{
      score = 0;
      preguntar();
    },3000)
  }
  
}

function saveGame(e){
  e.preventDefault();
  
  const nombre = document.querySelector('.gamer').value;
  const obj = {
      id: Date.now(),
      nombre,
      score
  }

  gamers = [...gamers, obj];

  localStorage.setItem('Gamer', JSON.stringify( gamers ));
  ui.imprimir('Ganaste', score, 'triunfo');

  setTimeout(()=>{
    score = 0;
    preguntar();
  },3000)
}


preguntar()


