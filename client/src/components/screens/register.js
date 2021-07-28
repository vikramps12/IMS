import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Register = () => {
    const history = useHistory();
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[age,setAge] = useState('')
    const[phone,setPhone] = useState('')
    const[college,setCollege] = useState('')
    const[jobid,setJobid] = useState('')
    const Postinfo = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"Invalid email",classes:"red darken-3"})
            return
        }
        if(jobid<1000 || jobid>1013)
        {
            M.toast({html:"Invalid job ID",classes:"red darken-3"})
            return
        }
        if(age<18 || age>25)
        {
            M.toast({html:"Not elligible for internship",classes:"red darken-3"})
            return
        }
            fetch("/register",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                email,college,name,age,phone,jobid,
            })
        }).then(res=>res.json())
        .then(result=>{
            if(result.error){
                M.toast({html:result.error,classes:"red darken-3"})
            }
            else{
                M.toast({html:result.message,classes:"green darken-3"})
                history.push('/')
            }
        })
  
    }
    return (
        <div className="row registercard">
            <div className="card registerauthcard">
                <h2 style={{ "font-family": " 'Bona Nova', serif" }}>Candidate register form</h2>
                <input type="text" name="name" placeholder="Name" value={name}  onChange={(e)=>setName(e.target.value)} ></input>
                <input type="email" name="email" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="number" name="age" placeholder="Age" value={age}  onChange={(e)=>setAge(e.target.value)}></input>
                <input type="number" name="phone" placeholder="Phone" value={phone}  onChange={(e)=>setPhone(e.target.value)}></input>
                <input type="text" name="college" placeholder="College" value={college}  onChange={(e)=>setCollege(e.target.value)} ></input>
                <input type="number" name="jobid" placeholder="JobID" value={jobid}  onChange={(e)=>setJobid(e.target.value)} ></input>
                <button className="btn waves-effect waves-light" type="submit" onClick={()=>Postinfo()} >Submit</button>
            </div>
        </div>
    )
}

export default Register