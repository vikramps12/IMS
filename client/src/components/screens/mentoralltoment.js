import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import M from 'materialize-css'

const Mentor = () => {
    const [data, setData] = useState([]);
    const [mentor, setMentor] = useState([]);
    
    const getCandidates = () => {
        setData([]);
        Axios.get("/mentoralotment").then((res) => {
            setData(res.data);
        }, (error) => {
            console.log(error);
        });
    }

    const getMentors = ()=> {
        setMentor([]);
        Axios.get("/getmentors").then((res) => {
            setMentor(res.data);
        }, (error) => {
            console.log(error);
        }); 
    }

    useEffect(() => {
        getCandidates();
        getMentors();
    }, []);

    const Alocatementor = (ev, mid) => {
        let {name, value} = ev.target;
        Axios.get("/allocatementor/" + value + "/" + mid)
            .then((res) => {
                M.toast({ html: res.data.message, classes: "green lighten-3" })
                getCandidates();
            }, (error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <br></br>
            <div className="row">
                <div className="col sm-12 m2">
                    <Link to="/candidateinfo" className="btn waves-effect white black-text darken-text-2">Applied Candidates</Link>
                </div>
                <div className="col sm-12 m2">
                    <Link to="/mentoralotment" className="btn waves-effect white black-text darken-text-2 green lighten-3">Mentor Allotment</Link>
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
                            <th>Select Mentor</th>
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
                                    <select onChange={(ev) => Alocatementor(ev,candidate.ID)} >
                                        <option>Select</option>
                                        {mentor.map(m =>
                                            <option value = {m.Id}>{m.name}</option>
                                        )}
                                    </select>
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

export default Mentor