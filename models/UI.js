
const selectQuestion = document.querySelector('#pregunta');
const opciones = document.querySelector('#opciones');


export class UI{

    mostrarPregunta(question, isCorrect){
        
        const parrafo = document.createElement('h1');
        parrafo.innerText= question.pregunta;
        selectQuestion.appendChild(parrafo);


        question.opciones.map((op)=>{ 
            const opcionBtn = document.createElement('button');
            opcionBtn.innerText = op.respuesta;
            opcionBtn.classList.add('btn');
            opcionBtn.onclick = ()=> isCorrect(op.correcto);
            opciones.appendChild(opcionBtn);
        })     
    }
}


