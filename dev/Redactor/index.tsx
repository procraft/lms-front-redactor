import React, { useMemo } from 'react'
import App from '../../src'
import { RedactorComponentObject } from '../../src'
import {
  AddWidgetModalContext,
  AddWidgetModalContextValue,
} from '../../src/ui/AddWidgetButton/AddWidgetModal/Context'
import { useRedactorStoreDev } from '../hooks/useRedactorStoreDev'
import { AddWidgetButtonCourseDev } from './addWidgetButtons/AddWidgetButtonCourse'
import { getRedactorObjectComponent, linksList } from './data'

type DevRedactorProps = {
  initialObject: RedactorComponentObject
  redactorKey: string
}

export const DevRedactor: React.FC<DevRedactorProps> = ({
  initialObject,
  redactorKey,
  ...other
}) => {
  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
    objectTemplates,
  } = useRedactorStoreDev({
    key: redactorKey,
    initialObject,
  })

  const addWidgetModalContextValue = useMemo<AddWidgetModalContextValue>(() => {
    const content: AddWidgetModalContextValue = {
      buttons: [AddWidgetButtonCourseDev],
    }

    return content
  }, [])

  return (
    <div
      id="component-wrapper"
      style={{
        marginBottom: 20,
        marginTop: 15,
        paddingTop: 30,
      }}
    >
      {toolbar}
      <AddWidgetModalContext.Provider value={addWidgetModalContextValue}>
        <div id="component">
          {object ? (
            <App
              inEditMode={inEditMode}
              object={object}
              updateObject={updateObject}
              getRedactorObjectComponent={getRedactorObjectComponent}
              objectTemplates={objectTemplates}
              linksList={linksList}
              showHiddenTags={true}
              {...other}
            />
          ) : null}
        </div>
      </AddWidgetModalContext.Provider>
    </div>
  )
}
