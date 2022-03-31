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

/**
 * Вставка дочернего компонента
 */
describe('Saveable Blocks', () => {
  before(() => {
    cy.visit('/saveable_blocks')
  })

  describe('Load ContentEditor', () => {
    const editableTagSelector = '#component #test-content-id'

    /**
     * Включаем редактирование компонента
     */
    redactorStartEdit()

    it('Focus editable content', () => {
      cy.wait(1000)

      cy.get(editableTagSelector).then((node) => {
        node[0].click()
      })
    })

    it('Edit editable content', () => {
      cy.wait(1000)

      cy.get(editableTagSelector).click({
        force: true,
      })
    })

    /**
     * Получаем технический враппер активного компонента
     */
    it("Get components's wrapper", () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(200)

      cy.get<RedactorHtmlElement>('[role=redactor-wrapper]').then((nodes) => {
        const wrapper = nodes[0]

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
      })
    })

    // it('Add new component', () => {

    //   cy.wait(1000)

    //   /**
    //    * Get Modal
    //    */
    //   cy.get<HTMLDivElement>('[role=redactor--modal]').then((node) => {
    //     const modalNode = node[0]

    //     console.log('redactorModal', modalNode)

    //     expect(modalNode).not.null

    //     /**
    //      * Buttons
    //      */
    //     const buttons = modalNode.querySelector<HTMLDivElement>(
    //       '[role=secondaryButtons]'
    //     )

    //     console.log('redactorModal buttons', buttons)

    //     expect(buttons).not.null

    //     /**
    //      * Get insert button
    //      */
    //     const insertComponentButton =
    //       buttons?.querySelector<HTMLButtonElement>('button[role=addImage]') ??
    //       null

    //     console.log(
    //       'redactorModal insertComponentButton',
    //       insertComponentButton
    //     )

    //     expect(insertComponentButton).not.null

    //     /**
    //      * Click insert button
    //      */
    //     insertComponentButton?.click()

    //     /**
    //      * Click save button
    //      */
    //     // const saveButton =
    //     //   modalNode.querySelector<HTMLButtonElement>('button[role=save]')

    //     // expect(saveButton).not.null

    //     // saveButton?.click()
    //   })
    // })

    // it('Check new component inserted', () => {
    //   /**
    //    * Get inserted component
    //    */
    //   cy.get<HTMLImageElement>('#component img').then((node) => {
    //     expect(node.length).be.eq(1)
    //   })
    // })

    // it('Check store updated', () => {
    //   /**
    //    * Get Reset store button
    //    */
    //   cy.get<HTMLButtonElement>(
    //     '#component-toolbar button[role=reset-store]'
    //   ).then((node) => {
    //     expect(node.length).be.eq(1)
    //   })
    // })

    // it('Check video component inserted', () => {
    //   /**
    //    * Get inserted component
    //    */
    //   cy.get<HTMLVideoElement>('#component video.test-video').then((nodes) => {
    //     expect(nodes.length).be.eq(1)

    //     const video = nodes[0]

    //     /**
    //      * Проверяем атрибуты
    //      */
    //     expect(video.getAttribute('autoplay')).be.eq('')
    //     expect(video.getAttribute('loop')).be.eq('')
    //     expect(video.getAttribute('muted')).be.eq('muted')
    //     expect(video.getAttribute('playsinline')).be.eq('')

    //     /**
    //      * Этот атрибут доступен только если не в режиме редактирования
    //      */
    //     expect(video.getAttribute('controls')).be.eq('')
    //   })
    // })

    /**
     * Выходим из режима редактирование
     */
    redactorStopEdit()
  })
})

export default true
