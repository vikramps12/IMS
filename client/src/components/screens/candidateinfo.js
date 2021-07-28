import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link} from "react-router-dom";
import M from 'materialize-css'

const Candidateinfo = () => {
    const [data, setData] = useState([]);
    const getCandidates = ()=> {
        setData([]);
        Axios.get("/candidateinfo").then((res) => {
            setData(res.data);
        }, (error) => {
            console.log(error);
        }); 
    }
    
    useEffect(() => {
        getCandidates();
    }, []);

    const Accept =(ID,sel)=>{
        Axios.get("/edit/"+ID+"/"+sel)
        .then((res) => {
            M.toast({html:res.data.message,classes:"green lighten-3"});
            getCandidates();
          }, (error) => {
            console.log(error);
          }); 
    }
    const Delete =(ID)=>{
        if(window.confirm('Delete the item?')){
            Axios.get("/delete/"+ID)
            .then((res) => {
                M.toast({html:res.data.message,classes:"red lighten-3"});
                getCandidates();
               }, (error) => {
                 console.log(error);
               });
        }
        else{
            return
        }
    }
    return (
        <div>
            <br></br>
            <div className="row">
                <div className="col sm-12 m2">
                    <Link to="/candidateinfo" className="btn waves-effect white black-text darken-text-2 green lighten-3">Applied Candidates</Link>
                </div>
                <div className="col sm-12 m2">
                    <Link to="/mentoralotment" className="btn waves-effect white black-text darken-text-2">Mentor Allotment</Link>
                </div>
                <div className="col sm-12 m2">
                    <Link to="/selectedcandidates" className="btn waves-effect white black-text darken-text-2">Selected Candidates</Link>
                </div>
            </div>
            <div className="container">
                <table>
                    <thead>
                        <tr style={{ textAlign: "center" }}>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job ID</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(candidate =>
                            <tr id={candidate.ID}>
                                <td>{candidate.name}</td>
                                <td>{candidate.email}</td>
                                <td>{candidate.jobID}</td>
                                <td>{candidate.phone}</td>
                                <td>{candidate.age}</td>
                                <td>
                                    <Link className="btn waves-effect white black-text darken-text-2" onClick={()=>Accept(candidate.ID,candidate.selected)}>Accept</Link>
                                    <Link className="btn waves-effect white black-text darken-text-2" 
                                        onClick={()=>Delete(candidate.ID)}>Delete</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Candidateinfo