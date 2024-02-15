import React, { useMemo } from 'react'
import { CustomBlockButton } from './CustomBlock'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'
import { IconAccordion } from './buttonIcons'

export const EditorBlockAccordionButton = (
  props: AddWidgetButtonButtonProps
) => {
  const title = useMemo(
    () => (
      <>
        <IconAccordion /> Спойлеры
      </>
    ),
    []
  )

  const component: RedactorComponentObject = {
    name: 'HtmlTag',
    component: 'HtmlTag',
    props: {
      tag: 'div',
      role: 'accordion',
      class: 'accordion',
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '10px',
      },
    },
    components: [
      {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'details',
          role: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'summary',
              role: 'spoiler-title',
              style: {
                maxWidth: 'max-content',
                fontFamily: 'Inter',
                fontSize: '18px',
                borderBottom: '1px solid #000',
                cursor: 'pointer',
                padding: '8px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Заголовок 1',
                },
                components: [],
              },
            ],
          },
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'span',
              role: 'spoiler-content',
              style: {
                fontFamily: 'Inter',
                display: 'inline-block',
                padding: '10px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Скрывающийся текст 1',
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
          tag: 'details',
          role: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'summary',
              role: 'spoiler-title',
              style: {
                maxWidth: 'max-content',
                fontFamily: 'Inter',
                fontSize: '18px',
                borderBottom: '1px solid #000',
                cursor: 'pointer',
                padding: '8px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Заголовок 2',
                },
                components: [],
              },
            ],
          },
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'span',
              role: 'spoiler-content',
              style: {
                fontFamily: 'Inter',
                display: 'inline-block',
                padding: '10px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Скрывающийся текст 2',
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
          tag: 'details',
          role: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'summary',
              role: 'spoiler-title',
              style: {
                maxWidth: 'max-content',
                fontFamily: 'Inter',
                fontSize: '18px',
                borderBottom: '1px solid #000',
                cursor: 'pointer',
                padding: '8px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Заголовок 3',
                },
                components: [],
              },
            ],
          },
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'span',
              role: 'spoiler-content',
              style: {
                fontFamily: 'Inter',
                display: 'inline-block',
                padding: '10px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Скрывающийся текст 3',
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
          tag: 'details',
          role: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'summary',
              role: 'spoiler-title',
              style: {
                maxWidth: 'max-content',
                fontFamily: 'Inter',
                fontSize: '18px',
                borderBottom: '1px solid #000',
                cursor: 'pointer',
                padding: '8px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Заголовок 4',
                },
                components: [],
              },
            ],
          },
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'span',
              role: 'spoiler-content',
              style: {
                fontFamily: 'Inter',
                display: 'inline-block',
                padding: '10px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Скрывающийся текст 4',
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
          tag: 'details',
          role: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'summary',
              role: 'spoiler-title',
              style: {
                maxWidth: 'max-content',
                fontFamily: 'Inter',
                fontSize: '18px',
                borderBottom: '1px solid #000',
                cursor: 'pointer',
                padding: '8px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Заголовок 5',
                },
                components: [],
              },
            ],
          },
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'span',
              role: 'spoiler-content',
              style: {
                fontFamily: 'Inter',
                display: 'inline-block',
                padding: '10px',
              },
            },
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                props: {
                  text: 'Скрывающийся текст 5',
                },
                components: [],
              },
            ],
          },
        ],
      },
    ],
  }

  return <CustomBlockButton {...props} title={title} component={component} />
}
