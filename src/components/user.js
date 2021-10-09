import React from 'react'

export default function user(props) {
    return (
        <div className="card">
            <img src={props.el.avatar} alt="404"/>
            <div className="writeup">
                <h3> User ID : {props.el.id}</h3>
                <h3> Name : {props.el.first_name} {props.el.last_name}</h3>
                <h3> Email : {props.el.email}</h3>
            </div>
        </div>
    )
}
