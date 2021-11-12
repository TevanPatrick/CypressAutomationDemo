// Autocomplete using the below reference
/// <reference types="cypress" />  

class LoginPage
{
    visit()
    {
        cy.visit('https://www.saucedemo.com/')
    }

    fillUsername(value)
    {
        const username = cy.get('[id=user-name]')
        username.clear()
        username.type(value)
        return this
    }

    fillPassword(value)
    {
        const password = cy.get('[id=password]')
        password.clear()
        password.type(value)
        return this
    }

    login()
    {
        const button = cy.get('[id=login-button]')
        button.click()
    }
}
export default LoginPage