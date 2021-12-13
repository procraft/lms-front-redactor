/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'
import { getReactFiber } from '../../src/helpers/ReactFiber'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'
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

  // Сейчас при клике выделяется не li, а дочерний элемент p.
  // Вероятнее всего это происходит, потому что КиПресс смотрим по координатам
  // найденного элемента и вызывает событие клика с указанием этих координат.
  // См. метод getBoundingClientRect() https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect
  // А первый встречный для него элемент по этим координатам - дочерний элемент,
  // и получается, что клик прилетает не на тот элемент, и далее уже не проходит.
  // В целом это не бага, но надо учитывать этот момент и надо проверять инстанс
  // конечного выделенного объекта и если что, переходить на нужный
  // Чтобы такого не происходило, надо в вызов события наведения мышки
  // передавать force: true, чтобы отрабатывались все события и выделялся правильный элемент.
  // Обсуждение здесь: https://github.com/cypress-io/cypress/issues/6165

  /**
   * Наводим мышь на третий li списка с нажатым Alt и один раз кликаем
   */
  it('Focus and click+click on second li', () => {
    cy.wait(1000)

    cy.get('#component ul:first > li:nth-child(1)')
      .trigger('mouseover', { altKey: true, force: true })
      .trigger('click')
  })

  /**
   * Получаем технический враппер активного компонента
   */
  it("Get components's wrapper", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200)

    cy.get<RedactorHtmlElement>('[role=redactor-wrapper]').then((nodes) => {
      const wrapper = nodes[0]

      console.log('redactorComponentWrapper', wrapper)
      // node.redactorComponentWrapper

      expect(wrapper).not.null

      if (wrapper) {
        /**
         * Click add block
         */

        const buttons = wrapper.querySelector<HTMLButtonElement>(
          '[role=redactor-wrapper-buttons]'
        )

        console.log('buttons', buttons)

        expect(buttons).not.null

        const addWidgetButton = buttons?.querySelector<HTMLButtonElement>(
          '[title="Вставить виджет"]'
        )

        console.log('addWidgetButton', addWidgetButton)

        expect(addWidgetButton).not.null

        addWidgetButton?.click()
      }
    })
  })

  /**
   * Вставляем виджет заказа курса
   */
  it('Add Course component', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200)

    /**
     * Get Modal
     */
    cy.get<HTMLDivElement>('[role=redactor--modal]').then((node) => {
      const modalNode = node[0]

      console.log('redactorModal', modalNode)

      expect(modalNode).not.null

      /**
       * Buttons
       */
      const buttons = modalNode.querySelector<HTMLDivElement>(
        '[role=secondaryButtons]'
      )

      console.log('redactorModal buttons', buttons)

      expect(buttons).not.null

      /**
       * Get insert button
       */
      const insertComponentButton =
        buttons?.querySelector<HTMLButtonElement>('button[role=addCourse]') ??
        null

      console.log('redactorModal insertComponentButton', insertComponentButton)

      expect(insertComponentButton).not.null

      /**
       * Click insert button
       */
      insertComponentButton?.click()
    })
  })

  /**
   * Наводим мышь на первый li списка с нажатым Alt и два раза кликаем
   */
  it('Focus and click+click on first li', () => {
    //cy.wait(1000)
    cy.get('#component li:first')
      .trigger('mouseover', { altKey: true, force: true })
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
      .trigger('mouseover', { altKey: true, force: true })
      .trigger('click')
      .trigger('click')
  })

  /**
   * Выделяем "describes everything" во втором li списка, ставим ссылку и переходим по ней
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
        range.setEnd(el, 22)
        console.log('range', range)
        const select = document.getSelection()
        select?.removeAllRanges()
        select?.addRange(range)
      })
    cy.wait(1000)
    cy.get('button[name="createLink"]').trigger('click')
    cy.wait(1000)
    cy.get('div[role="modal-window"] input[type="text"]')
      .trigger('click')
      .type('http://ya.ru')
    cy.get('div[role="modal-window"]:last button:last').trigger('click')
    cy.wait(1000)

    //Ссылка кликаться не желает ЛИБО не происходит переход
    cy.get('#component ul:first > li:nth-child(2) p').find('a').click()
    /*
    cy.get('#component ul:first > li:nth-child(2) p a').then((node) => {
      node[0].click()
    })
    */
    /*
    cy.get('#component ul:first > li:nth-child(2) p a')
      .trigger('mouseover')
      .then(($el) => {
        console.log('$el', $el[0].childNodes[0])
      })
    */
  })

  /**
   * Выходим из режима редактирование
   */
  it('Switch off edit mode', () => {
    /**
     * Get Reset store button
     */
    cy.get<HTMLButtonElement>('#toggleEditMode').then((nodes) => {
      nodes[0].click()
    })

    cy.wait(100)
  })

  // TODO Сейчас, при выходе из режима редактирования, все еще остается враппер активного элемента.
  // Такого не должно быть. Это бага в самом редакторе.
  // Надо добавить здесь проверку на отсутствие враппера.
  // Пока эта проверка даст ошибку, но это нормально. Поправлю редактор, ошибка исчезнет.

  /**
   * Проверяем измененный контент
   */

  /**
   * Проверяем, что виджет курса все еще реакт-компонент, а не перебитый на HtmlTag
   */
  it('Check CourseOrderDev component', () => {
    cy.wait(100)

    cy.get<RedactorHtmlElement>('[role=CourseOrderDev]').then((nodes) => {
      console.log('CourseOrderDev nodes', nodes)

      expect(nodes.length).eq(1)

      const courseNode = nodes[0]

      console.log('CourseOrderDev courseNode', courseNode)

      const fiberNode = getReactFiber(courseNode)

      console.log('CourseOrderDev fiberNode', fiberNode)

      expect(fiberNode).not.null

      console.log(
        'CourseOrderDev fiberNode',
        fiberNode?.return?.return?.type?.name
      )

      expect(fiberNode?.return?.return?.type?.name).eq('CourseOrderDev')

      // if (fiberNode && fiberNode.return && fiberNode.return.return) {

      //   // console.log('CourseOrderDev fiberNode', fiberNode.return.return.type === CourseOrderDev);
      // }
    })
  })
})
