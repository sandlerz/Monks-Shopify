import Modal from '@mui/material/Modal'

interface Props {
  children: JSX.Element
  isOpen: boolean
  onClose: () => void
}

export const ModalUI = ({ children, isOpen, onClose }: Props): JSX.Element => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <>{children}</>
    </Modal>
  )
}
