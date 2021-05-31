import React, { useState, useEffect } from 'react'
import { RedactorComponentObject } from '../../../RedactorComponent/interfaces'
import useContentEditable from './hooks/useContentEditable'
import { EditableContentProxyProps } from './interfaces'
import { EditableContentProxyStyled } from './styles'

/**
После редактирования в режиме contentEditable легко может возникнуть ситуация,
когда HTML-элементы, отрендеренные реактом, удалены вручную. В таком случае
возникает ошибка DOMException: Failed to execute 'removeChild' on 'Node'.
Чтобы избежать этого, мы обернем содержимое в свой контейнер с ключом,
чтобы при переключении режимов реакт просто удалял контейнер целиком.
 */
const EditableContentProxy: React.FC<EditableContentProxyProps> = ({
  active,
  object,
  updateObject,
  children,
  ...other
}) => {
  const [contentWrapper, setContentWrapper] =
    useState<HTMLDivElement | null>(null)

  const [newContent, setNewContent] =
    useState<RedactorComponentObject['components'] | null>(null)

  const [state] = useState({
    newContent,
  })

  state.newContent = newContent

  // const [active, activeSetter] = useState(false);

  useEffect(() => {
    return () => {
      // console.log('useEffect contentWrapper unmounted', contentWrapper);

      state.newContent &&
        updateObject(object, {
          components: state.newContent,
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Хук редактора
   */
  useContentEditable({
    element: contentWrapper,
    active,
    object,
    updateObject: setNewContent,
  })

  return (
    <EditableContentProxyStyled
      ref={setContentWrapper}
      contentEditable={active}
      suppressContentEditableWarning
      {...other}
    >
      {children}
    </EditableContentProxyStyled>
  )
}

export default EditableContentProxy
