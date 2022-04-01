/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-console */ /* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import { expect } from 'chai'
import {
  CreateLandingTemplateMutation,
  CreateLandingTemplateMutationVariables,
} from '../../src/gql/createLandingTemplate'
import { LandingTemplateFrFragment } from '../../src/gql/landingTemplateFr'
import { TemplateQueryVariables } from '../../src/gql/template'
import { getReactFiber } from '../../src/helpers/ReactFiber'
import { RedactorHtmlElement } from '../../src/hooks/useRedactorComponentInit/interfaces'
import { closeElementEdit, redactorStartEdit } from '../helpers/component'
import { initMockServer } from '../mock'

declare global {
  namespace Cypress {
    interface ApplicationWindow {
      monaco?: typeof import('monaco-editor')
    }
  }
}

const editableTagSelector = '#component #test-content-id'

/**
 * Вставка дочернего компонента
 */
describe('Saveable Blocks', () => {
  before(() => {
    cy.visit('/saveable_blocks')
  })

  describe('Load ContentEditor', () => {
    /**
     * Включаем редактирование компонента
     */
    redactorStartEdit()

    it('Focus editable content', () => {
      cy.wait(1000)

      cy.get(editableTagSelector).then((node) => {
        node[0].click()
      })
    })

    it('Edit editable content', () => {
      cy.wait(1000)

      cy.get(editableTagSelector).click({
        force: true,
      })
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

    it('Add text block 1', () => {
      cy.wait(1000)

      /**
       * Get Modal
       */
      cy.get<HTMLDivElement>('[role=redactor--modal]').then((node) => {
        const modalNode = node[0]

        expect(modalNode).not.null

        /**
         * Buttons
         */
        const buttons = modalNode.querySelector<HTMLDivElement>(
          '[role=secondaryButtons]'
        )

        expect(buttons).not.null

        /**
         * Get insert button
         */
        const insertComponentButton =
          buttons?.querySelector<HTMLButtonElement>(
            'button[role=addHtmlEditor]'
          ) ?? null

        expect(insertComponentButton).not.null

        /**
         * Click insert button
         */
        insertComponentButton?.click()
      })
    })

    closeElementEdit()

    it('Get inserted block and save them', () => {
      /**
       * Get inserted component
       */
      cy.get<HTMLDivElement>(`${editableTagSelector} > :last-child`)
        // .then(nodes => {
        //   console.log('last nodes', nodes);
        // })
        .click({
          force: true,
        })
        .then((nodes) => {
          console.log('last nodes', nodes)

          expect(nodes.length).eq(1)

          const node = nodes[0]

          const fiberNode = getReactFiber(node)

          console.log('fiberNode', fiberNode)

          if (!fiberNode) {
            throw new Error('Can not get fiberNode')
          }

          /**
           * Сохраняем блок
           */
          const component = fiberNode.return

          if (!component) {
            throw new Error('Can not get component')
          }

          if (!component.pendingProps.object) {
            throw new Error('Can not get component.pendingProps.object')
          }

          if (!component.pendingProps.updateObject) {
            throw new Error('Can not get component.pendingProps.updateObject')
          }

          component.pendingProps.updateObject(component.pendingProps.object, {
            components: [
              ...component.pendingProps.object.components,
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  tag: 'h2',
                  'data-cy': 'test-header-1',
                },
                components: [
                  {
                    name: 'HtmlTag',
                    component: 'HtmlTag',
                    props: {
                      text: 'Test Heading',
                    },
                    components: [],
                  },
                ],
              },
            ],
          })
        })
    })

    it('Save node', () => {
      // const node = await getLastBlock()
      // .then(node => {
      //   console.log('fiber node', node);

      //   return cy.wait(1000)
      // });

      // console.log('fiber node 2', node);

      initMockServer()

      // const templates: LandingTemplateFrFragment[] = [
      //   {
      //     id: 'template-1',
      //     name: 'HtmlTag',
      //     component: 'HtmlTag',
      //     props: {
      //       tag: 'div',
      //       role: 'text-block-widget',
      //     },
      //     components: [
      //       {
      //         name: 'HtmlTag',
      //         component: 'HtmlTag',
      //         props: {
      //           tag: 'h1',
      //         },
      //         components: [
      //           {
      //             name: 'HtmlTag',
      //             component: 'HtmlTag',
      //             props: {
      //               text: 'Heading',
      //             },
      //             components: [],
      //           },
      //         ],
      //       },
      //       {
      //         name: 'HtmlTag',
      //         component: 'HtmlTag',
      //         props: {
      //           tag: 'p',
      //         },
      //         components: [
      //           {
      //             name: 'HtmlTag',
      //             component: 'HtmlTag',
      //             props: {
      //               text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      //             },
      //             components: [],
      //           },
      //         ],
      //       },
      //       {
      //         name: 'HtmlTag',
      //         component: 'HtmlTag',
      //         props: {
      //           tag: 'h2',
      //           'data-cy': 'test-header-1',
      //         },
      //         components: [
      //           {
      //             name: 'HtmlTag',
      //             component: 'HtmlTag',
      //             props: {
      //               text: 'Test Heading',
      //             },
      //             components: [],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ]

      const templates: LandingTemplateFrFragment[] = []

      cy.mockNetworkAdd({
        Mutation: () => ({
          createLandingTemplate: (
            _: any,
            args: CreateLandingTemplateMutationVariables
          ): CreateLandingTemplateMutation['createLandingTemplate'] => {
            const { components, props, ...other } = args.input.patch

            const template: LandingTemplateFrFragment = {
              ...other,
              id: 'template-1',
              components: JSON.parse(components),
              props: JSON.parse(props),
            }

            console.log('template', template)
            console.log('{...template}', { ...template })

            templates.push(template)

            return {
              landingTemplate: template,
            }
          },
        }),
        Query: () => ({
          template: (_: any, args: TemplateQueryVariables) => {
            console.log('Query template args', args)

            const template = templates.find((n) => n.id === args.where.id)

            console.log('Query template', template)

            return template || null
          },
        }),
      })

      cy.wait(1000)

      cy.get('button[role="save-block"').click()
    })

    it('Check props has id value', () => {
      cy.wait(1000)
      cy.get('button[role=showState]').click()
      cy.wait(10000)
    })

    // it('Check new component inserted', () => {
    //   /**
    //    * Get inserted component
    //    */
    //   cy.get<HTMLImageElement>('#component img').then((node) => {
    //     expect(node.length).be.eq(1)
    //   })
    // })

    // it('Check store updated', () => {
    //   /**
    //    * Get Reset store button
    //    */
    //   cy.get<HTMLButtonElement>(
    //     '#component-toolbar button[role=reset-store]'
    //   ).then((node) => {
    //     expect(node.length).be.eq(1)
    //   })
    // })

    // it('Check video component inserted', () => {
    //   /**
    //    * Get inserted component
    //    */
    //   cy.get<HTMLVideoElement>('#component video.test-video').then((nodes) => {
    //     expect(nodes.length).be.eq(1)

    //     const video = nodes[0]

    //     /**
    //      * Проверяем атрибуты
    //      */
    //     expect(video.getAttribute('autoplay')).be.eq('')
    //     expect(video.getAttribute('loop')).be.eq('')
    //     expect(video.getAttribute('muted')).be.eq('muted')
    //     expect(video.getAttribute('playsinline')).be.eq('')

    //     /**
    //      * Этот атрибут доступен только если не в режиме редактирования
    //      */
    //     expect(video.getAttribute('controls')).be.eq('')
    //   })
    // })

    /**
     * Выходим из режима редактирование
     */
    // redactorStopEdit()
  })
})

export default true
