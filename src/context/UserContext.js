import { createContext, useReducer, useContext } from 'react'
const Store = createContext()
const useStore = () => useContext(Store)
// Store.displayName = "store"
export { Store, useStore }

function AccountReducer(state, action) {
  switch (action.type) {
    case 'set': {
      return { ...state, user: action.payload }
    }
    case 'delete': {
      return { ...state, user: null, bookmark: 0, history: 0, cart: 0 };
    }
    case 'setCart': {
      return { ...state, cart: action.payload }
    }
    case 'setBookmark': {
      return { ...state, bookmark: action.payload }
    }
    case 'setHistory': {
      return { ...state, history: action.payload }
    }
    case 'setDefault': {
      return { ...state, ...action.payload }
    }
    default: {
      console.log("not found" + action.type)
      // throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
export default function UserContext({ children }) {
  const [state, dispatch] = useReducer(AccountReducer, { user: null, history: 0, bookmark: 0, cart: 0 }, () => {
    const name = localStorage.getItem("name")
    return { user: (name !== undefined && name != null ? name : null), history: 0, bookmark: 0, cart: 0 }
  })
  const value = { state, dispatch }
  return <Store.Provider value={value}>{children}</Store.Provider>
}