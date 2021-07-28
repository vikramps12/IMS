import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


const Candidateinfo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("/selectedcandidates").then((res) => {
            setData(res.data)
        }).then((res) => {
          }, (error) => {
            console.log(error);
          });
    }, [])
    return (
        <div>
            <br></br>
            <div className="row">
                <div className="col sm-12 m2">
                    <Link to="/candidateinfo" className="btn waves-effect white black-text darken-text-2 ">Applied Candidates</Link>
                </div>
                <div className="col sm-12 m2">
                    <Link to="/mentoralotment" className="btn waves-effect white black-text darken-text-2">Mentor Allotment</Link>
                </div>
                <div className="col sm-12 m2">
                    <Link to="/selectedcandidates" className="btn waves-effect white black-text darken-text-2 green lighten-3">Selected Candidates</Link>
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
                            <th>Mentor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(candidate =>
                            <tr id={candidate.ID}>
                                <td>{candidate.candidateName}</td>
                                <td>{candidate.email}</td>
                                <td>{candidate.jobid}</td>
                                <td>{candidate.phone}</td>
                                <td>{candidate.mentorName}</td>
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