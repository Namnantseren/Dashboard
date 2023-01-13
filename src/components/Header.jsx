import React from "react";
import '../Style/Header.css'
import { useNavigate } from "react-router-dom"

export default function Header(){
    const navigate = useNavigate();

    const urlChangeHandler = () => {
        navigate("/products")
    }

    const func = () => {
        navigate("/Login")
    }

    const log = () => {
        navigate("/Home")
    }
    return (
        <div className="header">
            <button onClick={urlChangeHandler}>products</button>
            <button onClick={func}>Login</button>
            <button onClick={log}>Home</button>
        </div>
    )
}