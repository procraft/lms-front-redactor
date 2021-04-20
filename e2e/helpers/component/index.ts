import { expect } from 'chai'

/**
 * Включаем редактирование компонента
 */
export const redactorStartEdit = () => {
  it('Get component container', () => {
    cy.get<HTMLDivElement>('#component').then((node) => {
      const container = node[0]

      expect(container).not.null
    })
  })

  it('Switch inEditMode On', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get('#component-toolbar #toggleEditMode').click()
  })
}
