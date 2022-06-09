/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'
import { redactorStartEdit, redactorStopEdit } from '../helpers/component'

declare global {
  namespace Cypress {
    interface ApplicationWindow {
      monaco?: typeof import('monaco-editor')
    }
  }
}

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
              '[title="Добавить виджет"]'
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

    /**
     * Video tests
     */
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

            const openHtmlEditorButton =
              buttons?.querySelector<HTMLButtonElement>(
                '[role="openHtmlEditor"]'
              )

            console.log('openHtmlEditorButton', openHtmlEditorButton)

            expect(openHtmlEditorButton).not.null

            openHtmlEditorButton?.click()
          }
        }
      )
    })

    it('Add video component', () => {
      // TODO Надо прописать проверку на загрузку редактора.
      // Если интернет медленный, не успевает загрузиться,
      // соответственно не работает.
      // Пока просто паузу побольше поставлю
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
            <video autOplay contRols loop="loop" muted="" claSS="test-video" style="width: 200; height:150;border:1px solid green;" playsinline="playsinline" data-wf-ignore="true" data-object-fit="cover"/>
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
    })

    /**
     * Close modal
     */
    // it('Close modal', () => {
    //   cy.get<HTMLButtonElement>('[role=monaco-modal] button[role=close]')
    //     .then(nodes => {
    //       nodes[0].click();
    //     })
    // })

    // it('Switch off edit mode', () => {
    //   /**
    //    * Get Reset store button
    //    */
    //   cy.get<HTMLButtonElement>('#toggleEditMode').then((nodes) => {
    //     nodes[0].click()
    //   })

    //   cy.wait(1000)
    // })

    /**
     * Выходим из режима редактирование
     */
    redactorStopEdit()

    it('Check video component inserted', () => {
      /**
       * Get inserted component
       */
      cy.get<HTMLVideoElement>('#component video.test-video').then((nodes) => {
        expect(nodes.length).be.eq(1)

        const video = nodes[0]

        /**
         * Проверяем атрибуты
         */
        expect(video.getAttribute('autoplay')).be.eq('')
        expect(video.getAttribute('loop')).be.eq('')
        expect(video.getAttribute('muted')).be.eq('muted')
        expect(video.getAttribute('playsinline')).be.eq('')

        /**
         * Этот атрибут доступен только если не в режиме редактирования
         */
        expect(video.getAttribute('controls')).be.eq('')
      })
    })
  })
})

export default true
