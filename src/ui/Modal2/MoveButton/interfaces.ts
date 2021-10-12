
export type MoveButtonProps = {
  stylesStateSetter: React.Dispatch<React.SetStateAction<{
    left: number;
    top: number;
  } | null>>
  modalElement: HTMLDivElement | null
}
