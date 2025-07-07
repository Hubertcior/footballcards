import React from 'react'

const ButtonGroup = ({children}) => {
    return (
        <div className="flex flex-row gap-4 justify-center items-center p-2 bg-black/60 rounded-lg shadow-md">
            { children }
        </div>
    )
}
export default ButtonGroup


