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
    //cy.wait(1000)
    cy.get('#component-toolbar #toggleEditMode').click()
  })

  /**
   * Наводим мышь на родительский компонент
   */
  it('Focus on parent #component', () => {
    //cy.wait(1000)
    cy.get('#component').trigger('mouseover')
  })

  /**
   * Наводим мышь на первый li списка с нажатым Alt и два раза кликаем
   */
  it('Focus and click+click on first li', () => {
    //cy.wait(1000)
    cy.get('#component li:first')
      .trigger('mouseover', { altKey: true })
      .trigger('click')
      .trigger('click')
  })

  /**
   * Ставим курсор на первый li списка и печатаем текст
   */
  it('Set cursor and type text on first li', () => {
    //cy.wait(1000)
    //Дописывает только в конец текста, попытка поставить курсок
    //в середину или в начало через click('left'), click('center'), click(30,0) не получается
    cy.get('#component li:first p').click().type(' qwqwqwqwqwqw')
  })

  /**
   * Выделяем "stories" в первом li списка, делаем жирным
   */
  it('Range "stories" in first li, make bold', () => {
    //cy.wait(1000)
    cy.get('#component li:first p')
      .trigger('mouseover')
      .then(($el) => {
        //console.log('$el', $el[0].childNodes[0])
        const el: any = $el[0].childNodes[0]
        const document = el.ownerDocument
        const range = document.createRange()
        range.setStart(el, 2)
        range.setEnd(el, 8)
        //console.log('range', range)
        const select = document.getSelection()
        select?.removeAllRanges()
        select?.addRange(range)
      })
    //cy.wait(1000)
    cy.get('button[name="bold"]').trigger('click')
  })

  /**
   * Выделяем "intents" в первом li списка, делаем курсивом
   */
  it('Range "intents" in first li, make italic', () => {
    //cy.wait(1000)
    cy.get('#component li:first p')
      .trigger('mouseover')
      .then(($el) => {
        console.log('$el', $el[0].childNodes[2])
        const el: any = $el[0].childNodes[2]
        const document = el.ownerDocument
        const range = document.createRange()
        range.setStart(el, 1)
        range.setEnd(el, 8)
        console.log('range', range)
        const select = document.getSelection()
        select?.removeAllRanges()
        select?.addRange(range)
      })
    //cy.wait(1000)
    cy.get('button[name="italic"]').trigger('click')
  })

  /**
   * Выделяем "rather" в первом li списка, делаем подчеркивание
   */
  it('Range "rather" in first li, make underline', () => {
    //cy.wait(1000)
    cy.get('#component li:first p')
      .trigger('mouseover')
      .then(($el) => {
        console.log('$el', $el[0].childNodes[4])
        const el: any = $el[0].childNodes[4]
        const document = el.ownerDocument
        const range = document.createRange()
        range.setStart(el, 1)
        range.setEnd(el, 7)
        console.log('range', range)
        const select = document.getSelection()
        select?.removeAllRanges()
        select?.addRange(range)
      })
    //cy.wait(1000)
    cy.get('button[name="underline"]').trigger('click')
  })

  /**
   * Выделяем "specific" в первом li списка, делаем подчеркивание и закрываем модальное окошко
   */
  it('Range "specific" in first li, make strike', () => {
    //cy.wait(1000)
    cy.get('#component li:first p')
      .trigger('mouseover')
      .then(($el) => {
        console.log('$el', $el[0].childNodes[6])
        const el: any = $el[0].childNodes[6]
        const document = el.ownerDocument
        const range = document.createRange()
        range.setStart(el, 6)
        range.setEnd(el, 14)
        console.log('range', range)
        const select = document.getSelection()
        select?.removeAllRanges()
        select?.addRange(range)
      })
    //cy.wait(1000)
    cy.get('button[name="strikeThrough"]').trigger('click')
    //cy.wait(1000)
    cy.get('button[role="close"]:last').trigger('click')
  })

  /**
   * Наводим мышь на второй li списка с нажатым Alt и два раза кликаем
   */
  it('Focus and click+click on second li', () => {
    cy.wait(1000)
    cy.get('#component ul:first > li:nth-child(2)')
      .trigger('mouseover', { altKey: true })
      .trigger('click')
      .trigger('click')
  })

  /**
   * Выделяем "publishes HTML" в первом li списка, ставим ссылку
   */
  it('Range "publishes HTML" in second li, make link', () => {
    cy.wait(1000)
    cy.get('#component ul:first > li:nth-child(2) p')
      .trigger('mouseover')
      .then(($el) => {
        console.log('$el', $el[0].childNodes[0])
        const el: any = $el[0].childNodes[0]
        const document = el.ownerDocument
        const range = document.createRange()
        range.setStart(el, 2)
        range.setEnd(el, 15)
        console.log('range', range)
        const select = document.getSelection()
        select?.removeAllRanges()
        select?.addRange(range)
      })
    cy.wait(1000)
    cy.get('button[name="createLink"]').trigger('click')
    cy.wait(1000)
    cy.get('input[type="text"]').trigger('click').type('http://ya.ru')

    //cy.wait(1000)
    //cy.get('button[role="close"]:last').trigger('click')
  })
})
