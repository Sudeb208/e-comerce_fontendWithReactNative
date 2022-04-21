import { createContext } from "react"


const ThemeContext = createContext({
    theme: 'light',
    onchange: () => {}
})

export default ThemeContext