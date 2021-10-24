import axios from 'axios';
import React, { useState, useContext } from 'react'
// import "./form.css"
import { Link, useHistory } from "react-router-dom";
// import { usercontext } from '../Contexts/usercontext';
// import { useEffect } from 'react';
import {userContext} from "../App"
function Login() {
    const {userexist,setuserexist,setuserdetails} = useContext(userContext);
    const history = useHistory()
    const [email,setemail]=useState();
    const [password,setpassword] = useState();
    const submit = async(e)=>{
        e.preventDefault();
        const user_login = await axios.post('/login',{email,password});
        if(user_login.status === 200){
            alert('User Logged In Successfully');
            setuserexist(true);
            localStorage.setItem('userexist',"true");
            const userData = await user_login.data;
            await setuserdetails(userData.user);
            localStorage.setItem('userdetails',JSON.stringify(userData.user));
            history.push('/');
        }
    }
    return (
        <div class="login_register">
            <div className="left">
                <a href="#">Bhangaar On Budget</a>
                <img src="https://pratibharana.com/wp-content/uploads/2021/04/web-development-banner.jpg" alt="" />
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam impedit assumenda tenetur placeat saepe quod, repellendus odio dolor fuga necessitatibus.</h3>
            </div>
            <div className="right">
                <h2>Welcome</h2>
                <h4>Sign in to your Account</h4>
                <div className="inputfields">
                    <p>Username</p>
                    <input type="text" autoComplete="true" value={email} onChange={e=>setemail(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Password</p>
                    <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
                </div>
                <button onClick={submit}>Login</button>
                {/* <p className="para">{error}</p> */}
                <p className="para">Not have account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login