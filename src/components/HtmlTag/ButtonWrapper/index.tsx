import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '@procraft/ui/dist/form/TextField'
import { ButtonProps } from './interfaces'
import { ButtonWrapperModalStyled } from './styles'
import { useOnChangeStyles } from '../../../hooks/useOnChangeStyles'
import { ColorResult, HuePicker } from 'react-color'

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

  const onChangeColor = useCallback(
    (name: string) => (color: ColorResult) => {
      updateObject(object, {
        props: {
          ...object.props,
          style: {
            ...object.props.style,
            [name]: color.hex,
          },
        },
      })
    },
    [object, updateObject]
  )

  const buttonModal = useMemo(() => {
    if (!opened) {
      return null
    }

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
            className='btn-width'
            fullWidth
            value={object.components[0].props.text || ''}
            title="Текст кнопки"
            onChange={onChangeValue}
            placeholder="Например, отправить"
          />
          <TextField
            className='btn-width'
            fullWidth
            title="Размер текста"
            value={object.props.style?.fontSize || ''}
            onChange={onChangeValue}
            placeholder="в пикселях или rem"
          />
          <div className='btn-width'>
            <TextField
              className='btn-input'
              value={object.props.style?.width || ''}
              title="Ширина кнопки"
              name="width"
              onChange={onChangeStyles}
              placeholder="50px, 10%"
            />
            <TextField
              className='btn-input'
              value={object.props.style?.maxWidth || ''}
              title="Макс. ширина"
              name="maxWidth"
              onChange={onChangeStyles}
              placeholder="50px, 10%"
            />
          </div>

          <div className='btn-colors'>
            <div className="color-input">
              <label>Цвет фона</label>
              <HuePicker
                color={object.props.style?.backgroundColor}
                onChange={onChangeColor('backgroundColor')}
                width="100%"
              />
            </div>
            <div className="color-input">
              <label>Цвет текста</label>
              <HuePicker
                color={object.props.style?.color}
                onChange={onChangeColor('color')}
                width="100%"
              />
            </div>
          </div>
        </div>
      </ButtonWrapperModalStyled>
    )
  }, [opened, object, closeModal, onChangeValue, onChangeStyles, onChangeColor])

  return (
    <>
      {children}
      {buttonModal}
    </>
  )
}
