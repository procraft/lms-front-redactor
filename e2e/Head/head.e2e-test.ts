/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'

describe('Start head test', () => {
  before(() => {
    cy.visit('/components/head')
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

        const openHtmlEditorButton = buttons?.querySelector<HTMLButtonElement>(
          '[role="openHtmlEditor"]'
        )

        console.log('openHtmlEditorButton', openHtmlEditorButton)

        expect(openHtmlEditorButton).not.null

        openHtmlEditorButton?.click()
      }
    })
  })

  it('Add Head component', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(10000)

    /**
     * Get monaco editor and add content
     */
    cy.window().then((win) => {
      expect(!!win).true

      const monaco = win.monaco

      expect(!!monaco).true

      if (monaco) {
        const model = monaco.editor.getModels()[0]

        model.setValue(
          model.getValue() +
            `
          <head>
            <title id="title">sdfffwefwefwef222222</title>
          </head>
        `
        )
      }
    })

    //Close monaco editor modal
    cy.wait(1000)

    /**
     * Save content and close modal
     */
    cy.get<HTMLButtonElement>('[role=monaco-modal] button[role=save]').then(
      (nodes) => {
        console.log('nodes', nodes)
        console.log('nodes[0]', nodes[0])

        nodes[0].click()
      }
    )

    cy.wait(500)
    cy.get('div[role="monaco-modal"] button[role="close"]').click({
      force: true,
    })
  })

  /**
   * Через 1с находим кнопку и кликаем опять
   */
  // it('Switch inEditMode Off', () => {
  //   cy.wait(1000)
  //   cy.get('#component-toolbar #toggleEditMode').click()
  // })
})

export default true
