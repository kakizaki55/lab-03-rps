// const computerPokemon =[
//     {value:'charzard'},
//     {value:'blastoise'},
//     {value:'blastoise'}
//   ]

export function randomPokemon() {
    const computerPokemon =[
        {value:'charzard'},
        {value:'blastoise'},
        {value:'blastoise'}
      ]

    return computerPokemon[Math.floor(Math.random()*3)]
    
}