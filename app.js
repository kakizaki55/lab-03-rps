import { randomPokemon } from './functions.js' 


const battleButton= document.getElementById('battle-button');

// const computerPokemon =[
//   {value:'charzard'},
//   {value:'blastoise'},
//   {value:'blastoise'}
// ]


console.log(randomPokemon())

battleButton.addEventListener('click', () => {
// console.log('clickyclask')
const selectedPokemon = document.querySelector('input[type=radio]:checked')
// console.log(selectedPokemon);
// console.log(randomPokemon())


});