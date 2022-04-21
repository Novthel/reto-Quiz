

export function ramdon(score){

    let n;

    if(score === 0){
        n = 0
    }else if(score === 100){
        n = 1
    }else if(score === 200){
        n = 2
    }else if(score === 300){
        n = 3
    }else if(score === 400){
        n = 4
    }

    return n;
}

