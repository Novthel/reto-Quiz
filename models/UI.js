
const selectQuestion = document.querySelector('#pregunta');
const opciones = document.querySelector('#opciones');
const nivel = document.querySelector('#categoria');
const salida = document.querySelector('#salir');

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

    winScreen(score, saveGame){

        const win = document.createElement('div');
        const gamer = document.createElement('input');
        const btnSubmit = document.createElement('button');
        const acumulado = document.createElement('p');

        win.classList.add('win');
        btnSubmit.onclick = (e)=> saveGame(e);
        gamer.classList.add('gamer');
        btnSubmit.classList.add('boton');
        btnSubmit.textContent = 'Guardar';

      
        acumulado.innerHTML = `Puntaje: ${ score } `;

        win.appendChild(gamer);
        win.appendChild(btnSubmit);
        win.appendChild(acumulado);

        this.limpiarCategoria()
        this.limpiarQuestion();
        this.limpiarOpciones();
        opciones.appendChild(win);


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

    imprimir(mensaje, score, tipo){

        const msj = document.querySelector('.mensaje');

        if(!msj){
            const divMensaje = document.createElement('div');
            const texto = document.createElement('p');
            const puntaje = document.createElement('p');

            if(tipo === 'error'){
                divMensaje.classList.add('error'); 
            }else{
                divMensaje.classList.add('triunfo');  
            };

            puntaje.innerHTML = `Puntaje: ${ score } `;
            texto.textContent = mensaje;
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


