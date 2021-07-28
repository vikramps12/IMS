import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'
import { Usercontext } from '../../App'
const Login = () => {
    const { state, dispatch } = useContext(Usercontext)
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [email, setemail] = useState('')
    const Postdata = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "red darken-3" })
            return
        }
        fetch("/login", {
            method: "post",
            headers: {
                "content-type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(result => {
                if (result.error) {
                    M.toast({ html: result.error, classes: "red darken-3" })
                }
                else {
                    localStorage.setItem("jwt", result.token)
                    localStorage.setItem("user", JSON.stringify(result.result[0]))
                    dispatch({ type: "USER", payload: result })
                    M.toast({ html: result.message, classes: "green lighten-3" })
                    history.push('/')
                }
            })

    }
    return (
        <div>
            <div className="row mycard">
                <div className="card authcard">
                    <h2 style={{ fontFamily: " 'Bona Nova', serif" }}>Admin login form</h2>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} ></input>
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                    <button className="btn waves-effect waves-light" onClick={() => Postdata()} >Login</button>
                    <br></br>
                </div>
            </div>
        </div>

    )
}

export default Login
//or use cors