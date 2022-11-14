import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer
} from 'react'

export interface StateModifiers {
  openRightDrawer: () => void
  closeRightDrawer: () => void
  openLeftDrawer: () => void
  closeLeftDrawer: () => void
  openModal: () => void
  closeModal: () => void
}

export interface StateValues {
  isRightDrawerOpen: boolean
  isLeftDrawerOpen: boolean
  isModalOpen: boolean
}

const stateModifiers = {
  openRightDrawer: () => {},
  closeRightDrawer: () => {},
  openLeftDrawer: () => {},
  closeLeftDrawer: () => {},
  openModal: () => {},
  closeModal: () => {}
}

const initialState = {
  isRightDrawerOpen: false,
  isLeftDrawerOpen: false,
  isModalOpen: false
}

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState
})

type Action = {
  type:
    | 'OPEN_RIGHT_DRAWER'
    | 'CLOSE_RIGHT_DRAWE'
    | 'OPEN_LEFT_DRAWER'
    | 'CLOSE_LEFT_DRAWER'
    | 'OPEN_MODAL'
    | 'CLOSE_MODAL'
}

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case 'OPEN_RIGHT_DRAWER': {
      return {
        ...state,
        isRightDrawerOpen: true
      }
    }
    case 'CLOSE_RIGHT_DRAWE': {
      return {
        ...state,
        isRightDrawerOpen: false
      }
    }
    case 'OPEN_LEFT_DRAWER': {
      return {
        ...state,
        isLeftDrawerOpen: true
      }
    }
    case 'CLOSE_LEFT_DRAWER': {
      return {
        ...state,
        isLeftDrawerOpen: false
      }
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        isModalOpen: true
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false
      }
    }
  }
}

interface Props {
  children: ReactNode | ReactNode[]
}

export const UIProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openRightDrawer = () => dispatch({ type: 'OPEN_RIGHT_DRAWER' })
  const closeRightDrawer = () => dispatch({ type: 'CLOSE_RIGHT_DRAWE' })

  const openLeftDrawer = () => dispatch({ type: 'OPEN_LEFT_DRAWER' })
  const closeLeftDrawer = () => dispatch({ type: 'CLOSE_LEFT_DRAWER' })

  const openModal = () => dispatch({ type: 'OPEN_MODAL' })
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })

  const value = useMemo(
    () => ({
      ...state,
      openRightDrawer,
      closeRightDrawer,
      openLeftDrawer,
      closeLeftDrawer,
      openModal,
      closeModal
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.isRightDrawerOpen, state.isLeftDrawerOpen, state.isModalOpen]
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export const useUI = () => useContext(UIContext)
