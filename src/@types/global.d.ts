import { RedactorComponentClickEvent, RedactorComponentActiveEvent, RedactorComponentHoveredEvent, RedactorComponentSaveAllEvent } from "../FrontEditor/Context";

// https://github.com/microsoft/TypeScript/issues/28357#issuecomment-664144063
declare global {
  interface DocumentEventMap {
    "redactorComponentClick": RedactorComponentClickEvent;
    "redactorComponentActive": RedactorComponentActiveEvent;
    "redactorComponentHovered": RedactorComponentHoveredEvent;
    "redactorComponentSaveAllEvent": RedactorComponentSaveAllEvent;
  }
}

export default global;
