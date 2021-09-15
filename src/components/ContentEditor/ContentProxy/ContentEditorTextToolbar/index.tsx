import React, { useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { ContentEditorTextToolbarProps } from './interfaces'
import {
  ContentEditorTextToolbarStyled,
  // ContentEditorTextToolbarButtonStyled,
} from './styles'
import { ContentEditorToolbar } from './Toolbar'

/**
 * Модалка-туллбар для визуального редактирования текста (WYSIWYG)
 */
export const ContentEditorTextToolbar: React.FC<ContentEditorTextToolbarProps> =
  ({ contentEditableContainer, activeSetter }) => {
    // const buttons = useMemo(() => {
    //   const buttons: JSX.Element[] = []

    //   buttons.push(
    //     <ContentEditorTextToolbarButtonStyled key="bold"
    //       // disabled
    //     >
    //       <svg
    //         height="24"
    //         viewBox="0 0 24 24"
    //         width="24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
    //         <path d="M0 0h24v24H0z" fill="none" />
    //       </svg>
    //     </ContentEditorTextToolbarButtonStyled>
    //   )

    //   return <div className="buttons">{buttons}</div>
    // }, [])

    const selection = useMemo(() => global.document?.getSelection() ?? null, [])

    const closestInSelection = useCallback(
      <T extends HTMLElement>(selector: string): T | null => {
        if (!selection?.focusNode) {
          return null
        }

        let node: Node | null | undefined = selection.focusNode

        if (node.nodeType === Node.TEXT_NODE) {
          node = selection.focusNode?.parentNode
        }

        if (node && node instanceof Element) {
          return node.closest(selector)
        }

        return null
      },
      [selection]
    )

    return useMemo(() => {
      return ReactDOM.createPortal(
        <>
          <ContentEditorTextToolbarStyled>
            <div className="title">
              <h1>Text</h1>
              <hr />
            </div>

            <div className="content">
              {/* {buttons} */}
              <ContentEditorToolbar
                closestInSelection={closestInSelection}
                contentEditableContainer={contentEditableContainer}
                activeSetter={activeSetter}
              />
            </div>
          </ContentEditorTextToolbarStyled>
        </>,
        global.document.body
      )
    }, [closestInSelection, contentEditableContainer, activeSetter])
  }
