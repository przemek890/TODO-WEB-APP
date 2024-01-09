describe('Testy dla użytkownika przemek@example.com', () => {
    it('zaloguj się i nawiguj do /todo/new', () => {

        cy.visit('http://localhost:3000/login')

        cy.get('input[type="email"]').type('przemek@example.com')
        cy.get('input[type="password"]').type('przemek123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/todo')

        cy.visit('http://localhost:3000/todo/new')

        cy.get('input[name="title"]').type('Testowe zadanie')
        cy.get('input[name="content"]').type('To jest testowe zadanie')
        cy.get('input[name="done"]').check()
        cy.get('[data-testid^="category-checkbox-"]').each(($el) => {
            cy.wrap($el).check();
        });
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/todo')

        cy.visit('http://localhost:3000/api/auth/logout')
    })

    it('zaloguj się, nawiguj do /todo/delete i usuń zadanie o największym ID', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('input[type="email"]').type('przemek@example.com')
        cy.get('input[type="password"]').type('przemek123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/todo')

        cy.visit('http://localhost:3000/todo/delete')
        cy.get('input[name="title"]').type("Testowe zadanie")
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/todo')

        cy.visit('http://localhost:3000/api/auth/logout')
    })


    it('nawiguj do /admin i otrzymaj 403 FORBIDDEN ', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('input[type="email"]').type('przemek@example.com')
        cy.get('input[type="password"]').type('przemek123')
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/todo')

        cy.visit('http://localhost:3000/admin')

        cy.intercept('GET', 'http://localhost:3000/admin', (req) => {
            req.reply((res) => {
                expect(res.statusCode).to.eq(403)
            })
        })
        cy.visit('http://localhost:3000/api/auth/logout')
    })
})
