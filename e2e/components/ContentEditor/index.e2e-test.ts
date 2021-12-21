/* eslint-disable cypress/no-unnecessary-waiting */
import {
  redactorStartEdit,
  focusParentComponent,
  redactorStopEdit,
  //closeElementEdit,
} from '../../helpers/component'

import { expect } from 'chai'

import { RedactorHtmlElement } from '../../../src/hooks/useRedactorComponentInit/interfaces'

describe('ContentEditor', () => {
  before(() => {
    cy.visit('/components/contenteditor')
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
   * Наводим мышь на CourseOrderDev, открываем html-редактор
   */
  it('Focus on CourseOrderDev, open html-redactor', () => {
    cy.wait(1000)

    cy.get<HTMLDivElement>('div[role="CourseOrderDev"]')
      .trigger('mouseover')
      .wait(100)
      .trigger('click')

    cy.wait(500)

    cy.get<HTMLDivElement>('button[role="openHtmlEditor"]')
      .trigger('mouseover')
      .wait(100)
      .trigger('click')

    cy.wait(1000)
    //cy.wait(15000) включить после редактирования

    cy.get('.monaco-editor-background')
      .contains('{&quot;className&quot;:&quot;test&quot;}')
      //.setCursorAfter('text')
      .click()
      .wait(100)
      .type(
        '{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}11111'
      )

    cy.get('button[role="save"]').click()
    cy.wait(500)
    cy.get('div[role="monaco-modal"] button[role="close"]').click({
      force: true,
    })

    //Проверяем наличие test11111
    cy.get<RedactorHtmlElement>('button[role="openHtmlEditor"]')
      .trigger('mouseover')
      .wait(100)
      .trigger('click')

    cy.wait(1000)

    cy.get('.monaco-editor-background')
      .contains('test11111')
      .then((nodes) => {
        //const node = $el[0]

        expect(nodes.length).eq(1)

        //console.log('node', node)
      })
    cy.wait(100)
    cy.get('div[role="monaco-modal"] button[role="close"]').click({
      force: true,
    })
  })

  /**
   * Выходим из режима редактирование
   */
  redactorStopEdit()
})

export default true
