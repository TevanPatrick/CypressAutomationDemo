// Autocomplete using the below reference
/// <reference types="cypress" />   

// Import Page Objects
import LoginPage from './PageObjects/LoginPage'
import InventoryPage from './PageObjects/InventoryPage'
import Cart from './PageObjects/CartPage'

describe('Test Suite for saucelab.com', function()
{
    it('Valid login test', function()
    {
        const login = new LoginPage()
        login.visit()
        login.fillUsername('standard_user')
        login.fillPassword('secret_sauce')
        login.login()
        cy.wait(1000)
        
        //Validate login
        cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')          
    })

    it('Invalid login test', function()
    {
        const login = new LoginPage()
        login.visit()
        login.fillUsername('locked_out_user')
        login.fillPassword('secret_sauce')
        login.login()
        cy.wait(1000)

        //Validate login
        cy.url().should('be.equal','https://www.saucedemo.com/')          
    })

    it('Add item to cart', function()
    {
        // Login actions
        const login = new LoginPage()
        login.visit()
        login.fillUsername('standard_user')
        login.fillPassword('secret_sauce')
        login.login()           
        cy.wait(1000)
        
        //Inventory actions
        const addItem = new InventoryPage()
        addItem.addItem()

        // Validate item added
        addItem.confirmAddedItem()           
        
        // Cart actions
        const cart = new Cart()

        // Validate item added to cart
        cart.confirmItem()     
    })

    it('Remove item from cart', function()
    {
        // Login actions
        const login = new LoginPage()
        login.visit()
        login.fillUsername('standard_user')
        login.fillPassword('secret_sauce')
        login.login()           
        cy.wait(1000)
        
        //Inventory actions
        const addItem = new InventoryPage()
        addItem.addItem()

        // Validate item added
        addItem.confirmAddedItem()         
        
        // Cart actions
        const cart = new Cart()
        cart.confirmItem()
        cart.removeItem()
        
        // Validate item removed
        cart.confirmRemovedItem()  
    })
}) 