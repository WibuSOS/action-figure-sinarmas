import {createContext, useReducer, useContext} from 'react'
const Store = createContext()
const useStore = ()=> useContext(Store)
// Store.displayName = "store"
export {Store, useStore}
function AccountReducer(state, action) {
    switch (action.type) {
      case 'set': {
        return {...state, user:action.payload}
      }
      case 'delete': {
        return {...state, user:null};
      }
      default: {
        console.log("not found"+action.type)
        // throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
}
export default function UserContext({children}){
    const [state, dispatch] = useReducer(AccountReducer, {user: null},()=>{
        const name = localStorage.getItem("name")
        return{user:name !== undefined && name != null ? name : null}
    })
    const value = {state, dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}