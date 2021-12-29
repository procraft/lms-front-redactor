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

  /*
 const [color, setColor] = useState('#fff')
 onChange={(color) => {
              setColor(color)
              onChangeColor('backgroundColor', color.hex)
            }}

   onChangeComplete={(color) => {
              setColor(color.hex)
            }}
 <TextField
            fullWidth
            value={color || 'object.props.style?.backgroundColor'}
            title="Фон кнопки"
            name="backgroundColor"
            onChange={onChangeStyles}
            helperText="hex"
          />

          <TextField
            fullWidth
            value={color || ''}
            title="Цвет текста"
            name="color"
            onChange={onChangeStyles}
            helperText="hex"
          />


*/
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
  /*
  const onChangeColorTest = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('event', event)

      updateObject(object, {
        props: {
          ...object.props,
          style: {
            ...object.props.style,
            backgroundColor: event.hex,
          },
        },
      })
    }
  )
*/

  const onChangeColorTest = useCallback(
    (color: ColorResult) => {
      updateObject(object, {
        props: {
          ...object.props,
          style: {
            ...object.props.style,
            backgroundColor: color.hex,
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

    /*
    const onChangeColor = (style: string, value: string) => {
      //console.log('---value', value)
      //console.log('---style', style)

      updateObject(object, {
        props: {
          ...object.props,
          style: {
            ...object.props.style,
            [style]: value,
          },
        },
      })
    }
*/
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

          <HuePicker
            color={object.props.style?.backgroundColor}
            onChange={onChangeColorTest}
          />
        </div>
      </ButtonWrapperModalStyled>
    )
  }, [
    opened,
    object,
    closeModal,
    onChangeValue,
    onChangeStyles,
    onChangeColorTest,
  ])

  return (
    <>
      {children}
      {buttonModal}
    </>
  )
}
