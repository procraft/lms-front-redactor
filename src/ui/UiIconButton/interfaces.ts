import { IconButtonProps } from 'material-ui/IconButton'

export type UiIconButtonProps = IconButtonProps & {
  callback: (event: MouseEvent) => void
}
