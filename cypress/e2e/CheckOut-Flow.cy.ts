/// <reference types="cypress" />
 describe('SauceDemo Checkout Flow', () => {
   beforeEach(() => {
     cy.visit('https://www.saucedemo.com/')

     //Login 
     cy.get('input[name="user-name"]').type('standard_user')
     cy.get('input[name="password"]').type('secret_sauce')
     cy.get('input[name="login-button"]').click()
     cy.wait(2000)
   })
   it('Adding Products', () => {
    cy.get('#item_4_title_link').click()
    cy.get('#add-to-cart').click()
    cy.wait(2000)
    cy.get('#back-to-products').click()
    cy.wait(1500)
    cy.get('#item_0_title_link').click()
    cy.get('button[data-test="add-to-cart"]').click()
    cy.get('#back-to-products').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    //going to cart
    cy.get('span.title').should('contain.text','Your Cart')
    cy.wait(2000)
    cy.get('button#checkout').click()

    //adding Information
    cy.get('span.title').should('contain.text','Checkout: Your Information')
    cy.get('input[placeholder="First Name"]').type('Magnus')
    .should('have.value','Magnus')
    cy.get('input[placeholder="Last Name"]').type('Carlsen')
    .should('have.value','Carlsen')
    cy.get('input[placeholder="Zip/Postal Code"]').type('500075')
    .should('have.value',500075)
    cy.get('input#continue').click()

    //verifying checkout overview
    cy.get('span.title').should('contain.text','Checkout: Overview')
    cy.get('button#finish').click()

    //confirming whether order is placed or not
    cy.get('h2.complete-header').should('contain','Thank you for your order!')
    cy.wait(2000)

    //moving back to product page
    cy.get('button#back-to-products').click()

    //Going Back to Login Page
    cy.get('button#react-burger-menu-btn').click()
    cy.get('div > nav > a#logout_sidebar_link').click()
    //Verifying the url 
    cy.url().should('eq','https://www.saucedemo.com/')
   })
 })