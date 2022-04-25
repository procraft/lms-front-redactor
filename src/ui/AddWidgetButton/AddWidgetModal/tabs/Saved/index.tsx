import React from 'react'
import { useTemplatesQuery } from '../../../../../gql/templates'
import { AddWidgetButtonButtonProps } from '../../buttons/interfaces'
import { AddWidgetModalSavedBlocksStyled } from './styles'
import { SavedBlock } from './SavedBlock'

type AddWidgetModalSavedBlocksProps = AddWidgetButtonButtonProps

export const AddWidgetModalSavedBlocks: React.FC<
  AddWidgetModalSavedBlocksProps
> = ({ addComponent, closeHandler }) => {
  const response = useTemplatesQuery({
    variables: {
      where: {
        uri: null,
      },
    },
  })

  return (
    <AddWidgetModalSavedBlocksStyled role="secondaryButtons">
      {response.data?.templates.map((n) => {
        return (
          <SavedBlock
            key={n.id}
            object={n}
            templates={response.data?.templates ?? []}
            addComponent={addComponent}
            closeHandler={closeHandler}
          />
        )
      })}
    </AddWidgetModalSavedBlocksStyled>
  )
}
