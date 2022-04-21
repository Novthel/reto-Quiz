import { Question } from '../models/Question.js';
import { UI } from '../models/UI.js';
import { cuestionario } from '../data/Cuestionario.js';
import { ramdon } from './funciones.js';

let score = 0;
let n;
const ui = new UI();

function preguntar(){
    
  n = ramdon(score);
  while(n <= 4){
    const i = Math.floor(Math.random() * 5);
    const question = new Question(cuestionario[n][i].pregunta, cuestionario[n][i].opciones)
    ui.mostrarPregunta(question, isCorrect)  
  }
 
}

function isCorrect(resp){

  console.log(resp)
  if(resp){
    score += 100
    n++

    ui.limpiarOpciones();
    ui.limpiarQuestion();
    preguntar()
  }
  console.log(n)
  console.log(score)
  
}


preguntar()


