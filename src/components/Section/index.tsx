import React, { useMemo } from 'react'
import useRedactorComponentInit from '../../hooks/useRedactorComponentInit'
import useRedactorRenderComponents from '../../hooks/useRedactorRenderComponents'
import { RedactorComponent } from '../../RedactorComponent/interfaces'

const Section: RedactorComponent = ({
  object,
  updateObject,
  inEditMode,
  wrapperContainer,
  ...other
}) => {
  const {
    ref,
    className,
    wrapperContent,
  } = useRedactorComponentInit<HTMLDivElement>({
    object,
    updateObject,
    wrapperContainer,
  })

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
    return <>{childrenContent}</>
  }, [childrenContent])

  return useMemo(() => {
    if (!inEditMode) {
      return content
    }

    return (
      <>
        {wrapperContent}
        <div
          {...other}
          ref={ref}
          className={className}
          contentEditable="false"
          suppressContentEditableWarning
        >
          {content}
        </div>
      </>
    )
  }, [inEditMode, wrapperContent, other, ref, className, content])
}

export default Section
