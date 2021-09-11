import {createContext} from 'react'
const DropdownContext = createContext()

export const DropdownProvider = ({children}) =>{
    
    return (
    <DropdownContext.Provider value="şimdiliks" >{children}</DropdownContext.Provider>
    )
}
export default DropdownContext