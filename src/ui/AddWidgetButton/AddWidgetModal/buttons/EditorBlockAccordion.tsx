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
    },
    components: [
      {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'style',
          text: `
          .accordion {
            font-family: Inter;
            padding: 10px;
          }
          .accordion * {
            margin: 0;
          }
          .spoiler:not(:last-child) {
            margin-bottom: 20px;
          }
          .spoiler-title {
            position: relative;
            font-size: 20px;
            border-bottom: 1px solid #000;
            cursor: pointer;
            padding: 10px 50px 10px 10px;
          }
          .spoiler-title.active::after {
            transform: translateY(-50%) rotate(90deg);
          }
          .spoiler-title::after {
            content: "";
            position: absolute;
            width: 24px;
            height: 24px;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            background-image: url("data:image/svg+xml,%3Csvg width='28px' height='28px' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z' fill='%230F0F0F'/%3E%3C/svg%3E");
            transition: all 0.3s ease 0s;
          }
          div[data-redactor--component="true"] .spoiler-content {
            display: inline-block;
          }
          .spoiler-content {
            display: none;
            font-size: 18px;
            padding: 10px;
            margin-top: 5px;
          }
          `,
        },
        components: [],
      },
      {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'script',
          text: `
          $(document).on("click", ".spoiler-title", function () {
            let $el = $(this)
            if (!$(".spoiler-title.active").is($el)) {
              $(".spoiler-title")
                .removeClass("active")
                .next(".spoiler-content")
                .slideUp(600)
            }
            $el.toggleClass("active").next(".spoiler-content").slideToggle(600)
          })
          `,
        },
        components: [],
      },
      {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'div',
          role: 'spoiler',
          class: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'p',
              role: 'spoiler-title',
              class: 'spoiler-title',
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
              tag: 'p',
              role: 'spoiler-content',
              class: 'spoiler-content',
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
          tag: 'div',
          role: 'spoiler',
          class: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'p',
              role: 'spoiler-title',
              class: 'spoiler-title',
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
              tag: 'p',
              role: 'spoiler-content',
              class: 'spoiler-content',
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
          tag: 'div',
          role: 'spoiler',
          class: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'p',
              role: 'spoiler-title',
              class: 'spoiler-title',
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
              tag: 'p',
              role: 'spoiler-content',
              class: 'spoiler-content',
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
          tag: 'div',
          role: 'spoiler',
          class: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'p',
              role: 'spoiler-title',
              class: 'spoiler-title',
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
              tag: 'p',
              role: 'spoiler-content',
              class: 'spoiler-content',
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
          tag: 'div',
          role: 'spoiler',
          class: 'spoiler',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'p',
              role: 'spoiler-title',
              class: 'spoiler-title',
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
              tag: 'p',
              role: 'spoiler-content',
              class: 'spoiler-content',
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
