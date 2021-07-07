import React, { useState, createContext } from 'react'

export const OnHoverContext = createContext()

export const OnHoverProvider = (props) => {
    const [ isHovered, setIsHovered ] = useState(false)
    const mouseEnter = () => setIsHovered(true)
    const mouseLeave = () => setIsHovered(false)

    return (
        <OnHoverContext.Provider value={{ isHovered, mouseEnter, mouseLeave }}>
            {props.children}
        </OnHoverContext.Provider>
    )
    
}