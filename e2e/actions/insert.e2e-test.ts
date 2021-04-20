/* eslint-disable no-console */
import { expect } from 'chai'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'
import { redactorStartEdit } from '../helpers/component'

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

      cy.get<RedactorHtmlElement>('#component #test-content-id').then((node) => {

        console.log('redactorComponentWrapper', node[0]?.redactorComponentWrapper);
        // node.redactorComponentWrapper

        expect(node[0]?.redactorComponentWrapper).not.null;

        if (node[0]?.redactorComponentWrapper) {

          /**
           * Click add block
           */
          node[0]?.redactorComponentWrapper.querySelector<HTMLButtonElement>('.buttons button[role=addBlock]')?.click()
        }
      })
    })

    it("Add new component", () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      /**
       * Get Modal
       */
      cy.get<HTMLDivElement>('[role=redactor--modal]')
        .then((node) => {

          const modalNode = node[0]

          console.log('redactorModal', modalNode);

          expect(modalNode).not.null;


          /**
           * Buttons
           */
          const buttons = modalNode.querySelector<HTMLDivElement>('[role=secondaryButtons]')

          expect(buttons).not.null;

          /**
           * Get insert button
           */
          const insertComponentButton = buttons?.children[2]?.querySelector<HTMLButtonElement>('button') ?? null;

          expect(insertComponentButton).not.null;

          /**
           * Click insert button
           */
          insertComponentButton?.click()

          /**
           * Click save button
           */
          const saveButton = modalNode.querySelector<HTMLButtonElement>('button[role=save]');

          expect(saveButton).not.null;

          saveButton?.click();

        })
    })


    it("Check new component inserted", () => {
      /**
       * Get inserted component
       */
      cy.get<HTMLDivElement>('.test-html-tag')
        .then((node) => {

          expect(node.length).be.eq(1)
        })
    })

    it("Check store updated", () => {
      /**
       * Get Reset store button
       */
      cy.get<HTMLButtonElement>('#component-toolbar button[role=reset-store]')
        .then((node) => {

          expect(node.length).be.eq(1)
        })
    })

  })

})

export default true
