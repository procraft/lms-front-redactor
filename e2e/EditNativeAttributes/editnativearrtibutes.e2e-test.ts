/* eslint-disable no-console */
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
      .trigger('click')
      .then((j) => {
        const node = j.get(0)
        if (node) {
          node.style.color = 'red'
        }

        //console.log('node', node?.style.color)
      })
  })

  /**
   * Наводим мышь на первый li списка с нажатым Alt, находим p, меняем стиль
   */
  it('Focus on first li, find p change style', () => {
    cy.wait(1000)

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(1)')
      .trigger('mouseover', { altKey: true, force: true })
      .trigger('click')
      .find('p')
      .then((j) => {
        const node = j.get(0)
        if (node) {
          node.style.color = 'blue'
        }

        //console.log('node', node?.style.color)
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

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(1)')
      .trigger('mouseover', { altKey: true, force: true })
      .trigger('click')
      .then((j) => {
        const node = j.get(0)
        expect(node?.style.color).to.equal('red')
      })
  })

  it('Focus on first li, finde p, check style', () => {
    cy.wait(1000)

    cy.get<HTMLLIElement>('#component ul:first > li:nth-child(1)')
      .trigger('mouseover', { altKey: true, force: true })
      .trigger('click')
      .then((j) => {
        const node = j.get(0)
        expect(node?.style.color).to.equal('blue')
      })
  })
})
