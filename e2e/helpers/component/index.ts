/* eslint-disable cypress/no-unnecessary-waiting */
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

/**
 * Наводим мышь на родительский компонент
 */
export const focusParentComponent = () => {
  it('Focus on parent #component', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.get('#component').trigger('mouseover')
  })
}

/**
 * Выходим из режима редактирование
 */
export const redactorStopEdit = () => {
  it('Switch off edit mode', () => {
    cy.wait(1000)

    /**
     * Get Reset store button
     */

    cy.get<HTMLButtonElement>('#toggleEditMode').then((nodes) => {
      nodes[0].click()
    })
  })
}

/**
 * Окончание редактирование элемента
 */
export const closeElementEdit = () => {
  it('Close element edit', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)

    cy.get('button[role="close"]:first').trigger('click')
  })
}
