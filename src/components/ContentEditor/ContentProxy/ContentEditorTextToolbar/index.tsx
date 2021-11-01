import React, { useCallback, useMemo } from 'react'
// import ReactDOM from 'react-dom'
import { ContentEditorTextToolbarProps } from './interfaces'

import { ContentEditorToolbar } from './Toolbar'

/**
 * Модалка-туллбар для визуального редактирования текста (WYSIWYG)
 */
export const ContentEditorTextToolbar: React.FC<ContentEditorTextToolbarProps> =
  ({
    contentEditableContainer,
    activeSetter,
    contentWrapper,
    object,
    updateObject,
  }) => {
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
      return (
        <ContentEditorToolbar
          closestInSelection={closestInSelection}
          contentEditableContainer={contentEditableContainer}
          activeSetter={activeSetter}
          contentWrapper={contentWrapper}
          object={object}
          updateObject={updateObject}
        />
      )
    }, [
      closestInSelection,
      contentEditableContainer,
      activeSetter,
      contentWrapper,
      object,
      updateObject,
    ])
  }
