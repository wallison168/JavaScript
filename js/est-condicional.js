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
let year = 15
let idade = year => {
    if (year > 0 ){
        
        if ( year >= 18){
            console.log("voce atingiu a maior idade")
        }
        else{
            console.log("voce e muito jovem ainda")
        }
    }
    else{
        console.log("idade indefinida, coloque uma idade valida")
    }
}
idade(19)