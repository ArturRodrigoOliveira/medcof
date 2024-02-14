class CBCPage {

    validaCBC(title, tituloForm, precoNormal, parcelado, aVista) {
        cy.title()
            .should('eq', `${title}`)
        cy.contains('span', 'SEJA APROVADO NO CBC')
            .click()
        cy.contains('h2', 'UM CLIQUE')
            .should('have.text', tituloForm)
        cy.contains('h2', 'De')
            .should('have.text', precoNormal)
        cy.contains('h2', '12X')
            .should('have.text', parcelado)
        cy.contains('h2', 'à vista')
            .should('have.text', aVista)
        cy.contains('span', 'QUERO SER APROVADO')
            .should('be.visible')
    }
}
export default new CBCPage()