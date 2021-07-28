import React, { useEffect } from 'react';
import M from 'materialize-css';
import { clients } from "../../clients";
import { team } from "../../team";
const About = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <div>
            <div className="container">
                <div style={{ fontFamily: "Tourney", textAlign: "center" }}>
                    <h4><u>Company history</u></h4>
                </div>
                <div>
                    <div className="col s12 m12">
                        <div className="card horizontal grey lighten-2">
                            <div class="card-image responsive-img">
                                <img src="images/oldcompany.jpg"></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content" style={{ fontFamily: " 'Bona Nova', serif", textAlign: 'center' }}>
                                    <h6>
                                        Established in 1981, TCE is a NYSE listed global
                                        consulting and IT services company with more than
                                        267k employees. From a capital of US$250, we have
                                        grown to become a US$14.22 billion (LTM Q1 FY22 revenues)
                                        company with a market capitalization of approximately US$ 90.25 billion.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', fontFamily: " 'Bona Nova', serif", padding: '25px' }}>
                        <h6>
                            In our journey of 40 years, we have catalyzed
                            some of the major changes that have led to India's
                            emergence as the global destination for software
                            services talent. We pioneered the Global Delivery
                            Model and became the first IT Company from India to be
                            listed on NASDAQ. Our employee stock options program
                            created some of India's first salaried millionaires.
                        </h6>
                    </div>
                </div>
                <div>
                    <div style={{ fontFamily: "Tourney", textAlign: 'center' }}>
                        <h4> <u>VISION - MISSION - GOAL</u></h4>
                    </div>
                    <div>
                        <div className="col s12 m12">
                            <div className="card horizontal grey lighten-2">
                                <div class="card-image">
                                    <img src="images/visiion.png"></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p style={{ fontFamily: " 'Bona Nova', serif" }}>“TCE is a technology company whose mission is
                                            to empower every person and every organization on
                                            the planet to achieve more. We strive to create local
                                            opportunity, growth, and impact in every country around
                                            the world. Our strategy is to build best-in-class
                                            platforms and productivity services for an intelligent
                                            cloud and an intelligent edge infused with
                                            artificial intelligence.” </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12">
                            <div className="card horizontal grey lighten-2">
                                <div class="card-image">
                                    <img src="images/mission.png"></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p style={{ fontFamily: " 'Bona Nova', serif" }}>“Shape the future of the Internet by
                                            creating unprecedented value and
                                            opportunity for our customers, employees,
                                            investors, and ecosystem partners.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12">
                            <div className="card horizontal grey lighten-2">
                                <div class="card-image">
                                    <img src="images/goal.png"></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p style={{ fontFamily: " 'Bona Nova', serif" }}>“TCE's goal is to “to empower every person
                                            and every organization on the planet to
                                            achieve more.” 'Empowerment' is the key
                                            term in this goal statement.
                                            It represents the primary objective
                                            of the company and what the strategic
                                            tactics of the organization seek to achieve.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ fontFamily: "Tourney", textAlign: 'center' }}>
                        <h4>Our clients</h4>
                    </div>
                    <div>
                        <div class="row">
                            {clients.map((data, key) => {
                                return (
                                    <div class="col s12 m4">
                                        <div class="card blue-grey darken-1">
                                            <div class="card-image">
                                                <img src={data.img}></img>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ fontFamily: "Tourney", textAlign: 'center' }}>
                        <h4><u>TEAM</u></h4>
                    </div>
                    <div>
                        <div className="row">
                            {team.map((data, key) => {
                                return (
                                    <div class="col s12 m6">
                                        <div class="card horizontal blue-grey darken-1">
                                            <div class="card-image">
                                                <img style={{width:'15vw',height:'10vw'}} src={data.img}></img>
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content"style={{ fontFamily: " 'Bona Nova', serif",textAlign:'center' }}>
                                                    <h5>{data.name}</h5>
                                                    <h5>{data.post}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About