import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '@procraft/ui/dist/form/TextField'
import { VideoWrapperProps } from './interfaces'
import { useUploader } from '../../../hooks/useUploader'
import { VideoWrapperModalStyled } from './styles'
import { useOnChangeStyles } from '../../../hooks/useOnChangeStyles'

export const VideoWrapper: React.FC<VideoWrapperProps> = (props) => {
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
    if (!element) {
      return
    }

    if (object.props.muted !== undefined) {
      element.setAttribute('muted', object.props.muted)
    } else {
      element.removeAttribute('muted')
    }
  }, [element, object.props])

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

  const { onChangeStyles } = useOnChangeStyles({
    object,
    updateObject,
  })

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
        {/* {image} */}
        {active ? uploader : null}

        <div className="controls">
          <div className='video-inputs'>
            <TextField
              className='video-input'
              value={object.props.style?.width || ''}
              title="Ширина"
              name="width"
              onChange={onChangeStyles}
              placeholder="(50px, 10%)"
            />

            <TextField
              className='video-input'
              value={object.props.style?.maxWidth || ''}
              title="Макс. ширина"
              name="maxWidth"
              onChange={onChangeStyles}
              placeholder="(50px, 10%)"
            />
          </div>
          <div className='video-inputs'>
            <TextField
              className='video-input'
              value={object.props.style?.height || ''}
              title="Высота"
              name="height"
              onChange={onChangeStyles}
              placeholder="(50px, 10%)"
            />

            <TextField
              className='video-input'
              value={object.props.style?.maxHeight || ''}
              title="Макс. высота"
              name="maxHeight"
              onChange={onChangeStyles}
              placeholder="(50px, 10%)"
            />
          </div>
        </div>
      </VideoWrapperModalStyled>
    )
  }, [opened, closeModal, active, uploader, object, onChangeStyles])

  return (
    <>
      {children}
      {uploaderModal}
    </>
  )
}
