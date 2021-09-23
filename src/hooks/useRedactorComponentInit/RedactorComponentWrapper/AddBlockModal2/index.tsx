import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { Section } from '../../../../components/Section'
import { AddBlockModal2Props } from './interfaces'
import {
  AddBlockModal2BlockStyled,
  AddBlockModal2ContentStyled,
  AddBlockModal2Styled,
} from './styles'

/**
 * Модалка для добавления нового блока
 */
const AddBlockModal2: React.FC<AddBlockModal2Props> = ({ closeHandler }) => {
  const blocks = useMemo<JSX.Element[]>(() => {
    const blocks: JSX.Element[] = []

    blocks.push(
      <AddBlockModal2BlockStyled key="block-1">
        <Section
          inEditMode={false}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          wrapperContainer={undefined}
          object={{
            name: 'Section',
            component: 'Section',
            props: {},
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                components: [
                  // {
                  //   name: 'HtmlTag',
                  //   component: 'HtmlTag',
                  //   components: [],
                  //   props: {
                  //     text: 'Some text',
                  //   },
                  // },
                ],
                props: {
                  tag: 'div',
                  style: {
                    // border: '1px solid green',
                    // minHeight: 100,
                  },
                },
              },
            ],
          }}
        />
      </AddBlockModal2BlockStyled>
    )

    blocks.push(
      <AddBlockModal2BlockStyled key="block-2">
        <Section
          inEditMode={false}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          wrapperContainer={undefined}
          object={{
            name: 'Section',
            component: 'Section',
            props: {},
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                components: [
                  // {
                  //   name: 'HtmlTag',
                  //   component: 'HtmlTag',
                  //   components: [],
                  //   props: {
                  //     text: 'Some text',
                  //   },
                  // },
                ],
                props: {
                  tag: 'div',
                  style: {
                    // border: '1px solid green',
                    // minHeight: 100,
                  },
                },
              },
            ],
          }}
        />
      </AddBlockModal2BlockStyled>
    )

    blocks.push(
      <AddBlockModal2BlockStyled key="block-3">
        <Section
          inEditMode={false}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          wrapperContainer={undefined}
          object={{
            name: 'Section',
            component: 'Section',
            props: {},
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                components: [
                  // {
                  //   name: 'HtmlTag',
                  //   component: 'HtmlTag',
                  //   components: [],
                  //   props: {
                  //     text: 'Some text',
                  //   },
                  // },
                ],
                props: {
                  tag: 'div',
                  style: {
                    // border: '1px solid green',
                    // minHeight: 100,
                  },
                },
              },
            ],
          }}
        />
      </AddBlockModal2BlockStyled>
    )

    blocks.push(
      <AddBlockModal2BlockStyled key="block-4">
        <Section
          inEditMode={false}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          wrapperContainer={undefined}
          object={{
            name: 'Section',
            component: 'Section',
            props: {},
            components: [
              {
                name: 'HtmlTag',
                component: 'HtmlTag',
                components: [
                  // {
                  //   name: 'HtmlTag',
                  //   component: 'HtmlTag',
                  //   components: [],
                  //   props: {
                  //     text: 'Some text',
                  //   },
                  // },
                ],
                props: {
                  tag: 'div',
                  style: {
                    // border: '1px solid green',
                    // minHeight: 100,
                  },
                },
              },
            ],
          }}
        />
      </AddBlockModal2BlockStyled>
    )

    return blocks
  }, [])

  return useMemo(() => {
    return ReactDOM.createPortal(
      <AddBlockModal2Styled
        title="Добавить блок"
        preventClickEvent={true}
        closeHandler={closeHandler}
        modal={true}
      >
        <AddBlockModal2ContentStyled>{blocks}</AddBlockModal2ContentStyled>
      </AddBlockModal2Styled>,
      document.body
    )
  }, [blocks, closeHandler])
}

export default AddBlockModal2
