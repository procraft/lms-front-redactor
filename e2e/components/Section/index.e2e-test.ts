describe('Section', () => {
  before(() => {
    cy.visit('/components/section')
  })

  describe('Load Section', () => {
    it('Check content', () => {
      cy.contains('#component', 'Section')
    })
  })
})

export default true
