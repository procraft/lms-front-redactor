/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'
//import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'

describe('Start contenteditable test', () => {
  before(() => {
    cy.visit('/contenteditable')
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
   * Через 1с находим кнопку и кликаем
   */
  it('Switch inEditMode On', () => {
    cy.wait(1000)
    cy.get('#component-toolbar #toggleEditMode').click()
  })

  /**
   * Наводим мышь на родительский компонент
   */
  it('Focus on parent #component', () => {
    cy.wait(1000)
    cy.get('#component').trigger('mouseover')
  })

  /**
   * Наводим мышь на первый li списка с нажатым Alt и два раза кликаем
   */
  it('Focus and click+click on first li', () => {
    cy.wait(1000)
    cy.get('#component li:first')
      .trigger('mouseover', { altKey: true })
      .trigger('click')
      .trigger('click')
  })

  /**
   * Ставим курсор на первый li списка и печатаем текст
   */
  it('Set cursor and type text on first li', () => {
    cy.wait(1000)
    //Дописывает только в конец текста, попытка поставить курсок
    //в середину или в начало через click('left'), click('center'), click(30,0) не получается
    cy.get('#component li:first p').click().type(' qwqwqwqwqwqw')
  })

  /**
   * Выделяем "stories" в первом li списка
   */
  it('Range "stories" in first li', () => {
    cy.wait(1000)
    cy.get('#component li:first p')
      .trigger('mouseover')
      .then(($el) => {
        console.log('$el', $el[0].childNodes[0])
        const el: any = $el[0].childNodes[0]
        const range = document.createRange()
        //range.selectNode(el)
        //Не выделяет, хотя должен. Причину пока найти не могу.
        range.setStart(el, 3)
        range.setEnd(el, 8)
        console.log('range', range)
        const select = document.getSelection()
        console.log('select1', select)
        select?.removeAllRanges()
        select?.addRange(range)
        console.log('select2', select)
      })
    cy.wait(1000)
    cy.get('button[name="bold"]').trigger('click')
  })
})
