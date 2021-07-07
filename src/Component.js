import React, { useContext } from 'react'
import { OnHoverContext } from './HoverContext'

const Component = () => {
    const { isHovered, mouseEnter, mouseLeave } = useContext(OnHoverContext)
    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            {String(isHovered)}
        </div>
    )
}

export default Component