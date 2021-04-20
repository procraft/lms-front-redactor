import { redactorStartEdit } from '../../helpers/component'

describe('ContentEditor', () => {
  before(() => {
    cy.visit('/components/contenteditor')
  })

  describe('Load ContentEditor', () => {
    /**
     * Включаем редактирование компонента
     */
    redactorStartEdit()

    it('Focus editable content', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      /**
       * Почему-то так кликается не тот элемент. Видимо какая-то бага кипресса.
       * Хотя элемент получает тот же.
       */
      // cy.get('#component #test-content-id').click()

      cy.get('#component #test-content-id').then((node) => {
        node[0].click()
      })
    })

    it('Edit editable content', () => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)

      // TODO Сейчас на интер добавляются новые элементы, но курсор не смещается туда.
      cy.get('#component #test-content-id p')
        .click()
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
