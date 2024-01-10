
describe('Testy dla użytkownika admin@example.com', () => {
    let cookies = null;

    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/api/auth/login',
            headers: {
                Authorization: 'Basic ' + window.btoa('admin@example.com' + ":" + 'admin123')
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cookies = response.headers['set-cookie'];
        });
    });

    it('/api/user - utwórz nowego użytkownika i otrzymaj 201 CREATED', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/api/user',
            headers: {
                Cookie: cookies
            },
            body: {
                email: 'test@example.com',
                password: 'test12345'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.email).to.eq('test@example.com');
        });
    });


    it('/api/user/test@example.com - usuń użytkownika i otrzymaj 204 No content', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:9000/api/user/test@example.com',
            headers: {
                Cookie: cookies
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });

    it('/api/cat - utworz kategorie i otrzymaj 201 CREATED', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/api/cat',
            headers: {
                Cookie: cookies
            },
            body: {
                name: 'test_category'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('/api/cat - dostań kategorie i otrzymaj 200 OK', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:9000/api/cat',
            headers: {
                Cookie: cookies
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('/api/cat/urgent - usun kategorie i otrzymaj 204 No content', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:9000/api/cat/test_category',
            headers: {
                Cookie: cookies
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });

    it('/api/inc - Utworz incydent i otrzymaj 200 OK', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/api/inc',
            headers: {
                Cookie: cookies
            },
            body: {
                email: 'test@example.com',
                description: 'test'
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
