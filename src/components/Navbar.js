import React from 'react'
import logo from "./imgg.png"

export default function Navbar(props) {
    return (
        <div id="navbar">
            <div className="logo"><img src={logo} alt="404"/></div>
            <button className="btn" onClick={()=>{
                props.loading(true);
                fetch('https://reqres.in/api/users?page=1').then((res) => {
                    return res.json();
                }).then((json) => {
                    props.user(json.data);
                    props.loading(false);
                })
            }}>Get User Data</button>
        </div>
    )
}
