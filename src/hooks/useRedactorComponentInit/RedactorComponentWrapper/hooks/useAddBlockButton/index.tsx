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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="12" fill="#2563EB"/>
      <path d="M11.375 11.375V7.625H12.625V11.375H16.375V12.625H12.625V16.375H11.375V12.625H7.625V11.375H11.375Z" fill="white"/>
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
