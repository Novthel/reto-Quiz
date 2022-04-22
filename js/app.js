import { Question } from '../models/Question.js';
import { UI } from '../models/UI.js';
import { cuestionario } from '../data/Cuestionario.js';
import { ramdon } from './funciones.js';

let score = 0;
const ui = new UI();

function preguntar(){
    
 const [ n, categoria ] = ramdon(score);

 if(n <= 4){
    const i = Math.floor(Math.random() * 5);
    const question = new Question(cuestionario[n][i].pregunta, cuestionario[n][i].opciones)
    ui.mostrarPregunta(question, isCorrect, categoria)  
  
 }
}


function isCorrect(resp){

  if(resp){
    score += 100
    console.log(score)

    ui.limpiarCategoria()
    ui.limpiarOpciones();
    ui.limpiarQuestion();
    preguntar()

  }else{
    ui.imprimir('Respuesta Incorrecta. Fin del juego', score);

    setTimeout(()=>{
      score = 0;
      preguntar();
    },3000)
  }
  
}


preguntar()


