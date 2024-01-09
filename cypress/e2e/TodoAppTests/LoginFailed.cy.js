describe('Login Failed', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('attempts to log in with non-existent user and expects 403', () => {
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
