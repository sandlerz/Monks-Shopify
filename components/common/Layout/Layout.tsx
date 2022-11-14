import { CartSidebar } from 'components/cart'
import { DrawerMenu } from 'components/common/Navbar/DrawerMenu'
import { DrawerUI } from 'components/iu'
import { ModalUI } from 'components/iu/ModalUI'
import { SubscribeDiscount } from 'components/modals'
import { useUI } from 'context/UIProvider'
import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar/Navbar'
import { Ribbon } from '../Ribbon'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  const {
    isLeftDrawerOpen,
    closeLeftDrawer,
    isRightDrawerOpen,
    closeRightDrawer,
    isModalOpen,
    closeModal
  } = useUI()

  return (
    <>
      <header>
        <Ribbon text="FREE SHIPPING ON ORDERS OVER $30" />
        <ModalUI isOpen={isModalOpen} onClose={closeModal}>
          <SubscribeDiscount />
        </ModalUI>
        <DrawerUI
          side="right"
          isOpen={isRightDrawerOpen}
          onClickClose={closeRightDrawer}>
          <CartSidebar />
        </DrawerUI>
        <DrawerUI
          side="left"
          isOpen={isLeftDrawerOpen}
          onClickClose={closeLeftDrawer}>
          <DrawerMenu />
        </DrawerUI>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
