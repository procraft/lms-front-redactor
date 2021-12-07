import React, { useMemo } from 'react'
import NextHead from 'next/head'
import App, { RedactorComponentObject } from '../../../src'
import { Page } from '../_App/interfaces'
import { useRedactorStoreDev } from '../../hooks/useRedactorStoreDev'
import { getRedactorObjectComponent } from '../MainPage'

export const ContentEditableDevPage: Page = (props) => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Root section',
      component: 'Section',
      props: {
        className: 'root',
      },
      components: [
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'div',
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'h2',
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  props: {
                    text: 'Theme and framework agnostic',
                  },
                  components: [],
                },
              ],
            },
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'ul',
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  props: {
                    tag: 'li',
                  },
                  components: [
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
                            text: '1 stores intents rather than specific markup',
                          },
                          components: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  props: {
                    tag: 'li',
                  },
                  components: [
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
                            text: '2 describes everything including page structure',
                          },
                          components: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  props: {
                    tag: 'li',
                  },
                  components: [
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
                            text: '3 publishes HTML, markdown, plain text, etc.',
                          },
                          components: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  props: {
                    tag: 'li',
                  },
                  components: [
                    {
                      name: 'HtmlTag',
                      component: 'HtmlTag',
                      props: {
                        tag: 'ul',
                      },
                      components: [
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          props: {
                            tag: 'li',
                          },
                          components: [
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
                                    text: 'stores intents rather than specific markup',
                                  },
                                  components: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          props: {
                            tag: 'li',
                          },
                          components: [
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
                                    text: 'describes everything including page structure',
                                  },
                                  components: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'HtmlTag',
                          component: 'HtmlTag',
                          props: {
                            tag: 'li',
                          },
                          components: [
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
                                    text: 'publishes HTML, markdown, plain text, etc.',
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
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  props: {
                    tag: 'li',
                  },
                  components: [
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
                            text: 'describes everything including page structure',
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
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'h2',
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                text: 'Theme and framework agnostic',
              },
              components: [],
            },
          ],
        },
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'h3',
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                text: 'Theme and framework agnostic',
              },
              components: [],
            },
          ],
        },
      ],
    }
  }, [])

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
      <NextHead>
        <title>ContentEditable</title>
      </NextHead>

      <div
        id="component-wrapper"
        style={{
          marginBottom: 20,
          marginTop: 15,
          paddingTop: 30,
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
              linksList={undefined}
              showHiddenTags={true}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
