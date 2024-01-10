describe('Testy dla użytkownika przemek@example.com', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.wait(500)
    });

    it('Próba logowania z niepoprawnymi danymi', () => {
        cy.get('input[type="email"]').type('notexist@example.com');
        cy.get('input[type="password"]').type('notexist123');
        cy.get('button[type="submit"]').click();
        cy.wait(500)
        cy.url().should('not.include', '/todo');
    });
});
