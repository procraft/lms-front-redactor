import { RedactorComponentWrapperProps } from "../interfaces";

export type RedactorComponentWrapperHTMLEditorProps = {

  element: RedactorComponentWrapperProps["element"]
  object: RedactorComponentWrapperProps["object"]
  updateObject: RedactorComponentWrapperProps["updateObject"]
  parent: RedactorComponentWrapperProps["parent"]
  updateParent: RedactorComponentWrapperProps["updateParent"]

  htmlEditorOpenedSetter: React.Dispatch<React.SetStateAction<boolean>>
}
