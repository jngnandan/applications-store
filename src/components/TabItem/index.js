// Write your code here

import React from 'react'

function TabItem(props) {
    const { tabsList, changeTab, isActive } = props
    const { displayText, tabId } = tabsList
    const changedTab = isActive ? `font-bold underline` : `font-medium`

    const clickTab = () => {
        changeTab(tabId)
    }

    return (
        <button onClick={clickTab}>
            <p alt={tabId} value={tabId} className={`${changedTab} font-bold w-16 text-blue-500`}>{displayText}</p>
        </button>
    )
}

export default TabItem
