import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ImgProps } from './interfaces'
import { useUploader } from '../../../hooks/useUploader'
import { VideoWrapperModalStyled } from './styles'
import { TextField } from 'material-ui'

export const VideoWrapper: React.FC<ImgProps> = (props) => {
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
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              tag: 'source',
              src: url,
            },
            components: [],
          },
        ],
        // props: {
        //   ...object.props,
        //   src: url,
        // },
      })
      closeModal()
    },
    [object, updateObject, closeModal]
  )

  const { uploader } = useUploader({
    onUpload,
    inputProps: {
      accept: 'video/*',
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
      <VideoWrapperModalStyled
        title="Видео"
        modal={true}
        preventClickEvent={true}
        closeHandler={closeModal}
        moveable
      >
        {image}
        {active ? uploader : null}

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
      </VideoWrapperModalStyled>
    )
  }, [opened, closeModal, image, active, uploader, object, onChange])

  return (
    <>
      {children}
      {uploaderModal}
    </>
  )

}
