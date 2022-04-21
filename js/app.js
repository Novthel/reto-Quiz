import { Question } from '../models/Question.js';
import { UI } from '../models/UI.js';
import { cuestionario } from '../data/Cuestionario.js';

let score = 0;

function main(){
    
    const i = Math.floor(Math.random() * 6);
    const question = new Question(cuestionario[i].pregunta, cuestionario[i].opciones)
    const ui = new UI();
    ui.mostrarPregunta(question, isCorrect)
   
    
}

function isCorrect(resp){

  console.log(resp)
  if(resp){
    score += 100
  }
  
}





main()


