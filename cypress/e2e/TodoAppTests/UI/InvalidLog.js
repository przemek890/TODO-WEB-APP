describe('Testy dla użytkownika przemek@example.com', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    });

    it('Próba logowania z niepoprawnymi danymi', () => {
        cy.get('input[type="email"]').type('notexist@example.com');
        cy.get('input[type="password"]').type('notexist123');
        cy.get('button[type="submit"]').click();
        cy.url().should('not.include', '/todo');
    });
});
