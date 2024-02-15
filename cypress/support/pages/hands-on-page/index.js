class HandsOnPage {

    validaHandsOn(title, formTitle, btnReserva) {
        const faker = require('faker-br');

        cy.title()
            .should('eql', title)
        cy.get('#checkout')
            .click()
        cy.contains('h2', 'Lista de Espera')
            .should('have.text', formTitle)
        cy.get('#form-field-name')
            .type(faker.name.findName())
        cy.get('#form-field-email')
            .type(faker.internet.email())
        cy.get('#form-field-whatsapp')
            .type('11976561234')
        cy.contains('span', `${btnReserva}`)
            .should('be.visible')
    }
}
export default new HandsOnPage()