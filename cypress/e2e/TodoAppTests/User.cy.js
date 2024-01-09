describe('Testy dla użytkownika przemek@example.com', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.get('input[type="email"]').type('przemek@example.com')
        cy.get('input[type="password"]').type('przemek123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/todo')
    })
    afterEach( ()=> {
        cy.visit('http://localhost:3000/api/auth/logout')
    })

    it('zaloguj się i nawiguj do /todo/new', () => {
        cy.visit('http://localhost:3000/todo/new')
        cy.get('input[name="title"]').type('Testowe zadanie')
        cy.get('input[name="content"]').type('To jest testowe zadanie')
        cy.get('input[name="done"]').check()
        cy.get('[data-testid^="category-checkbox-"]').each(($el) => {
            cy.wrap($el).check();
        });
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/todo')
    })

    it('zaloguj się, nawiguj do /todo/delete i usuń zadanie o największym ID', () => {
        cy.visit('http://localhost:3000/todo/delete')
        cy.get('input[name="title"]').type("Testowe zadanie")
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/todo')
    })



    it('Kalkulator - proste obliczenia', () => {
        cy.visit('http://localhost:3000/todo/calculator')
        cy.get('button[name="2"]').click()
        cy.get('button[name="+"]').click()
        cy.get('button[name="2"]').click()
        cy.get('button[name="equal"]').click()
        cy.get('input[type="text"]').should('have.value', '4')
        cy.url().should('include', '/calculator')
    })
    it('Kalkulator - czyszczenie wyniku AC', () => {
        cy.visit('http://localhost:3000/todo/calculator')
        cy.get('button[name="clear"]').click()
        cy.get('input[type="text"]').should('have.value', '')
        cy.url().should('include', '/calculator')
    })


    it('nawiguj do /admin i otrzymaj 403 FORBIDDEN ', () => {
        cy.visit('http://localhost:3000/admin')
        cy.intercept('GET', 'http://localhost:3000/admin', (req) => {
            req.reply((res) => {
                expect(res.statusCode).to.eq(403)
            })
        })
    })
})
