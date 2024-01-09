describe('Błędne dane podczas logowania', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Wprowadz nieistniejace dane i oczekuj 403 FORBIDDEN', () => {
        cy.get('input[type="email"]').clear().type('notexist@example.com')
        cy.get('input[type="password"]').clear().type('notexist123')
        cy.get('button[type="submit"]').click()

        cy.intercept('POST', 'http://localhost:9000/api/auth/login', (req) => {
            req.reply((res) => {
                expect(res.statusCode).to.eq(403)
            })
        })
    })
})
