// Autocomplete using the below reference
/// <reference types="cypress" />  

class Inventory
{
    addItem()
    {
        const item = cy.get('[id=add-to-cart-sauce-labs-bike-light]')
        item.click()
        return this
    }

    confirmAddedItem()
    {
        const itemAdded = cy.get('[class=shopping_cart_badge]')
        itemAdded.contains(1)
        return this
    }
}
export default Inventory