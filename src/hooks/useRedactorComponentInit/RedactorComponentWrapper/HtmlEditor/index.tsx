import React, { useCallback } from 'react'
import { ContentEditorHTMLEditorMonacoEditor } from '../../../../components/ContentEditor/HTMLEditor/MonacoEditor'
import { Modal2 } from '../../../../ui/Modal2'
// import { useMonacoEditor } from '../../../useMonacoEditor'
import { RedactorComponentWrapperHTMLEditorProps } from './interfaces'

/**
 * HTML редактор исходного кода элемента
 */
export const RedactorComponentWrapperHTMLEditor: React.FC<RedactorComponentWrapperHTMLEditorProps> = ({
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

  // const [source] = useState(element.outerHTML)

  // const {
  //   editor,
  // } = useMonacoEditor({
  //   active: true,
  //   editorProps: {
  //     language: "html",
  //     source,
  //   },
  // })

  return <Modal2
    title=" "
    modal
    moveable={false}
    preventClickEvent
    fullScreen
    closeHandler={closeHandler}
  >
    {/* {editor} */}

    <ContentEditorHTMLEditorMonacoEditor
      active
      element={element}
      object={object}
      updateObject={updateObject}
      parent={parent}
      updateParent={updateParent}
    />

  </Modal2>
}