/* eslint-disable cypress/no-unnecessary-waiting */
import { expect } from 'chai'
import {
  redactorStartEdit,
  focusParentComponent,
  redactorStopEdit,
} from '../helpers/component'

describe('Start EditNativeAttributes test', () => {
  before(() => {
    cy.visit('/contenteditable')
  })

  /**
   * Включаем редактирование компонента
   */
  redactorStartEdit()

  /**
   * Наводим мышь на родительский компонент
   */
  focusParentComponent()

  /**
   * Наводим мышь на первый li списка с нажатым Alt, меняем стиль
   */
  it('Focus on first li, change style', () => {
    cy.wait(1000)

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(1)')
      .trigger('mouseover', { altKey: true, force: true })
      .wait(100)
      .trigger('click')
      .wait(100)
      .trigger('click')
      .wait(100)
      .then((j) => {
        const node = j.get(0)
        if (node) {
          node.style.color = 'red'
        }
      })
  })

  /**
   * Наводим мышь на первый li списка с нажатым Alt, находим p, меняем стиль
   */
  it('Focus on first li, find p change style', () => {
    cy.wait(1000)

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(2)')
      .trigger('mouseover', { altKey: true, force: true })
      .wait(100)
      .trigger('click')
      .wait(100)
      .trigger('click')
      .wait(100)
      .find('p')
      .then((j) => {
        const node = j.get(0)
        if (node) {
          node.style.color = 'blue'
        }
      })

    cy.wait(1000)
  })

  /**
   * Выходим из режима редактирование
   */
  redactorStopEdit()

  /**Проверка стилей li и li > p */

  it('Focus on first li, check style', () => {
    cy.wait(1000)

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(1)').then((j) => {
      const node = j.get(0)
      expect(node?.style.color).to.equal('red')
    })
  })

  it('Focus on first li, finde p, check style', () => {
    cy.wait(1000)

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(2) > p').then(
      (j) => {
        const node = j.get(0)
        expect(node?.style.color).to.equal('blue')
      }
    )
  })
})