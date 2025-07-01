import React from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center p-4 w-full h-screen">
            <div className="w-20 h-20 border-4 border-black border-dashed rounded-full animate-spin" />
        </div>
    )
}
export default Spinner
