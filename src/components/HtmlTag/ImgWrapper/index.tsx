/* eslint-disable no-console */
import React, { useCallback, useMemo } from 'react'
import { ImgProps } from './interfaces'
import { useUploader } from '../../../hooks/useUploader'
import { Modal2 } from '../../../ui/Modal2'

export const ImgWrapper: React.FC<ImgProps> = (props) => {
  const {
    // src,
    children,
    object,
    // forwardedRef,
    updateObject,
    active,
    closeHandler,
  } = props

  console.log('ImgWrapper props', props)

  const onUpload = useCallback(
    (url: string) => {
      updateObject(object, {
        components: [],
        props: {
          ...object.props,
          src: url,
        },
      })
      closeHandler()
    },
    [object, updateObject, closeHandler]
  )

  const { uploader } = useUploader({
    active,
    onUpload,
    inputProps: {
      accept: 'image/*',
    },
  })

  const uploaderModal = useMemo(() => {
    if (!active) {
      return null
    }

    return (
      <Modal2
        title="Изображение"
        modal={true}
        preventClickEvent={true}
        closeHandler={closeHandler}
      >
        {uploader}
      </Modal2>
    )
  }, [active, uploader, closeHandler])

  // const ref = useCallback((el: any) => {
  //   console.log('ref img el', el)
  // }, [])

  // return <>ImgWrapper: {children}</>
  return (
    <>
      {children}
      {uploaderModal}
    </>
  )

  // return (
  //   <>
  //     {uploader}
  //     <img
  //       // {...renderProps}
  //       {...other}
  //       /**
  //        * Иначе не срабатывает клик по инпуту
  //        */
  //       onClick={undefined}
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //       // @ts-ignore
  //       ref={forwardedRef}
  //       // ref={renderProps.ref}
  //       // contentEditable={false}

  //       /**
  //        * Добавляем атрибут, чтобы при обработке измененного контента возвращался дочерний элемент,
  //        * а не технический, иначе возникает дублирование вложенности.
  //        * Важно! Дочерний элемент тогда должен быть только один.
  //        */
  //       data-redactor--fake-wrapper
  //       data-redactor--rel={object.props.rel}
  //       data-redactor--href={object.props.href}
  //       // data-redactor--content-length={object.components[0]?.props.text?.length}
  //     ></img>
  //   </>
  // )
}
