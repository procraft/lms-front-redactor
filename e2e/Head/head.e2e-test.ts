/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'

describe('Start head test', () => {
  before(() => {
    cy.visit('/head')
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

  /**
   * Через 1с находим кнопку и кликаем опять
   */
  it('Switch inEditMode Off', () => {
    cy.wait(1000)
    cy.get('#component-toolbar #toggleEditMode').click()
  })
})

export default true
