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
      cy.get('#component-toolbar #toggleEditMode').click()
    })
  })
})

export default true
