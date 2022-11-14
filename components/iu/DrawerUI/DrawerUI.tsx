import * as React from 'react'
import Drawer from '@mui/material/Drawer'

import styles from './styles.module.scss'

interface Props {
  side: 'top' | 'left' | 'bottom' | 'right'
  children: React.ReactNode
  isOpen: boolean
  onClickClose: () => void
}

export const DrawerUI = ({
  children,
  side,
  isOpen,
  onClickClose
}: Props): JSX.Element => {
  return (
    <Drawer
      onClose={onClickClose}
      anchor={side}
      open={isOpen}
      className={styles.drawerContainer}
      transitionDuration={500}
      PaperProps={{
        sx: {
          backgroundColor: '#010101'
        }
      }}>
      {children}
    </Drawer>
  )
}
