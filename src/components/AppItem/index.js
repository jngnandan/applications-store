// Write your code here


import React from 'react'

function AppItem(props) {
    const { appsList } = props
    const { appId, appName, imageUrl, category } = appsList

    return (
        <button value={category} className="bg-white rounded rounded shadow-xl w-36 h-44 p-3 m-2 flex flex-col justify-center items-center">
            <img className="w-20" src={imageUrl} alt={appName} />
            <p className="pt-2 font-bold text-gray-700">{appName}</p>
        </button>
    )
}

export default AppItem


