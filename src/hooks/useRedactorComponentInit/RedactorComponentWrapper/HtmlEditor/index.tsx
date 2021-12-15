import React, { useCallback } from 'react'
import { ContentEditorHTMLEditorMonacoEditor } from '../../../../components/ContentEditor/HTMLEditor/MonacoEditor'
import { Modal2 } from '../../../../ui/Modal2'
import { RedactorComponentWrapperHTMLEditorProps } from './interfaces'

/**
 * HTML редактор исходного кода элемента
 */
export const RedactorComponentWrapperHTMLEditor: React.FC<RedactorComponentWrapperHTMLEditorProps> =
  ({
    element,
    htmlEditorOpenedSetter,
    object,
    updateObject,
    parent,
    updateParent,
  }) => {
    const closeHandler = useCallback(() => {
      htmlEditorOpenedSetter(false)
    }, [htmlEditorOpenedSetter])

    return (
      <Modal2
        title=" "
        modal
        moveable={false}
        preventClickEvent
        fullScreen
        closeHandler={closeHandler}
        role="monaco-modal"
      >
        <ContentEditorHTMLEditorMonacoEditor
          active
          element={element}
          object={object}
          updateObject={updateObject}
          parent={parent}
          updateParent={updateParent}
        />
      </Modal2>
    )
  }
