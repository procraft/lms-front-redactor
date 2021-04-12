/* eslint-disable no-console */

import { expect } from 'chai'

describe('ContentEditor', () => {
  before(() => {
    cy.visit('/components/contenteditor')
  })

  describe('Load ContentEditor', () => {
    it('Get component container', () => {
      cy.get<HTMLDivElement>('#component').then((node) => {
        const container = node[0]

        expect(container).not.null
      })
    })

    it('Switch inEditMode On', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);
      cy.get('#component-toolbar #toggleEditMode').click()
    })

    
    it('Focus editable content', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);

      /**
       * Почему-то так кликается не тот элемент. Видимо какая-то бага кипресса.
       * Хотя элемент получает тот же.
       */
      // cy.get('#component #test-content-id').click()

      cy.get('#component #test-content-id')
      .then(node => {
        node[0].click()
      })
    })
    
    it('Edit editable content', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);

      
      // cy.get('.view-line:last-child').click().type('// Some comment{enter}')
      cy.get('#component #test-content-id').click()
      .type('A{enter}', {
        delay: 100,
        timeout: 100,
        log: true,
      })
      .type('B{enter}', {
        delay: 100,
        timeout: 100,
        log: true,
      })
      .type('C{enter}', {
        delay: 100,
        timeout: 100,
        log: true,
      })
      .type('D{enter}', {
        delay: 100,
        timeout: 100,
        log: true,
      })
    })


  })
})

export default true
