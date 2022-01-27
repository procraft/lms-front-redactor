import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '@procraft/ui/dist/form/TextField'
import { ButtonProps } from './interfaces'
import { ButtonWrapperModalStyled } from './styles'
import { useOnChangeStyles } from '../../../hooks/useOnChangeStyles'
import { ColorResult, SketchPicker } from 'react-color'

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

  const onChangeUrl = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      //console.log('---value', event.target)

      updateObject(object, {
        props: {
          ...object.props,
          href: value,
          style: {
            ...object.props.style,
          },
        },
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

  const [showBackColorPicker, setShowBackColorPicker] = useState(false)

  const toggleBackColorPicker = useCallback(
    (event) => {
      // TODO: remove console.log
      // eslint-disable-next-line no-console
      console.log('toggleBackColorPicker', event)
      setShowBackColorPicker(!showBackColorPicker)
    },
    [showBackColorPicker]
  )

  const [buttonElement, buttonRef] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!buttonElement) {
      return
    }

    const onClick = toggleBackColorPicker

    buttonElement.addEventListener('click', onClick)

    return () => {
      buttonElement.removeEventListener('click', onClick)
    }
  }, [buttonElement, toggleBackColorPicker])

  const [showTextColorPicker, setShowTextColorPicker] = useState(false)

  const toggleTextColorPicker = useCallback(
    (event) => {
      // TODO: remove console.log
      // eslint-disable-next-line no-console
      console.log('toggleTextColorPicker', event)
      setShowTextColorPicker(!showTextColorPicker)
    },
    [showTextColorPicker]
  )

  const [buttonElementTextColor, buttonRefTextColor] =
    useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!buttonElementTextColor) {
      return
    }

    const onClickTextColor = toggleTextColorPicker

    buttonElementTextColor.addEventListener('click', onClickTextColor)

    return () => {
      buttonElementTextColor.removeEventListener('click', onClickTextColor)
    }
  }, [buttonElementTextColor, toggleTextColorPicker])

  const buttonModal = useMemo(() => {
    if (!opened) {
      return null
    }

    //console.log('object', object)

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
            value={object.props.href || ''}
            title="URL"
            onChange={onChangeUrl}
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

          <div className="marginTop">
            <label>Цвет фона</label>
            <button
              ref={buttonRef}
              style={{
                backgroundColor: object.props.style?.backgroundColor,
                width: '50px',
                height: '20px',
                marginLeft: '10px',
              }}
            ></button>
            {showBackColorPicker && (
              <SketchPicker
                color={object.props.style?.backgroundColor}
                onChange={onChangeColor('backgroundColor')}
                width="auto"
              />
            )}
          </div>

          {/*<div className="marginTop">
            <label>Цвет фона</label>
            <HuePicker
              color={object.props.style?.backgroundColor}
              onChange={onChangeColor('backgroundColor')}
              width="100%"
            />
    </div>*/}

          <div className="marginTop">
            <label>Цвет текста</label>
            <button
              ref={buttonRefTextColor}
              style={{
                backgroundColor: object.props.style?.color,
                width: '50px',
                height: '20px',
                marginLeft: '10px',
              }}
            ></button>
            {showTextColorPicker && (
              <SketchPicker
                color={object.props.style?.color}
                onChange={onChangeColor('color')}
                width="auto"
              />
            )}
          </div>
        </div>
      </ButtonWrapperModalStyled>
    )
  }, [
    opened,
    object,
    closeModal,
    onChangeValue,
    onChangeStyles,
    onChangeColor,
    showBackColorPicker,
    showTextColorPicker,
    onChangeUrl,
  ])

  return (
    <>
      {children}
      {buttonModal}
    </>
  )
}
