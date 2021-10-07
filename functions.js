

export function randomPokemon() {
    const computerPokemon = [
        { name:'charzard', value:'red' },
        { name:'blastoise', value:'blue' },
        { name:'ivysaur', value:'green' }
    ];

    return computerPokemon[Math.floor(Math.random() * 3)];
    
}

export function checkWhoWon(player, computer){
    // console.log(player, computer);
    if (player === computer){
        // console.log('its a tie');
        return 'its a tie';
    } else if (player === 'red' && computer === 'blue'){
        // console.log('you lose');
        return 'you lose';
    } else if (player === 'red' && computer === 'green'){
        // console.log('you win');
        return 'you win';
    } else if (player === 'blue' && computer === 'green'){
        // console.log('you lose');
        return 'you lose';
    } else if (player === 'blue' && computer === 'red'){
        // console.log('you win');
        return 'you win';
    }
    else if (player === 'green' && computer === 'red'){
        // console.log('you lose');
        return 'you loose';
    } else if (player === 'green' && computer === 'blue'){
        // console.log('you win');
        return 'you win';
    }
    
}
    
  
