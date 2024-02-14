class HomePage {

    acessoHome(title) {
        cy.visit("/")
        cy.title()
            .should('equal', `${title}`)
        cy.get('#wt-cli-accept-all-btn')
            .should('have.text', 'Aceitar')
            .click({ force: true })
        cy.contains('h1', 'Metodologia que aprova')
            .should('be.visible')
    }

    menuCursos(cursos) {
        cy.contains('li', 'Cursos')
            .click()
            .wait(3000)
            .contains('a', `${cursos}`)
            .click()
    }
}
export default new HomePage()
