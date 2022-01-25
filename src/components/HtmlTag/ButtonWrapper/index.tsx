import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '@procraft/ui/dist/form/TextField'
import { ButtonProps } from './interfaces'
import { ButtonWrapperModalStyled } from './styles'
import { useOnChangeStyles } from '../../../hooks/useOnChangeStyles'
import { ColorResult, HuePicker, SketchPicker } from 'react-color'

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
              // TODO: Remove legacy onClick
              onClick={toggleBackColorPicker}
              ref={buttonRef}
            >
              Pick {showBackColorPicker ? 'Yes' : 'No'}
            </button>
            {showBackColorPicker && (
              <SketchPicker
                color={object.props.style?.backgroundColor}
                onChange={onChangeColor('backgroundColor')}
                width="100%"
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
            <HuePicker
              color={object.props.style?.color}
              onChange={onChangeColor('color')}
              width="100%"
            />
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
    toggleBackColorPicker,
    showBackColorPicker,
    onChangeUrl,
  ])

  return (
    <>
      {children}
      {buttonModal}
    </>
  )
}
