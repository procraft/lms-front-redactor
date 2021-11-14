/* eslint-disable no-console */
import { expect } from 'chai'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'
import { redactorStartEdit } from '../helpers/component'

// const wrapper_selector = '[role="redactor-wrapper"]'

/**
 * Вставка дочернего компонента
 */
describe('InsertBlock action', () => {
  before(() => {
    cy.visit('/actions/insert-block')
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
          // const wrapper = node[0]?.parentNode?.redactorComponentWrapper
          const wrapper =
            (node[0]?.parentNode as RedactorHtmlElement | null)
              ?.redactorComponentWrapper ?? null

          console.log('redactorComponentWrapper', wrapper)
          // node.redactorComponentWrapper

          expect(wrapper).not.null

          if (wrapper) {
            /**
             * Click add block
             */

            const buttons = wrapper.querySelector<HTMLButtonElement>(
              '[role=redactor-wrapper-buttons]'
            )

            console.log('buttons', buttons)

            expect(buttons).not.null

            const addWidgetButton = buttons?.querySelector<HTMLButtonElement>(
              '[title="Вставить виджет"]'
            )

            console.log('addWidgetButton', addWidgetButton)

            expect(addWidgetButton).not.null

            addWidgetButton?.click()
          }
        }
      )
    })

    it('Add new component', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      /**
       * Get Modal
       */
      cy.get<HTMLDivElement>('[role=redactor--modal]').then((node) => {
        const modalNode = node[0]

        console.log('redactorModal', modalNode)

        expect(modalNode).not.null

        /**
         * Buttons
         */
        const buttons = modalNode.querySelector<HTMLDivElement>(
          '[role=secondaryButtons]'
        )

        console.log('redactorModal buttons', buttons)

        expect(buttons).not.null

        /**
         * Get insert button
         */
        const insertComponentButton =
          buttons?.querySelector<HTMLButtonElement>('button[role=addImage]') ??
          null

        console.log(
          'redactorModal insertComponentButton',
          insertComponentButton
        )

        expect(insertComponentButton).not.null

        /**
         * Click insert button
         */
        insertComponentButton?.click()

        /**
         * Click save button
         */
        // const saveButton =
        //   modalNode.querySelector<HTMLButtonElement>('button[role=save]')

        // expect(saveButton).not.null

        // saveButton?.click()
      })
    })

    it('Check new component inserted', () => {
      /**
       * Get inserted component
       */
      cy.get<HTMLImageElement>('#component img').then((node) => {
        expect(node.length).be.eq(1)
      })
    })

    it('Check store updated', () => {
      /**
       * Get Reset store button
       */
      cy.get<HTMLButtonElement>(
        '#component-toolbar button[role=reset-store]'
      ).then((node) => {
        expect(node.length).be.eq(1)
      })
    })
  })
})

export default true
