import { randomPokemon, checkWhoWon } from './functions.js' 


const battleButton= document.getElementById('battle-button');

const gameText = document.getElementById('game-text');

const charmandor = document.getElementById('charmandor');
const squirtle = document.getElementById('squirtle')
const bulbasaur = document.getElementById('bulbasaur')


battleButton.addEventListener('click', () => {
// console.log('clickyclask')
const selectedPokemon = document.querySelector('input[type=radio]:checked')

gameText.textContent = checkWhoWon(selectedPokemon.value, randomPokemon().value)

        if(selectedPokemon.value === 'red'){
            charmandor.classList.remove('hidden')
            squirtle.classList.add('hidden')
            bulbasaur.classList.add('hidden')
        }else if(selectedPokemon.value === 'blue'){
            squirtle.classList.remove('hidden')
            bulbasaur.classList.add('hidden')
            charmandor.classList.add('hidden')
        }else if(selectedPokemon.value === 'green'){
            bulbasaur.classList.remove('hidden')
            squirtle.classList.add('hidden')
            charmandor.classList.add('hidden')
        };
// console.log(selectedPokemon.value);
// console.log(randomPokemon().value)
})