import { expect } from 'chai'
import { initMockServer } from '../mock'

describe('App', () => {
  beforeEach(() => {
    initMockServer({
      authed: false,
    })
  })

  before(() => {
    cy.visit('/')
  })

  after(() => {
    cy.mockNetworkReset()
  })

  describe('Load App', () => {
    it('Check content', () => {
      // cy.contains('#__next > h2', 'My awesome component')
      // cy.get('#__next > h2').then((node) => {
      //   expect(node).not.null
      // })
    })
  })

  describe('Test mock API', () => {
    it('Mock API', () => {
      cy.mockNetworkAdd({
        Query: () => ({
          me: () => {
            return {
              id: 'test-user-1',
              username: 'test-user',
              fullname: 'Test User',
            }
          },
        }),
      })

      return fetch('/api', {
        method: 'POST',
        body: JSON.stringify(
          {
            query: `
              query me {
                me {
                  id
                }
              }
            `,
            variables: {},
          },
          undefined,
          2
        ),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (r) => {
          const response = await r.json()
          return response
        })
        .then((result) => {
          expect(result.data).not.undefined
          expect(result.data?.me).not.null
        })
    })
  })
})

export default true
