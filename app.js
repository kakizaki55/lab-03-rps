import { randomPokemon, checkWhoWon } from './functions.js' 


const battleButton= document.getElementById('battle-button');


// function checkWhoWon(player, computer){
//   if(player.value === computer.value){
//     console.log('it a tie')
//   }
  
// }
  
  


// console.log(randomPokemon())

battleButton.addEventListener('click', () => {
// console.log('clickyclask')
const selectedPokemon = document.querySelector('input[type=radio]:checked')

// console.log(selectedPokemon.value);
// console.log(randomPokemon().value)

checkWhoWon(selectedPokemon.value, randomPokemon().value);




})