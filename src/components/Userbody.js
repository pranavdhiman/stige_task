import React from 'react'
import User from "./user"


export default function Userbody(props) {
    return (
        <div className="userbody">
           {props.loading?<div className="loader"></div>:
           props.user.map((el) => {
                    return <User key={el.id} el={el}/>
                })}
        </div>
    )
}
