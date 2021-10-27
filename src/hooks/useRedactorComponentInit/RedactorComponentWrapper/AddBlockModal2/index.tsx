import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { RedactorComponentObject } from '../../../../RedactorComponent/interfaces'
import { AddBlockModal2Button } from './Button'
import { AddBlockModal2Props } from './interfaces'
import { AddBlockModal2ContentStyled, AddBlockModal2Styled } from './styles'

/**
 * Модалка для добавления нового блока
 */
const AddBlockModal2: React.FC<AddBlockModal2Props> = ({
  closeHandler,
  direction,
  object,
  parent,
  updateParent,
}) => {
  const blocks = useMemo<JSX.Element[]>(() => {
    const blocks: JSX.Element[] = []

    const blocksObjects: RedactorComponentObject[] = [
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 3,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 2,
                gridRowEnd: 3,
                gridColumnStart: 2,
                gridColumnEnd: 4,
              },
            },
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 2,
                gridRowEnd: 3,
                gridColumnStart: 1,
                gridColumnEnd: 3,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 3,
              },
            },
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 3,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 2,
                gridColumnStart: 2,
                gridColumnEnd: 4,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 2,
                gridColumnStart: 1,
                gridColumnEnd: 3,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 3,
              },
            },
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 2,
                gridRowEnd: 3,
                gridColumnStart: 1,
                gridColumnEnd: 4,
              },
            },
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 2,
                gridColumnStart: 1,
                gridColumnEnd: 4,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 3,
                gridColumnStart: 2,
                gridColumnEnd: 4,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateRows: 'auto auto',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {
              style: {
                gridRowStart: 1,
                gridRowEnd: 3,
                gridColumnStart: 1,
                gridColumnEnd: 3,
              },
            },
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 4fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateColumns: '2fr 8fr 2fr',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 3fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
      {
        name: 'Section',
        component: 'Section',
        props: {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 6fr)',
            gridGap: '10px',
          },
        },
        components: [
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
          {
            name: 'Section',
            component: 'Section',
            props: {},
            components: [],
          },
        ],
      },
    ]

    blocksObjects.forEach((newObject, index) => {
      blocks.push(
        <AddBlockModal2Button
          key={index}
          object={object}
          newObject={newObject}
          direction={direction}
          parent={parent}
          updateParent={updateParent}
          closeHandler={closeHandler}
        />
      )
    })

    return blocks
  }, [closeHandler, direction, object, parent, updateParent])

  return useMemo(() => {
    return ReactDOM.createPortal(
      <AddBlockModal2Styled
        title="Добавить блок"
        preventClickEvent
        closeHandler={closeHandler}
        modal
        moveable
      >
        <AddBlockModal2ContentStyled>{blocks}</AddBlockModal2ContentStyled>
      </AddBlockModal2Styled>,
      document.body
    )
  }, [blocks, closeHandler])
}

export default AddBlockModal2
