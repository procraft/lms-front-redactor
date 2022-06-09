/* eslint-disable no-console */
/* eslint-disable cypress/no-unnecessary-waiting */
import { expect } from 'chai'
import { redactorStartEdit } from '../helpers/component'

/**
 * Получаем вставленный виджет текстового блока
 */
const getInsertedBlock = () => {
  return new Promise<HTMLDivElement>((resolve) => {
    cy.get<HTMLDivElement>('[role=text-block-widget]').then((nodes) => {
      expect(nodes.length).be.eq(1)

      resolve(nodes[0])
    })
  })
}

describe('Edit HTML content anywhere', () => {
  before(() => {
    cy.visit('/contenteditable')
  })

  /**
   * Загружаем компонент
   */
  it('Get component container', () => {
    cy.get<HTMLDivElement>('#component').then((nodes) => {
      const container = nodes[0]

      expect(container).not.null
    })
  })

  /**
   * Включаем редактирование компонента
   */
  redactorStartEdit()

  it('Выделяем корневой блок', () => {
    cy.wait(1000)

    cy.get('div.root').trigger('mouseover').wait(100).trigger('click')
  })

  it('Вставляем виджет текстового блока', () => {
    cy.wait(500)

    /**
     * Кликаем открытие модалки с кнопками вставки виджетов
     */
    cy.get('button[title="Добавить виджет"]')
      .trigger('mouseover')
      .wait(100)
      .trigger('click')

    /**
     * Находим модалку с кнопками вставки виджетов
     */
    cy.wait(1000)
    cy.get<HTMLDivElement>('[role=redactor--modal]').then((node) => {
      const modalNode = node[0]

      console.log('redactorModal', modalNode)

      expect(modalNode).not.null

      /**
       * Блок с кнопками
       */
      const buttons = modalNode.querySelector<HTMLDivElement>(
        '[role=secondaryButtons]'
      )

      console.log('redactorModal buttons', buttons)

      expect(buttons).not.null

      /**
       * Получаем кнопку вставки виджета текстового блока
       */
      const insertComponentButton =
        buttons?.querySelector<HTMLButtonElement>(
          'button[role=addHtmlEditor]'
        ) ?? null

      console.log('redactorModal insertComponentButton', insertComponentButton)

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

      it('Проверяем, что текстовый блок вставлен', () => {
        getInsertedBlock()
      })
    })
  })

  it('Редактируем произвольный элемент внутри текстового блока', () => {
    getInsertedBlock().then((widget) => {
      console.log('getInsertedBlock widget', widget)

      it('Находим внутри блока тег P', () => {
        const p = widget.querySelector('p')

        expect(p).not.null

        if (!p) {
          return
        }

        it('Кликаем этот тег', () => {
          p.click()
        })
      })
    })
  })
})
