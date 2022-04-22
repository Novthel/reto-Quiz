
const selectQuestion = document.querySelector('#pregunta');
const opciones = document.querySelector('#opciones');
const nivel = document.querySelector('#categoria');

export class UI{

    mostrarPregunta(question, isCorrect, categoria){
        
        const cat = document.createElement('h1');
        cat.textContent = `Preguntas de nivel ${ categoria } `;
        nivel.appendChild(cat);
        
        const parrafo = document.createElement('h2');
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

    limpiarOpciones(){
        while(opciones.firstChild){
            opciones.removeChild(opciones.firstChild)
        }
    }

    limpiarQuestion(){
        while(selectQuestion.firstChild){
            selectQuestion.removeChild(selectQuestion.firstChild)
        }
    }

    limpiarCategoria(){
        while(nivel.firstChild){
            nivel.removeChild(nivel.firstChild)
        }
    }

    imprimir(mensaje, score){

        const msj = document.querySelector('.mensaje');

        if(!msj){
            const divMensaje = document.createElement('div');
            const texto = document.createElement('p');
            const puntaje = document.createElement('p');
            puntaje.innerHTML = `Puntaje: ${ score } `;
            texto.textContent = mensaje;
            divMensaje.classList.add('mensaje');
            divMensaje.appendChild(texto);
            divMensaje.appendChild(puntaje);
            
            this.limpiarCategoria()
            this.limpiarQuestion();
            this.limpiarOpciones();
            opciones.appendChild(divMensaje);
    
            setTimeout(()=>{

                divMensaje.remove()
                this.limpiarOpciones();
            },3000) 
    
        }
    }
}


