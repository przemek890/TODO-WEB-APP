describe('Login User Przemek', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')

        cy.get('input[type="email"]').type('przemek@example.com')
        cy.get('input[type="password"]').type('przemek123')
        cy.get('button[type="submit"]').click()

        // Intercept the login request
        cy.intercept('POST', 'http://localhost:9000/api/auth/login').as('login')

    })
    /////////////////////////////////////////////////////////////////////////////
    it('attempts to navigate to /admin and expects 403', () => {
        cy.visit('http://localhost:3000/admin')
        cy.intercept('GET', 'http://localhost:3000/admin', (req) => {
            req.reply((res) => {
                expect(res.statusCode).to.eq(403)
            })
        })
    })

})

