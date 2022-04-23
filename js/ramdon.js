

export function ramdon(score){

    let n;
    let categoria;

    if(score === 0){
        n = 0
        categoria = 1
    }else if(score === 100){
        n = 1
        categoria = 2
    }else if(score === 200){
        n = 2
        categoria = 3
    }else if(score === 300){
        n = 3
        categoria = 4
    }else if(score === 400){
        n = 4
        categoria = 5
    }

    return [n, categoria];
}

