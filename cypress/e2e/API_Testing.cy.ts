describe('HTTP Requests - FakeStore API', () => {

    // 1️⃣ GET Request
    it("GET Call", () => {
        cy.request('GET', 'https://fakestoreapi.com/products')
            .its('status')
            .should('eq', 200)
    })

    // 2️⃣ POST Request
    it('POST Call', () => {
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/products',
            body: {
                title: "Test Product",
                price: 100,
                description: "This is a test product",
                image: "https://i.pravatar.cc",
                category: "electronics"
            }
        })
            .its('status')
            .should('eq', 201)
    })

    // 3️⃣ PUT Request (Update)
    it('PUT Call', () => {
        cy.request({
            method: 'PUT',
            url: 'https://fakestoreapi.com/products/1',
            body: {
                title: "Updated Product",
                price: 150
            }
        })
            .its('status')
            .should('be.oneOf', [200, 201])

    })

    // 4️⃣ DELETE Request
    it("DELETE Call", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://fakestoreapi.com/products/1'
        })
            .its('status')
            .should('eq', 200)
    })

})
