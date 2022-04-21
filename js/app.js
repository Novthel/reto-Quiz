import {Question, UI} from '../models/Question.js';
import { cuestionario } from '../data/Cuestionario.js';

window.onload = ()=>{

  preguntar()
 
};

const ui = new UI();

function preguntar(){
    
    const i = Math.floor(Math.random() * 6);
    const question = new Question(cuestionario[i].pregunta, cuestionario[i].opciones)
 
    ui.mostrarPregunta(question)
    
}






