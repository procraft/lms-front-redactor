import React, { useState, useEffect, useMemo } from 'react'
import { RedactorComponentObject } from '../../../RedactorComponent/interfaces'
// import { ContentEditorHTMLEditor } from '../HTMLEditor'
import { ContentEditorTextToolbar } from './ContentEditorTextToolbar'
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
  activeSetter,
  inEditMode,
  ...other
}) => {
  // useEffect(() => {
  //   console.log(
  //     '3 EditableContentProxy useEffect mounted',
  //     new Date().toISOString()
  //   )

  //   return () => {
  //     console.error(
  //       '4 EditableContentProxy useEffect unmount',
  //       new Date().toISOString()
  //     )
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('5 EditableContentProxy useEffect object', object)

  //   return () => {
  //     console.log('6 EditableContentProxy useEffect object', object)
  //   }
  // }, [object])

  const [contentWrapper, setContentWrapper] = useState<HTMLDivElement | null>(
    null
  )

  const [newContent, setNewContent] = useState<
    RedactorComponentObject['components'] | null
  >(null)

  // const [state] = useState({
  //   newContent,
  // })

  // state.newContent = newContent

  // const [active, activeSetter] = useState(false);

  // useEffect(() => {
  //   console.log('7 newContent', newContent)
  // }, [newContent])

  /**
   * При размонтировании компонента выполняем апдейт объекта
   */
  // useEffect(() => {
  //   return () => {
  //     // console.log('useEffect contentWrapper unmounted', contentWrapper);

  //     state.newContent &&
  //       updateObject(object, {
  //         components: state.newContent,
  //       })
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  /**
   * Хук редактора
   */
  useContentEditable({
    element: contentWrapper,
    active,
    object,
    updateObject: setNewContent,
  })

  // const [contentEditable, contentEditableSetter] = useState(active)

  // useEffect(() => {
  //   console.log('8 useEffect active', active)

  //   contentEditableSetter(active)

  //   return () => {
  //     console.log('9 useEffect active return', active)
  //   }
  // }, [active])

  // useEffect(() => {
  //   // console.log('10 useEffect active', active)
  //   // console.log('10 useEffect update newContent?.length', newContent?.length)
  //   console.log('10 useEffect update contentEditable', contentEditable)

  //   /**
  //    * Если выходим из состояния contentEditable и есть новый контент,
  //    * выполняем апдейт объекта
  //    */
  //   if (!contentEditable && newContent?.length) {
  //     setNewContent(null)

  //     updateObject(object, {
  //       components: newContent,
  //     })
  //   }

  //   return () => {
  //     // console.log('11 useEffect active return', active)
  //     console.log('11 useEffect contentEditable return', contentEditable)
  //     console.log(
  //       '11 useEffect update return newContent?.length',
  //       newContent?.length
  //     )

  //     // console.log('11 useEffect update contentEditable 2', contentEditable)
  //   }
  // }, [contentEditable, newContent, object, updateObject])

  useEffect(() => {
    /**
     * Если выходим из состояния contentEditable и есть новый контент,
     * выполняем апдейт объекта
     */
    if (!active && newContent?.length) {
      setNewContent(null)

      updateObject(object, {
        components: newContent,
      })
    }
  }, [active, newContent, object, updateObject])

  return useMemo(() => {
    // console.log('2 EditableContentProxy contentEditable', contentEditable)

    return (
      <>
        {active && contentWrapper ? (
          <ContentEditorTextToolbar
            contentEditableContainer={contentWrapper}
            activeSetter={activeSetter}
            // contentWrapper={contentWrapper}
            // object={object}
            // updateObject={updateObject}
          />
        ) : null}
        <EditableContentProxyStyled
          ref={setContentWrapper}
          key={active.toString()}
          // contentEditable={contentEditable}
          contentEditable={active}
          suppressContentEditableWarning
          inEditMode={inEditMode}
          {...other}
        >
          {children}
        </EditableContentProxyStyled>
        {/* {active && contentWrapper ? (
          <ContentEditorHTMLEditor
            element={contentWrapper}
            object={object}
            updateObject={updateObject}
          />
        ) : null} */}
      </>
    )
  }, [active, activeSetter, children, contentWrapper, other, inEditMode])
}

export default EditableContentProxy
