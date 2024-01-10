describe('Testy dla użytkownika admin@example.com', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.wait(200)
        cy.get('input[type="email"]').type('admin@example.com')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.wait(200)
        cy.url().should('include', '/todo')
        cy.visit('http://localhost:3000/admin')
        cy.wait(200)
    })
    afterEach( ()=> {
        cy.visit('http://localhost:3000/api/auth/logout')
    })

    it('powinien dodać użytkownika po wprowadzeniu danych i wysłaniu formularza', () => {
        cy.get('input[name="email1"]').type('test@example.com')
        cy.get('input[name="password1"]').type('test12345')
        cy.get('button[name="button1"]').click()
        cy.wait(200)
        cy.url().should('include', '/todo/new')
    })

    it('powinien usunąć użytkownika po wprowadzeniu danych i wysłaniu formularza', () => {
        cy.get('input[name="email2"]').type('test@example.com')
        cy.get('button[name="button2"]').click()
        cy.wait(200)
        cy.url().should('include', '/todo')
    })

    it('powinien dodać kategorię po wprowadzeniu danych i wysłaniu formularza', () => {
        cy.get('input[name="name3"]').type('Nowa kategoria')
        cy.get('button[name="button3"]').click()
        cy.wait(200)
        cy.url().should('include', '/todo/new')
    })

    it('powinien usunąć kategorię po wprowadzeniu danych i wysłaniu formularza', () => {
        cy.get('input[name="name4"]').type('Nowa kategoria')
        cy.get('button[name="button4"]').click()
        cy.wait(200)
        cy.url().should('include', '/todo')
    })

})
