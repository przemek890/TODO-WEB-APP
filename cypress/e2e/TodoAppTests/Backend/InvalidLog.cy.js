describe('Testy dla invalid@example.com', () => {
    it('Nieudana próba logowania i 403 FORBIDDEN', () => {
        const username = 'invalid@example.com';
        const password = 'invalid123';

        cy.intercept('POST', `http://localhost:9000/api/auth/login`, (req) => {
            expect(req.headers).to.have.property('Authorization', 'Basic ' + window.btoa(username + ":" + password));
            expect(req.headers).to.have.property('ContentType', 'application/json');
            req.reply((res) => {
                expect(res.statusCode).to.eq(403);
            });
        });
    });
});