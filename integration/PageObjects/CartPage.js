// Autocomplete using the below reference
/// <reference types="cypress" />  

import { isNull } from "lodash"

class Cart
{
    confirmItem()
    {
        const item = cy.get('[class=inventory_item_name]')
        item.contains('Sauce Labs Bike Light')
        return this
    }

    removeItem()
    {
        const removeItem = cy.get('[id=remove-sauce-labs-bike-light]')
        removeItem.click()
        return this
    }

    confirmRemovedItem()
    {
        cy.get('[id=remove-sauce-labs-bike-light]').should('not.exist')
        return this
    }
}
export default Cart