import { RedactorComponentClickEvent, RedactorComponentActiveEvent, RedactorComponentHoveredEvent } from "../FrontEditor/Context";

// https://github.com/microsoft/TypeScript/issues/28357#issuecomment-664144063
declare global {
  interface DocumentEventMap {
    "redactorComponentClick": RedactorComponentClickEvent;
    "redactorComponentActive": RedactorComponentActiveEvent;
    "redactorComponentHovered": RedactorComponentHoveredEvent;
  }
}

export default global;
