import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '@procraft/ui/dist/form/TextField'
import { ButtonProps } from './interfaces'
import { ButtonWrapperModalStyled } from './styles'
import { useOnChangeStyles } from '../../../hooks/useOnChangeStyles'

export const ButtonWrapper: React.FC<ButtonProps> = (props) => {
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

  // const onChangeStyles = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const name = event.target.name
  //     const value = event.target.value

  //     name &&
  //       updateObject(object, {
  //         props: {
  //           ...object.props,
  //           style: {
  //             ...object.props.style,
  //             [name]: value,
  //           },
  //         },
  //       })
  //   },
  //   [object, updateObject]
  // )

  const { onChangeStyles } = useOnChangeStyles({
    object,
    updateObject,
  })

  const onChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      //console.log('---value', value)

      updateObject(object, {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'button',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              text: value,
            },
            components: [],
          },
        ],
      })
    },
    [object, updateObject]
  )

  const buttonModal = useMemo(() => {
    if (!opened) {
      return null
    }

    //console.log('object.props', object)
    //console.log('object', object.components[0].props.text)

    return (
      <ButtonWrapperModalStyled
        title="Кнопка"
        modal={true}
        preventClickEvent={true}
        closeHandler={closeModal}
        moveable
      >
        <div className="controls">
          <TextField
            fullWidth
            value={object.components[0].props.text || ''}
            title="Текст кнопки"
            onChange={onChangeValue}
          />

          <TextField
            fullWidth
            value={object.props.style?.width || ''}
            title="Ширина кнопки"
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
        </div>
      </ButtonWrapperModalStyled>
    )
  }, [opened, object, closeModal, onChangeValue, onChangeStyles])

  return (
    <>
      {children}
      {buttonModal}
    </>
  )
}
