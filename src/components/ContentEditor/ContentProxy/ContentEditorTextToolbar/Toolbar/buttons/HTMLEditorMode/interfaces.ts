import { RedactorComponentProps } from '../../../../../../..'
import {
  ToolbarCommandButtonProps,
  useToolbarCommandButtonProps,
} from '../interfaces'

export type HTMLEditorModeButtonProps = ToolbarCommandButtonProps & {
  opened: boolean
  openedSetter: React.Dispatch<React.SetStateAction<boolean>>
  // clickCoords: {
  //   x: number
  //   y: number
  // } | null

  /**
   * Корневая HTML-нода, из которой мы получаем редактируемый HTML
   */
  element: HTMLDivElement

  object: RedactorComponentProps['object']
  updateObject: RedactorComponentProps['updateObject']
}

export type useHTMLEditorModeButtonProps = useToolbarCommandButtonProps & {
  contentWrapper: HTMLEditorModeButtonProps['element']
  object: HTMLEditorModeButtonProps['object']
  updateObject: HTMLEditorModeButtonProps['updateObject']
}
