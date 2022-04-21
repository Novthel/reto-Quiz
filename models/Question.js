import { cuestionario } from '../data/Cuestionario.js';


const selectQuestion = document.querySelector('#pregunta');

export class Question{
    constructor(pregunta, opciones){
        this.pregunta = pregunta;
        this.opciones = opciones;
    }

}


export class UI{

    mostrarPregunta(question){
        console.log(question.pregunta)
        
        const parrafo = document.createElement('h1');
        parrafo.innerText= question.pregunta;
        selectQuestion.appendChild(parrafo);
    }
}