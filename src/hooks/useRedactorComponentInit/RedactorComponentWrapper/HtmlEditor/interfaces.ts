import { RedactorComponentWrapperProps } from "../interfaces";

export type RedactorComponentWrapperHTMLEditorProps = {

  element: RedactorComponentWrapperProps["element"]
  object: RedactorComponentWrapperProps["object"]
  updateObject: RedactorComponentWrapperProps["updateObject"]

  htmlEditorOpenedSetter: React.Dispatch<React.SetStateAction<boolean>>
}
