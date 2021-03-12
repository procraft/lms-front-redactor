export type LmsFrontRedactorModalProps = {
  title: string | JSX.Element
  close: () => void
  buttons?: JSX.Element | (JSX.Element | null)[]
  secondaryButtons?: JSX.Element[]
  containerRef?: (el: HTMLDivElement) => void
}
