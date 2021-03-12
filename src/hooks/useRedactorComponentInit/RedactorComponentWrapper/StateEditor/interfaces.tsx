import { RedactorComponentProps } from "../../../../RedactorComponent/interfaces";
import { LmsFrontRedactorModalProps } from "../../../../ui/Modal/interfaces";

export type LmsFrontRedactorStateEditorProps = {
  object: RedactorComponentProps['object']
  updateObject: RedactorComponentProps['updateObject']
  close: LmsFrontRedactorModalProps['close']
}
