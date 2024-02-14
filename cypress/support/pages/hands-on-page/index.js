const SuperFakerBrasil = require('faker-brasil');

class HandsOnPage {

    validaHandsOn(title, formTitle, btnReserva) {
        const faker = new SuperFakerBrasil();

        cy.title()
            .should('eql', title)
        cy.get('#checkout')
            .click()
        cy.contains('h2', 'Lista de Espera')
            .should('have.text', formTitle)
        cy.get('#form-field-name')
            .type(faker.fullName())
        cy.get('#form-field-email')
            .type(faker.email())
        cy.get('#form-field-whatsapp')
            .type(faker.cellPhone())
        cy.contains('span', `${btnReserva}`)
            .should('be.visible')
    }
}
export default new HandsOnPage()