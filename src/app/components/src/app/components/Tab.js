'use client';
import {useState} from 'react';
import './Tab.css'

function TabHeader(props) {
    return <div className={"tab-header"}

            onClick={props.onClick}>
            {props.title}
        </div>;
}
/*
function TabBody(props) {
    return (
        <div className="tab-page">
            {props.children[props.activeTab]}
        </div>;
    )
}*/

export default function Tab({headers,children})
{
    console.log('Render Tab');
    const [activeTab, setActiveTab] = useState(0);

    const changeTabHandler = (index) => {
        console.log('Change Tab handler');
        setActiveTab(index);
    }
    return(<div>
        { headers.map((title,index)=>
            <TabHeader key={index} onClick={() => changeTabHandler(index)} title= {title}/>)
        }
        <div className={'tab-page'}>
            {children[activeTab]}

            </div>
    </div>);
}