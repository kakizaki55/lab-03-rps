
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('easy test', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});