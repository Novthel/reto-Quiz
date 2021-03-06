import { Question } from '../models/Question.js';
import { UI } from '../models/UI.js';
import { cuestionario } from '../data/Cuestionario.js';
import { ramdon } from './ramdon.js';
import { saveGame } from './saveGame.js';


let score = 0;
const ui = new UI();

ui.drawHeader(endGame);

function preguntar(){
    
 const [ n, categoria ] = ramdon(score);

 if(n <= 4){
    const i = Math.floor(Math.random() * 5);
    const question = new Question(cuestionario[n][i].pregunta, cuestionario[n][i].opciones)
    ui.mostrarPregunta(question, isCorrect, categoria)  
  
 }else{
  ui.winScreen(score, winGame);
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


function winGame(){

  saveGame(score)
  ui.imprimir('Ganaste', score, 'triunfo');
  setTimeout(()=>{
    score = 0;
    preguntar();
  },3000)
}


function endGame(){

  saveGame(score)
  setTimeout(()=>{
    ui.limpiarOpciones();
    score = 0;
    preguntar();
  },3000)
}


preguntar()



