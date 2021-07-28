import React from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import { carddata } from "../../carddata";

const Internships = () => {
    M.AutoInit();
    {
        return (
            <div>
                <div className="conatiner-fluid">
                    <div className="row">
                        <h3 style={{ textAlign: "center", fontFamily: "Tourney" }}>
                            Internship oportunities available
                        </h3>
                        <Link className="btn waves-effect grey black-text darken-text-2 right" to="/register">Apply for the internship</Link>
                    </div>
                </div>
                <div className="container">
                    <>
                        <div className="cards">
                            <div className="row">
                                {carddata.map((data, key) => {
                                    return (
                                        <div className="col s12 m4">
                                            <div className="card">
                                                <div className="card-image waves-effect waves-block waves-light" id="card_images">
                                                    <img className="activator" src={data.img}></img>
                                                </div>
                                                <div className="card-content">
                                                    <span style={{ textAlign: "center" }} className="card-title activator grey-text text-darken-4">{data.jobdesc}<i className="material-icons right">more_vert</i></span>
                                                    <h6 style={{ textAlign: "center" }}>Skills required</h6>
                                                    <h6 style={{ textAlign: "center" }}>{data.Skills}</h6>
                                                </div>
                                                <div className="card-reveal">
                                                    <span style={{ textAlign: "center" }} className="card-title activator grey-text text-darken-4">{data.jobdesc}<i className="material-icons right">close</i></span>
                                                    <h6 style={{ textAlign: "center" }}>Skills required:</h6>
                                                    <h6 style={{ textAlign: "center" }}>{data.Skills}</h6>
                                                    <h6>Job Id: {data.jobid}</h6>
                                                    <h6>Vacancies: {data.vacancies}</h6>
                                                    <h6>Stipend: {data.stipend}</h6>
                                                    <h6>Last date to apply: {data.date}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                </div>
            </div >
        )
    }
}
export default Internships