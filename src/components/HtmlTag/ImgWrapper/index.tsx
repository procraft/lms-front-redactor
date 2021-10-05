/* eslint-disable no-console */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ImgProps } from './interfaces'
import { useUploader } from '../../../hooks/useUploader'
import { ImgWrapperModalStyled } from './styles'
import { TextField } from 'material-ui'

export const ImgWrapper: React.FC<ImgProps> = (props) => {
  const {
    // src,
    children,
    object,
    // forwardedRef,
    updateObject,
    active,
    closeHandler,
    element,
  } = props

  const [opened, openedSetter] = useState(false)

  const closeModal = useCallback(() => {
    openedSetter(false)
    closeHandler()
  }, [closeHandler])

  useEffect(() => {
    if (!element || !active) {
      return
    }

    /**
     * Навешиваем событие, чтобы по клику открывался интерфейс выбор медиа
     */
    const onClick = () => {
      openedSetter(true)
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)
    }
  }, [element, active])

  const onUpload = useCallback(
    (url: string) => {
      updateObject(object, {
        components: [],
        props: {
          ...object.props,
          src: url,
        },
      })
      closeModal()
    },
    [object, updateObject, closeModal]
  )

  const { uploader } = useUploader({
    active,
    onUpload,
    inputProps: {
      accept: 'image/*',
    },
  })

  const image = useMemo(() => {
    if (!object.props.src) {
      return null
    }

    return (
      <div className="image-block">
        <img {...object.props} />
      </div>
    )
  }, [object.props])

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('onChange event', event)

      const name = event.target.name
      const value = event.target.value

      name &&
        updateObject(object, {
          props: {
            ...object.props,
            [name]: value,
          },
        })
    },
    [object, updateObject]
  )

  const uploaderModal = useMemo(() => {
    if (!opened) {
      return null
    }

    return (
      <ImgWrapperModalStyled
        title="Изображение"
        modal={true}
        preventClickEvent={true}
        closeHandler={closeModal}
      >
        {image}
        {uploader}

        <div className="controls">
          <TextField
            fullWidth
            value={object.props.width || ''}
            label="Ширина"
            name="width"
            onChange={onChange}
          />

          <TextField
            fullWidth
            value={object.props.maxWidth || ''}
            label="Максимальная ширина"
            name="maxWidth"
            onChange={onChange}
          />

          <TextField
            fullWidth
            value={object.props.height || ''}
            label="Высота"
            name="height"
            onChange={onChange}
          />

          <TextField
            fullWidth
            value={object.props.maxHeight || ''}
            label="Максимальная высота"
            name="maxHeight"
            onChange={onChange}
          />
        </div>
      </ImgWrapperModalStyled>
    )
  }, [opened, closeModal, image, object.props, onChange, uploader])

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
