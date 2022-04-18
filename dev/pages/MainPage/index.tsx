import React, { useMemo } from 'react'
import NextHead from 'next/head'
import { RedactorComponentObject } from '../../../src'
import { Page } from '../_App/interfaces'
import { DevRedactor } from '../../Redactor'

const ContentEditorDevPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Root section',
      component: 'Section',
      props: {},
      components: [
        {
          name: 'Head',
          component: 'Head',
          props: {
            // content: `<title id="title">wefwfwef</title>`
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'title',
                id: 'title',
                children: 'SDfsdfwefwef',
              },
              components: [],
            },
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'title',
                id: 'title2',
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  components: [],
                  props: {
                    text: 'title Content Editor',
                  },
                },
              ],
            },
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'script',
                id: 'script2',
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  components: [],
                  props: {
                    text: 'console.log("Script in head")',
                  },
                },
              ],
            },
          ],
        },
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
                              minHeight: 100,
                            },
                          },
                        },
                        {
                          name: 'Section',
                          component: 'Section',
                          props: {
                            style: {
                              display: 'grid',
                              gridTemplateColumns: 'repeat(2, 6fr)',
                              gridGap: '10px',
                            },
                          },
                          components: [
                            {
                              name: 'Section',
                              component: 'Section',
                              props: {},
                              components: [],
                            },
                            {
                              name: 'Section',
                              component: 'Section',
                              props: {},
                              components: [
                                {
                                  name: 'ContentEditor',
                                  component: 'ContentEditor',
                                  props: {},
                                  components: [
                                    {
                                      name: 'HtmlTag',
                                      component: 'HtmlTag',
                                      props: {
                                        tag: 'h1',
                                      },
                                      components: [
                                        {
                                          name: 'HtmlTag',
                                          component: 'HtmlTag',
                                          props: {
                                            text: 'Heading',
                                          },
                                          components: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: 'HtmlTag',
                                      component: 'HtmlTag',
                                      props: {
                                        tag: 'p',
                                      },
                                      components: [
                                        {
                                          name: 'HtmlTag',
                                          component: 'HtmlTag',
                                          props: {
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          },
                                          components: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
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

  return (
    <>
      <NextHead>
        <title>FrontRedactor all components</title>
      </NextHead>

      <DevRedactor initialObject={initialObject} redactorKey="test-mainpage" />
    </>
  )
}

export default ContentEditorDevPage
