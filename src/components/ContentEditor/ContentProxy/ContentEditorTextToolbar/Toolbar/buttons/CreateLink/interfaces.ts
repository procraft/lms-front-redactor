import {
  ToolbarCommandButtonProps,
  useToolbarCommandButtonProps,
} from '../interfaces'

export type CreateLinkButtonProps = ToolbarCommandButtonProps & {
  opened: boolean
  openedSetter: React.Dispatch<React.SetStateAction<boolean>>
  clickCoords: {
    x: number
    y: number
  } | null
}

export type useCreateLinkButtonProps = useToolbarCommandButtonProps & {}
