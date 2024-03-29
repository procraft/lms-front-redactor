import { useEffect, useState } from 'react'

import { useAddBlockButtonProps } from './interfaces'

/**
 * Кнопка добавления нового блока
 */
export const useAddBlockButton: (props: useAddBlockButtonProps) => void = ({
  wrapper,
  hovered,
  direction,
  onClick,
  parent,
  active,
}) => {
  const [button, buttonSetter] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    /**
     * Если нет родительского компонента, то не выводим кнопку, так как сейчас она расчитана
     * только на добавление в родителя
     */
    if (!parent || active) {
      return
    }

    const button = document.createElement('button')

    button.className = `RedactorComponentWrapper--addBlock-button ${direction}`

    button.innerHTML = `
      <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: white;">
        <path d="M7.375 7.375V3.625H8.625V7.375H12.375V8.625H8.625V12.375H7.375V8.625H3.625V7.375H7.375Z" fill="white"></path>
      </svg>
    `

    // const onMouseOver = (event: MouseEvent) => {
    //   console.log('button onMouseEvent', event)

    //   event.preventDefault()
    //   event.stopPropagation()
    // }

    // // button.addEventListener
    // button.addEventListener('mouseenter', onMouseOver)
    // button.addEventListener('mouseover', onMouseOver)
    // button.addEventListener('mouseleave', onMouseOver)

    buttonSetter(button)

    return () => {
      buttonSetter(null)
    }
  }, [direction, parent, active])

  useEffect(() => {
    if (!button) {
      return
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [button, onClick])

  useEffect(() => {
    if (!button || !hovered || !direction) {
      return
    }

    // const {
    //   // offsetTop: wrappOroffsetTop,
    //   // offsetLeft: wrappeOoffsetLeft,
    //   offsetWidth: wrapperOffsetWidth,
    // } = wrapper

    // const {
    //   offsetWidth,
    // } = element;

    // console.log('element offsetWidth', offsetWidth);

    // const style: Partial<CSSStyleDeclaration> = {
    //   position: 'absolute',
    //   top: '0px',
    //   left: wrapperOffsetWidth / 2 + 'px',
    // }

    // Object.assign(element.style, style)

    wrapper.appendChild(button)

    return () => {
      wrapper.removeChild(button)
    }
  }, [button, hovered, wrapper, direction])

  return
}
