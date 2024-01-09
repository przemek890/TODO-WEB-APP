describe('Testy dla użytkownika przemek@example.com', () => {
    let cookies = null;

    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/api/auth/login',
            headers: {
                Authorization: 'Basic ' + window.btoa('przemek@example.com' + ":" + 'przemek123')
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cookies = response.headers['set-cookie'];
        });
    });

    it('/api/user/me - dostań informacje z serwera o sobie i otrzymaj 200 OK', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:9000/api/user/me',
            headers: {
                Cookie: cookies
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('/api/todo - utworz todo i otrzymaj 201 OK', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/api/todo',
            headers: {
                Cookie: cookies
            },
            body: {
                title: 'Testttttttttt',
                content: 'ęśąćż',
                done: true,
                categories: [1, 2, 3]
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('/api/todo - wylistuj todo i otrzymaj 200 OK', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:9000/api/todo',
            headers: {
                Cookie: cookies
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('/api/todo/Testttttttttt - usun todo i otrzymaj 204 No content', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:9000/api/todo/Testttttttttt',
            headers: {
                Cookie: cookies
            },
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});