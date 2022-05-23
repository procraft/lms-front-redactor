import React, { useMemo } from 'react'
import { AddButtonWidgetButton } from '../../buttons/AddButton'
import { AddContentEditorWidgetButton } from '../../buttons/AddContentEditorWidgetButton'
import { AddHeadWidgetButton } from '../../buttons/AddHead'
import { AddImageWidgetButton } from '../../buttons/AddImageWidgetButton'
import { AddVideoWidgetButton } from '../../buttons/AddVideoWidgetButton'
import { AddWidgetButtonButtonProps } from '../../buttons/interfaces'
import { AddWidgetModalContextValue } from '../../Context'

type AddWidgetModalDefaultBlocks = AddWidgetButtonButtonProps & {
  context: AddWidgetModalContextValue | null
}

export const AddWidgetModalDefaultBlocks: React.FC<
  AddWidgetModalDefaultBlocks
> = ({ addComponent, closeHandler, object, context }) => {
  const buttons = useMemo(() => {
    return context?.buttons.map((Button, index) => {
      return (
        <Button
          key={index}
          closeHandler={closeHandler}
          object={object}
          // updateObject={updateObject}
          addComponent={addComponent}
        />
      )
    })
  }, [addComponent, closeHandler, context?.buttons, object])

  return (
    <div role="secondaryButtons">
      <AddContentEditorWidgetButton
        closeHandler={closeHandler}
        object={object}
        // updateObject={updateObject}
        addComponent={addComponent}
      />
      <AddImageWidgetButton
        closeHandler={closeHandler}
        object={object}
        // updateObject={updateObject}
        addComponent={addComponent}
      />
      <AddVideoWidgetButton
        closeHandler={closeHandler}
        object={object}
        // updateObject={updateObject}
        addComponent={addComponent}
      />
      <AddHeadWidgetButton
        closeHandler={closeHandler}
        object={object}
        addComponent={addComponent}
      />
      <AddButtonWidgetButton
        closeHandler={closeHandler}
        object={object}
        addComponent={addComponent}
      />
      {buttons}
    </div>
  )
}
