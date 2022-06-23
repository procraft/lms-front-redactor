import React, { useCallback, useState } from 'react'
import { ContentEditorHTMLEditorMonacoEditor } from '../../../../components/ContentEditor/HTMLEditor/MonacoEditor'
import { CollapsedButtonStyled, ContentEditorStyled, EditorStyled } from './styles'
import { RedactorComponentWrapperHTMLEditorProps } from './interfaces'

/**
 * HTML редактор исходного кода элемента
 */
export const RedactorComponentWrapperHTMLEditor: React.FC<
  RedactorComponentWrapperHTMLEditorProps
> = ({
  element,
  htmlEditorOpenedSetter,
  object,
  updateObject,
  parent,
  updateParent,
}) => {
  const [toggleCollapse, setToggleCollapse] = useState<() => void>()

  const closeHandler = useCallback(() => {
    htmlEditorOpenedSetter(false)
  }, [htmlEditorOpenedSetter])

  return (
    <EditorStyled>
      <ContentEditorStyled
        title="Редактирование кода"
        modal
        moveable
        preventClickEvent
        closeHandler={closeHandler}
        role="monaco-modal"
        collapsedElement={(toggleCollapse) => {
          setToggleCollapse(() => toggleCollapse)

          return <CollapsedElement toggleCollapse={toggleCollapse}/>
        }}
      >
        <ContentEditorHTMLEditorMonacoEditor
          active
          element={element}
          object={object}
          updateObject={updateObject}
          parent={parent}
          updateParent={updateParent}
          toggleModalCollapse={toggleCollapse}
        />
      </ContentEditorStyled>
    </EditorStyled>
  )
}

function CollapsedElement(props: {toggleCollapse: () => void}) {
  return <CollapsedButtonStyled onClick={props.toggleCollapse}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9997 3C17.3917 3 21.8777 6.88 22.8187 12C21.8787 17.12 17.3917 21 11.9997 21C6.60766 21 2.12166 17.12 1.18066 12C2.12066 6.88 6.60766 3 11.9997 3ZM11.9997 19C14.0391 18.9996 16.0181 18.3068 17.6125 17.0352C19.207 15.7635 20.3226 13.9883 20.7767 12C20.3209 10.0133 19.2046 8.24 17.6103 6.97003C16.016 5.70005 14.038 5.00853 11.9997 5.00853C9.96136 5.00853 7.98335 5.70005 6.38904 6.97003C4.79473 8.24 3.67843 10.0133 3.22266 12C3.67676 13.9883 4.79234 15.7635 6.38681 17.0352C7.98128 18.3068 9.9602 18.9996 11.9997 19ZM11.9997 16.5C10.8062 16.5 9.6616 16.0259 8.81768 15.182C7.97377 14.3381 7.49966 13.1935 7.49966 12C7.49966 10.8065 7.97377 9.66193 8.81768 8.81802C9.6616 7.97411 10.8062 7.5 11.9997 7.5C13.1931 7.5 14.3377 7.97411 15.1816 8.81802C16.0256 9.66193 16.4997 10.8065 16.4997 12C16.4997 13.1935 16.0256 14.3381 15.1816 15.182C14.3377 16.0259 13.1931 16.5 11.9997 16.5ZM11.9997 14.5C12.6627 14.5 13.2986 14.2366 13.7674 13.7678C14.2363 13.2989 14.4997 12.663 14.4997 12C14.4997 11.337 14.2363 10.7011 13.7674 10.2322C13.2986 9.76339 12.6627 9.5 11.9997 9.5C11.3366 9.5 10.7007 9.76339 10.2319 10.2322C9.76306 10.7011 9.49966 11.337 9.49966 12C9.49966 12.663 9.76306 13.2989 10.2319 13.7678C10.7007 14.2366 11.3366 14.5 11.9997 14.5Z"
        fill="white"
      />
    </svg>
    Показать код
  </CollapsedButtonStyled>
}