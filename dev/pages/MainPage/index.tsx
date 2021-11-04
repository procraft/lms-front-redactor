import React, { useMemo } from 'react'
import Head from 'next/head'
import App, { RedactorComponent, RedactorComponentObject } from '../../../src'
import { Page } from '../_App/interfaces'
import { useRedactorStoreDev } from '../../hooks/useRedactorStoreDev'
import { getRedactorObjectComponentProps } from '../../../src/hooks/RedactorObjectRender/interfaces'
import { Section } from '../../../src/components/Section'
import { HtmlTag } from '../../../src/components/HtmlTag'
import { ContentEditor } from '../../../src/components/ContentEditor'

export const linksList = [
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE4',
    uri: '/webinar_restaurant',
    name: 'Вебинар "Как открыть прибыльное кафе или ресторан"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE5',
    uri: '/webinar_blog',
    name: 'Вебинар "Как создать тематический блог и монетизировать его за 2 месяца?"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjIw',
    uri: '/webinar_flowers',
    name: 'Вебинар «Магазины цветов: онлайн и оффлайн»',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEy',
    uri: '/about',
    name: 'Школа SOHO.MBA',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjIz',
    uri: '/signin',
    name: 'signin',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjIx',
    uri: '/soho_channel',
    name: 'soho_channel',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE0',
    uri: '/politika',
    name: 'Page /politika',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE1',
    uri: '/webinar_coffee',
    name: 'Вебинар "Как открыть прибыльную кофейню"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE2',
    uri: '/webinar_manicure_studio',
    name: 'Вебинар "Как открыть прибыльную маникюрную студию?"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjE3',
    uri: '/webinar_business',
    name: 'Вебинар "С чего не стоит начинать бизнес? Чужие ошибки, которые помогут вам запустить прибыльный бизнес"',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEz',
    uri: '/course/product',
    name: 'Курс "Продукт на миллион". Школа SOHO.MBA',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjk=',
    uri: '',
    name: 'Мой Дизайн',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEw',
    uri: '/',
    name: 'Программы SOHO.MBA',
  },
  {
    id: 'TGFuZGluZ1RlbXBsYXRlOjEx',
    uri: '/course/sm',
    name: 'Курс "Спроса много не бывает". Школа SOHO.MBA',
  },
]

const getRedactorObjectComponent = (props: getRedactorObjectComponentProps) => {
  const { object } = props

  if (!object) {
    return null
  }

  let Component: RedactorComponent | undefined

  switch (object.component) {
    case 'Section':
      Component = Section
      break

    case 'HtmlTag':
      Component = HtmlTag
      break

    case 'ContentEditor':
      Component = ContentEditor
      break
  }

  if (!Component) {
    console.error('Unknown component', object.component)
    return null
  }

  return Component

  // return <Component
  //   object={object}
  // />;
}

const ContentEditorDevPage: Page = (props) => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Root section',
      component: 'Section',
      props: {},
      components: [
        {
          name: 'ContentEditor',
          component: 'ContentEditor',
          props: {},
          components: [
            {
              name: 'ContentEditor',
              component: 'ContentEditor',
              props: {},
              components: [
                {
                  name: 'Section',
                  component: 'Section',
                  components: [
                    {
                      name: 'HtmlTag',
                      component: 'HtmlTag',
                      props: {
                        tag: 'div',
                        style: {
                          display: 'flex',
                          marginBottom: 20,
                        },
                      },
                      components: [
                        {
                          id: 'SDfsdf',
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          props: {
                            tag: 'a',
                            href: '/components/contenteditor',
                          },
                          components: [
                            {
                              name: 'HtmlTag',
                              component: 'HtmlTag',
                              components: [],
                              props: {
                                text: 'Content Editor',
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: 'HtmlTag',
                      component: 'HtmlTag',
                      props: {
                        tag: 'style',
                      },
                      components: [
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          components: [],
                          props: {
                            text: 'body {color: purple;}',
                          },
                        },
                      ],
                    },
                    {
                      name: 'HtmlTag',
                      component: 'HtmlTag',
                      props: {
                        tag: 'script',
                      },
                      components: [
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          components: [],
                          props: {
                            text: 'console.log("Test... Script console");',
                          },
                        },
                      ],
                    },
                    {
                      name: 'HtmlTag',
                      component: 'HtmlTag',
                      props: {
                        tag: 'link',
                        rel: 'stylesheet',
                        href: 'style.css',
                      },
                      components: [],
                    },
                    {
                      name: 'ContentEditor',
                      component: 'ContentEditor',
                      components: [
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          components: [
                            {
                              name: 'HtmlTag',
                              component: 'HtmlTag',
                              components: [],
                              props: {
                                text: 'Some text',
                              },
                            },
                          ],
                          props: {
                            tag: 'div',
                            style: {
                              // border: '1px solid green',
                              minHeight: 100,
                            },
                          },
                        },
                      ],
                      props: {},
                    },
                    {
                      name: 'HtmlTag',
                      component: 'HtmlTag',
                      components: [
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          components: [],
                          props: {
                            text: 'HtmlTag content',
                          },
                        },
                      ],
                      props: {
                        tag: 'div',
                        style: {
                          // border: '1px solid blue',
                          minHeight: 100,
                        },
                      },
                    },
                    {
                      name: 'ContentEditor',
                      component: 'ContentEditor',
                      components: [
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          components: [
                            {
                              name: 'HtmlTag',
                              component: 'HtmlTag',
                              components: [],
                              props: {
                                text: 'Some text',
                              },
                            },
                          ],
                          props: {
                            tag: 'div',
                            style: {
                              // border: '1px solid green',
                              minHeight: 100,
                            },
                          },
                        },
                      ],
                      props: {},
                    },
                    {
                      name: 'Section',
                      component: 'Section',
                      components: [
                        {
                          name: 'ContentEditor',
                          component: 'ContentEditor',
                          components: [
                            {
                              name: 'HtmlTag',
                              component: 'HtmlTag',
                              components: [
                                {
                                  name: 'HtmlTag',
                                  component: 'HtmlTag',
                                  components: [],
                                  props: {
                                    text: 'Some text',
                                  },
                                },
                              ],
                              props: {
                                tag: 'div',
                                style: {
                                  // border: '1px solid green',
                                  minHeight: 100,
                                },
                              },
                            },
                          ],
                          props: {},
                        },
                      ],
                      props: {},
                    },
                  ],
                  props: {},
                },
              ],
            },
          ],
        },
      ],
    }
  }, [])

  // const initialObject = useMemo<RedactorComponentObject>(() => {
  //   return {
  //     name: 'Root section',
  //     component: 'Section',
  //     props: {},
  //     components: [
  //       {
  //         name: 'Second Section',
  //         component: 'Section',
  //         components: [
  //           {
  //             name: 'Third section',
  //             component: 'Section',
  //             props: {},
  //             components: [],
  //           },
  //           {
  //             name: 'HtmlTag',
  //             component: 'HtmlTag',
  //             props: {
  //               tag: 'div',
  //               style: {
  //                 display: 'flex',
  //                 marginBottom: 20,
  //               },
  //             },
  //             components: [
  //               // {
  //               //   id: 'SDfsdf',
  //               //   name: 'HtmlTag',
  //               //   component: 'HtmlTag',
  //               //   props: {
  //               //     tag: 'a',
  //               //     href: '/components/contenteditor',
  //               //   },
  //               //   components: [
  //               //     {
  //               //       name: 'HtmlTag',
  //               //       component: 'HtmlTag',
  //               //       components: [],
  //               //       props: {
  //               //         text: 'Content Editor',
  //               //       },
  //               //     },
  //               //   ],
  //               // },
  //             ],
  //           },
  //           // {
  //           //   name: 'HtmlTag',
  //           //   component: 'HtmlTag',
  //           //   props: {
  //           //     tag: 'style',
  //           //   },
  //           //   components: [
  //           //     {
  //           //       name: 'HtmlTag',
  //           //       component: 'HtmlTag',
  //           //       components: [],
  //           //       props: {
  //           //         text: 'body {color: purple;}',
  //           //       },
  //           //     },
  //           //   ],
  //           // },
  //           // {
  //           //   name: 'HtmlTag',
  //           //   component: 'HtmlTag',
  //           //   props: {
  //           //     tag: 'script',
  //           //   },
  //           //   components: [
  //           //     {
  //           //       name: 'HtmlTag',
  //           //       component: 'HtmlTag',
  //           //       components: [],
  //           //       props: {
  //           //         text: 'console.log("Test... Script console");',
  //           //       },
  //           //     },
  //           //   ],
  //           // },
  //           // {
  //           //   name: 'HtmlTag',
  //           //   component: 'HtmlTag',
  //           //   props: {
  //           //     tag: 'link',
  //           //     rel: 'stylesheet',
  //           //     href: 'style.css',
  //           //   },
  //           //   components: [],
  //           // },
  //           // {
  //           //   name: 'HtmlTag',
  //           //   component: 'HtmlTag',
  //           //   components: [
  //           //     {
  //           //       name: 'HtmlTag',
  //           //       component: 'HtmlTag',
  //           //       components: [],
  //           //       props: {
  //           //         text: 'Some text',
  //           //       },
  //           //     },
  //           //   ],
  //           //   props: {
  //           //     tag: 'div',
  //           //     style: {
  //           //       // border: '1px solid green',
  //           //       minHeight: 100,
  //           //     },
  //           //   },
  //           // },
  //           // {
  //           //   name: 'HtmlTag',
  //           //   component: 'HtmlTag',
  //           //   components: [
  //           //     {
  //           //       name: 'HtmlTag',
  //           //       component: 'HtmlTag',
  //           //       components: [],
  //           //       props: {
  //           //         text: 'HtmlTag content',
  //           //       },
  //           //     },
  //           //   ],
  //           //   props: {
  //           //     tag: 'div',
  //           //     style: {
  //           //       // border: '1px solid blue',
  //           //       minHeight: 100,
  //           //     },
  //           //   },
  //           // },
  //           // {
  //           //   name: 'HtmlTag',
  //           //   component: 'HtmlTag',
  //           //   components: [
  //           //     {
  //           //       name: 'HtmlTag',
  //           //       component: 'HtmlTag',
  //           //       components: [],
  //           //       props: {
  //           //         text: 'Some text',
  //           //       },
  //           //     },
  //           //   ],
  //           //   props: {
  //           //     tag: 'div',
  //           //     style: {
  //           //       // border: '1px solid green',
  //           //       minHeight: 100,
  //           //     },
  //           //   },
  //           // },
  //           // {
  //           //   name: 'Section',
  //           //   component: 'Section',
  //           //   components: [
  //           //     {
  //           //       name: 'HtmlTag',
  //           //       component: 'HtmlTag',
  //           //       components: [
  //           //         {
  //           //           name: 'HtmlTag',
  //           //           component: 'HtmlTag',
  //           //           components: [],
  //           //           props: {
  //           //             text: 'Some text',
  //           //           },
  //           //         },
  //           //       ],
  //           //       props: {
  //           //         tag: 'div',
  //           //         style: {
  //           //           // border: '1px solid green',
  //           //           minHeight: 100,
  //           //         },
  //           //       },
  //           //     },
  //           //   ],
  //           //   props: {},
  //           // },
  //         ],
  //         props: {},
  //       },
  //     ],
  //   }
  // }, [])

  // const initialObject = useMemo<RedactorComponentObject>(() => {
  //   return {
  //     name: 'Root section',
  //     component: 'Section',
  //     props: {},
  //     components: [],
  //   }
  // }, [])

  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
    objectTemplates,
  } = useRedactorStoreDev({
    key: 'test-mainpage-object',
    initialObject,
  })

  return (
    <>
      <Head>
        <title>FrontRedactor all components</title>
      </Head>

      <div
        id="component-wrapper"
        style={{
          marginBottom: 20,
        }}
      >
        {toolbar}

        <div id="component">
          {object ? (
            <App
              {...props}
              inEditMode={inEditMode}
              object={object}
              updateObject={updateObject}
              getRedactorObjectComponent={getRedactorObjectComponent}
              objectTemplates={objectTemplates}
              linksList={linksList}
              showHiddenTags={true}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
