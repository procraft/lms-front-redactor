/// <reference types="jest" />
/// <reference types="cypress" />

import {
  RedactorComponentClickEvent,
  RedactorComponentActiveEvent,
  RedactorComponentHoveredEvent,
  RedactorComponentSaveAllEvent,
  RedactorComponentUpdateObjectEvent,
  RedactorComponentUpdatedObjectEvent,
} from '../FrontEditor/Context'

// https://github.com/microsoft/TypeScript/issues/28357#issuecomment-664144063
declare global {
  interface DocumentEventMap {
    redactorComponentClick: RedactorComponentClickEvent
    redactorComponentActive: RedactorComponentActiveEvent
    redactorComponentHovered: RedactorComponentHoveredEvent
    redactorComponentSaveAllEvent: RedactorComponentSaveAllEvent
    redactorComponentUpdateObjectEvent: RedactorComponentUpdateObjectEvent
    redactorComponentUpdatedObjectEvent: RedactorComponentUpdatedObjectEvent
  }
}

export default global
