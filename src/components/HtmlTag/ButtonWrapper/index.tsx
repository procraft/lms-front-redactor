import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '@procraft/ui/dist/form/TextField'
import { ButtonProps } from './interfaces'
import { ButtonWrapperModalStyled } from './styles'
import { useOnChangeStyles } from '../../../hooks/useOnChangeStyles'
import { ColorResult, SketchPicker } from 'react-color'
import { Button } from '@procraft/ui/dist/Button'

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
  const [backgroundColor, setBackgroundColor] = useState(false)
  const [textColor, setTextColor] = useState(false)

  const closeModal = useCallback(() => {
    openedSetter(false)
    closeHandler()
  }, [closeHandler])

  useEffect(() => {
    if (!element || !active) {
      return
    }

    const onClick = () => {
      openedSetter(true)
    }

    element.addEventListener('click', onClick)

    return () => {
      element.removeEventListener('click', onClick)
    }
  }, [element, active])

  const toggleBgColor = useCallback((event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      setBackgroundColor((backgroundColor) => !backgroundColor)
    }
  }, [])

  const toggleTextColor = useCallback((event: MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      setTextColor((textColor) => !textColor)
    }
  }, [])

  const { onChangeStyles } = useOnChangeStyles({
    object,
    updateObject,
  })

  const onChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
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
    const colors = [
      '#2563eb',
      '#7c3aed',
      '#db2777',
      '#dc2626',
      '#f97316',
      '#facc15',
      '#22c55e',
      '#14b8a6',
    ]
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
            className="btn-width"
            fullWidth
            value={object.components[0].props.text || ''}
            title="Текст кнопки"
            onChange={onChangeValue}
            placeholder="Например, отправить"
          />
          <TextField
            className="btn-width"
            fullWidth
            title="Размер текста"
            value={object.props.style?.fontSize || ''}
            onChange={onChangeValue}
            placeholder="в пикселях или rem"
          />
          <div className="btn-width">
            <TextField
              className="btn-input"
              value={object.props.style?.width || ''}
              title="Ширина кнопки"
              name="width"
              onChange={onChangeStyles}
              placeholder="50px, 10%"
            />
            <TextField
              className="btn-input"
              value={object.props.style?.maxWidth || ''}
              title="Макс. ширина"
              name="maxWidth"
              onChange={onChangeStyles}
              placeholder="50px, 10%"
            />
          </div>

          <div className="btn-colors">
            <div className="color-input">
              <label>Цвет фона</label>
              <Button
                style={{
                  backgroundColor: object.props.style?.backgroundColor,
                }}
                className="color-block"
                onClick={toggleBgColor}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                zIndex: '50',
                bottom: -250,
                left: -50,
              }}
            >
              {backgroundColor ? (
                <SketchPicker
                  className="color-block-picker"
                  presetColors={colors}
                  disableAlpha={true}
                  color={object.props.style?.backgroundColor}
                  onChangeComplete={onChangeColor('backgroundColor')}
                />
              ) : null}
            </div>

            <div className="color-input">
              <label>Цвет текста</label>
              <Button
                style={{
                  backgroundColor: object.props.style?.color,
                }}
                className="color-block"
                onClick={toggleTextColor}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                zIndex: '50',
                bottom: -250,
                right: -51,
              }}
            >
              {textColor ? (
                <SketchPicker
                  className="color-block-picker"
                  presetColors={colors}
                  disableAlpha={true}
                  color={object.props.style?.color}
                  onChangeComplete={onChangeColor('color')}
                />
              ) : null}
            </div>
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
    backgroundColor,
    textColor,
    onChangeColor,
    toggleBgColor,
    toggleTextColor,
  ])

  return (
    <>
      {children}
      {buttonModal}
    </>
  )
}
