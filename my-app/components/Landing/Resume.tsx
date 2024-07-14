"use client"
import React, {useState} from 'react'
import Experiences from './Resume/Experiences'
import General from './Resume/General'

const Resume = () => {
    const [tab, setTab] = useState('general')

    const renderTab = (tab: string) => {
        switch(tab) {
            case 'general':
                return <General/>
            case 'experiences':
                return <Experiences/>
            default:
                return <General/>
        }
    }

    return(
        <div className="flex pt-12 pb-24">
            {/* TABS */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <p>Resume in Detail</p>
                <div role="tablist" className="tabs tabs-bordered">
                    <a role="tab" className="tab">Tab 1</a>
                    <a role="tab" className="tab tab-active">Tab 2</a>
                    <a role="tab" className="tab">Tab 3</a>
                </div>

            </div>

            {renderTab(tab)}

        </div>

    )


}

export default Resume