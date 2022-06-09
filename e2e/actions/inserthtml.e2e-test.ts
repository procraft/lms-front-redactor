/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'

describe('Start head test', () => {
  before(() => {
    cy.visit('/actions/insert-html')
  })

  /**
   * Загружаем компонент
   */
  it('Get component container', () => {
    cy.get<HTMLDivElement>('#component').then((node) => {
      const container = node[0]

      expect(container).not.null
    })
  })

  /**
   * Через 2с находим кнопку и кликаем
   */
  it('Switch inEditMode On', () => {
    cy.wait(2000)
    cy.get('#component-toolbar #toggleEditMode').click()
  })

  it('Focus editable content', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)

    /**
     * Почему-то так кликается не тот элемент. Видимо какая-то бага кипресса.
     * Хотя элемент получает тот же.
     */
    cy.get('#component #test-content-id').click()

    //cy.get('#component #test-content-id').then((node) => {
    //  node[0].click()
    //})
  })

  it("Get components's wrapper", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)

    cy.get<RedactorHtmlElement>('#component #test-content-id').then((node) => {
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
          '[title="Добавить виджет"]'
        )

        console.log('addWidgetButton', addWidgetButton)

        expect(addWidgetButton).not.null

        addWidgetButton?.click()
      }
    })
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
        buttons?.querySelector<HTMLButtonElement>('button:first-of-type') ??
        null

      console.log('redactorModal insertComponentButton', insertComponentButton)

      expect(insertComponentButton).not.null

      /**
       * Click insert button
       */
      insertComponentButton?.click()

      /**
       * Click save button
       */
    })
  })

  /**
   * Через 1с находим кнопку и кликаем опять
   */
  it('Switch inEditMode Off', () => {
    cy.wait(1000)
    cy.get('#component-toolbar #toggleEditMode').click()
  })
})

export default true
