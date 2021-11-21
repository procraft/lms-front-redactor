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
          <TextField
            fullWidth
            value={object.props.style?.width || ''}
            title="Ширина"
            name="width"
            onChange={onChangeStyles}
            helperText="px, %"
          />

          <TextField
            fullWidth
            value={object.props.style?.maxWidth || ''}
            title="Максимальная ширина"
            name="maxWidth"
            onChange={onChangeStyles}
            helperText="px, %"
          />

          <TextField
            fullWidth
            value={object.props.style?.height || ''}
            title="Высота"
            name="height"
            onChange={onChangeStyles}
            helperText="px, %"
          />

          <TextField
            fullWidth
            value={object.props.style?.maxHeight || ''}
            title="Максимальная высота"
            name="maxHeight"
            onChange={onChangeStyles}
            helperText="px, %"
          />
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
