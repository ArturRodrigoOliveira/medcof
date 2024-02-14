import homePage from "../support/pages/home-page"
import cbcPage from "../support/pages/cbc-page"
import handsOnPage from "../support/pages/hands-on-page"
import data from "../fixtures/texts_validation.json"

describe('Página Medcof', () => {

  const info = data

  beforeEach('Acesso a Home', () => {
    homePage.acessoHome(info.titlePage.home)
  });

  context('Cursos', () => {
    it('CBC', () => {

      homePage
        .menuCursos(info.cursos.cbc.menu)

      cbcPage
        .validaCBC(
          info.titlePage.cbc,
          info.cursos.cbc.tituloForm,
          info.cursos.cbc.precoNormal,
          info.cursos.cbc.parcelado,
          info.cursos.cbc.aVista
        )
    })

    it('Hands On', () => {

      homePage
        .menuCursos(info.cursos.handsOn.menu)
      handsOnPage
        .validaHandsOn(
          info.titlePage.handsOn,
          info.cursos.handsOn.formTitle,
          info.cursos.handsOn.botaoReservar
        )
    });
  });
})