import { randomPokemon, checkWhoWon } from './functions.js'; 


const battleButton = document.getElementById('battle-button');
const gameText = document.getElementById('game-text');

const charmandor = document.getElementById('charmandor');
const squirtle = document.getElementById('squirtle');
const bulbasaur = document.getElementById('bulbasaur');


const charizard = document.getElementById('charizard');
const blastoise = document.getElementById('blastoise'); 
const venusaur = document.getElementById('venusaur');


const redSound = document.getElementById('red-sound');
const blueSound = document.getElementById('blue-sound');
const greenSound = document.getElementById('green-sound');

const route1Audio = document.getElementById('route-1-audio');
const battleAudio = document.getElementById('battle-audio');

const winningCount = document.getElementById('winning-count');
const loseCount = document.getElementById('losing-count');
let wincount = 0;
let losscount = 0;

const resetButton = document.getElementById('reset-button');

function reduceVol(sound) {
    sound.volume = 0.2;
}
reduceVol(battleAudio);
reduceVol(route1Audio);
reduceVol(redSound);
reduceVol(blueSound);
reduceVol(greenSound);



battleButton.addEventListener('click', () => {

    const selectedPokemon = document.querySelector('input[type=radio]:checked');
    const npcPokemon = randomPokemon();

 

    battleAudio.play();
    route1Audio.pause();


    gameText.textContent = checkWhoWon(selectedPokemon.value, npcPokemon.value);

    

    if (selectedPokemon.value === 'red'){
        charmandor.classList.remove('hidden');
        squirtle.classList.add('hidden');
        bulbasaur.classList.add('hidden');
        redSound.play();
            
    } else if (selectedPokemon.value === 'blue'){
        squirtle.classList.remove('hidden');
        bulbasaur.classList.add('hidden');
        charmandor.classList.add('hidden');
        blueSound.play();

    } else if (selectedPokemon.value === 'green'){
        bulbasaur.classList.remove('hidden');
        squirtle.classList.add('hidden');
        charmandor.classList.add('hidden');
        greenSound.play();
    }
        
    if (gameText.textContent === 'you win'){
        wincount ++;
        winningCount.textContent = wincount;


    } else if (gameText.textContent === 'you lose'){
        losscount ++;
        loseCount.textContent = losscount;
    }


    if (npcPokemon.value === 'red'){
        charizard.classList.remove('hidden');
        blastoise.classList.add('hidden');
        venusaur.classList.add('hidden');
            
            
    } else if (npcPokemon.value === 'blue'){
        blastoise.classList.remove('hidden');
        venusaur.classList.add('hidden');
        charizard.classList.add('hidden');
            

    } else if (npcPokemon.value === 'green'){
        venusaur.classList.remove('hidden');
        blastoise.classList.add('hidden');
        charizard.classList.add('hidden');
            
    }
        



// console.log(selectedPokemon.value);
// console.log(randomPokemon().value)


});
resetButton.addEventListener('click', ()=>{
    wincount = 0;
    losscount = 0;

    gameText.textContent = 'You got away safely!';

    loseCount.textContent = losscount;
    winningCount.textContent = wincount;

    blastoise.classList.add('hidden');
    charizard.classList.add('hidden');
    venusaur.classList.add('hidden');

    squirtle.classList.add('hidden');
    charmandor.classList.add('hidden');
    bulbasaur.classList.add('hidden');

    route1Audio.play();
    battleAudio.pause();


});