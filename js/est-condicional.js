let cor = color =>{
    if(color === 'branco'){
        return 'branco'
    }
    else if(color === 'amarelo'){
        return 'amarelo'
    }
    else{
        return 'cor indefinida'
    }
}

console.log(cor('verde'))