import React, { useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import { useRedactorComponentRef } from '../../hooks/useRedactorComponentRef'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'
import { SectionStyled } from './styles'

export const Section: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  parent,
  updateParent,
  ...other
}) => {
  const { ref, element, active, activeSetter } =
    useRedactorComponentRef<HTMLDivElement>()

  const {
    // ref,
    // className,
    wrapperContent,
    // active: _active,
    ...otherInitProps
  } = useRedactorComponentInit({
    object,
    updateObject,
    wrapperContainer,
    parent,
    updateParent,
    element,
    active,
    activeSetter,
    hoverable: true,
  })

  // null
  // _active

  const childrenContent = useRedactorRenderComponents({
    object,
    updateObject,
    inEditMode,
    wrapperContainer,
  })

  // console.log('Section updateObject', updateObject);

  // useEffect(() => {
  //   console.log(`Section useEffect object`, object)
  // }, [object])

  // useEffect(() => {
  //   console.log(`Section useEffect updateObject`, updateObject)
  // }, [updateObject])

  // const updateName = useCallback(() => {
  //   // console.log(`Section updateName`, object);

  //   updateObject(object, {
  //     name: 'Section ' + Math.random().toFixed(3),
  //   })
  // }, [object, updateObject])

  // const content = useMemo(() => {
  //   return (
  //     <>
  //       {object.name} {Math.random()}
  //       <button onClick={updateName}>Update name</button>
  //     </>
  //   )
  // }, [object.name, updateName])

  // const content = useMemo(() => {
  //   return <>
  //     <div
  //       {...object.props}
  //       style={{
  //         border: "2px solid red",
  //         ...object.props.style,
  //       }}
  //     >
  //       {childrenContent}
  //     </div>
  //   </>
  // }, [childrenContent, object.props]);

  const content = useMemo(() => {
    return (
      <SectionStyled
        {...other}
        {...otherInitProps}
        ref={inEditMode ? ref : undefined}
        // className={className}
        contentEditable="false"
        suppressContentEditableWarning
        {...object.props}
      >
        {childrenContent}
      </SectionStyled>
    )
  }, [childrenContent, inEditMode, object.props, other, otherInitProps, ref])

  return useMemo(() => {
    if (!inEditMode) {
      return content
    }

    return (
      <>
        {wrapperContent}
        {content}
      </>
    )
  }, [inEditMode, wrapperContent, content])
}
