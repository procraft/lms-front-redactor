import React, { useEffect, useMemo, useState } from 'react'
import { AddWidgetModalButtonStyled } from '../../styles'
import { AddWidgetButtonButtonProps } from '../interfaces'

/**
 * Добавление виджета курса
 */
export const AddWidgetButtonCourse: React.FC<AddWidgetButtonButtonProps> = ({
  closeHandler,
  object,
  addComponent,
  ...other
}) => {
  const buttonState = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!buttonState[0]) {
      return
    }

    const button = buttonState[0]

    const onClick = () => {
      //

      addComponent({
        name: 'CourseOrder',
        component: 'CourseOrder',
        props: {},
        components: [],
      })

      closeHandler()
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [buttonState, object, closeHandler, addComponent])

  return useMemo(() => {
    return (
      <>
        <AddWidgetModalButtonStyled ref={buttonState[1]} {...other}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.375 13.875V14.875H22.375V13.875H20.375ZM21.375 9H22.375C22.375 8.62694 22.1673 8.2849 21.8364 8.11278L21.375 9ZM12 4.125L12.4614 3.23778C12.1722 3.08741 11.8278 3.08741 11.5386 3.23778L12 4.125ZM2.625 9L2.16365 8.11278C1.83266 8.2849 1.625 8.62694 1.625 9C1.625 9.37306 1.83266 9.7151 2.16365 9.88722L2.625 9ZM12 13.875L11.5386 14.7622C11.8131 14.9049 12.1382 14.9126 12.4191 14.783L12 13.875ZM16.875 11.625H17.875C17.875 11.284 17.7012 10.9665 17.414 10.7827C17.1267 10.5989 16.7656 10.5741 16.4559 10.717L16.875 11.625ZM8.125 11.625V10.625H6.125V11.625H8.125ZM22.375 13.875V9H20.375V13.875H22.375ZM21.8364 8.11278L12.4614 3.23778L11.5386 5.01222L20.9136 9.88722L21.8364 8.11278ZM11.5386 3.23778L2.16365 8.11278L3.08635 9.88722L12.4614 5.01222L11.5386 3.23778ZM2.16365 9.88722L11.5386 14.7622L12.4614 12.9878L3.08635 8.11278L2.16365 9.88722ZM12.4191 14.783L17.2941 12.533L16.4559 10.717L11.5809 12.967L12.4191 14.783ZM15.875 11.625V16.875H17.875V11.625H15.875ZM15.875 16.875C15.875 17.1218 15.6563 17.6067 14.8879 18.092C14.1641 18.5492 13.1319 18.875 12 18.875V20.875C13.4931 20.875 14.8984 20.4508 15.9559 19.783C16.9687 19.1433 17.875 18.1282 17.875 16.875H15.875ZM12 18.875C10.8681 18.875 9.83592 18.5492 9.11212 18.092C8.34368 17.6067 8.125 17.1218 8.125 16.875H6.125C6.125 18.1282 7.03132 19.1433 8.04413 19.783C9.10158 20.4508 10.5069 20.875 12 20.875V18.875ZM8.125 16.875V11.625H6.125V16.875H8.125Z"
              fill="black"
            />
          </svg>
          Учебный курс
        </AddWidgetModalButtonStyled>
      </>
    )
  }, [buttonState, other])
}
