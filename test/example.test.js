import { checkWhoWon } from '../functions.js';


const test = QUnit.test;

test('charmador vs blastoise', (expect) => {

    const expected = 'you loose';
    const actual = checkWhoWon('red', 'blue');

    expect.equal(actual, expected);
});
test('charmador vs ivysour', (expect) => {

    const expected = 'you win';
    const actual = checkWhoWon('red', 'green');

    expect.equal(actual, expected);
});
test('charmador vs charzard', (expect) => {

    const expected ='its a tie';
    const actual = checkWhoWon('red', 'red');

    expect.equal(actual, expected);
});
