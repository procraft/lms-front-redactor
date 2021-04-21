/* eslint-disable no-console */
import { expect } from 'chai'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'
import { redactorStartEdit } from '../helpers/component'

describe('RemoveBlock action', () => {
  before(() => {
    cy.visit('/actions/remove-block')
  })

  describe('Load ContentEditor', () => {
    /**
     * Включаем редактирование компонента
     */
    redactorStartEdit()

    it('Focus editable content', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      /**
       * Почему-то так кликается не тот элемент. Видимо какая-то бага кипресса.
       * Хотя элемент получает тот же.
       */
      // cy.get('#component #test-content-id').click()

      cy.get('#component #test-content-id').then((node) => {
        node[0].click()
      })
    })

    it('Edit editable content', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      cy.get('#component #test-content-id').click()
    })

    it("Get components's wrapper", () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      cy.get<RedactorHtmlElement>('#component #test-content-id').then(
        (node) => {
          console.log(
            'redactorComponentWrapper',
            node[0]?.redactorComponentWrapper
          )
          // node.redactorComponentWrapper

          expect(node[0]?.redactorComponentWrapper).not.null

          /**
           * Get remove button
           */

          const removeButton =
            node[0]?.redactorComponentWrapper?.querySelector<HTMLButtonElement>(
              '.buttons button[role=removeComponent]'
            ) ?? null

          expect(removeButton).not.null

          removeButton?.click()
        }
      )
    })

    it('Check that component has been removed', () => {
      cy.get<HTMLDivElement>('#component #test-content-id').should('not.exist')
    })
  })
})

export default true
