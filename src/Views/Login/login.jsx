import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {signin} from '../../Controllers/Redux/authSlice'
import './login.css';
export default () => {
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name:"",
        password:""
    })

    function inputChange(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
    }
    
    return(
        <div>
            <form>
                <h1>Login;</h1>
                <input name='name' placeholder='Name' onChange={} value={}></input>
                <input name='password' type='password' placeholder='password' onChange={} value={}></input>
                <button type="submit" onClick={}></button>
            </form>
        </div>

    )
}