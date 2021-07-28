import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M, { } from 'materialize-css';
const Home = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <div>
            <div className="container-fluid">
                <div className="carousel carousel-slider center white-text ">
                    <div className="carousel-item img-responsive" id="img1" style={{ backgroundImage: 'url("images/img2.jpg")' }}>
                        <h2>" Becoming is better than being "</h2>
                        <p> —Carol Dweck</p>
                    </div>
                    <div className="carousel-item img-responsive" id="img2" style={{ backgroundImage: 'url("images/img1.jpg")' }}>
                        <h2>" Intelligence is the ability to adapt to change "</h2>
                        <p>—Stephen Hawking</p>
                    </div>
                    <div className="carousel-item img-responsive" id="img3" style={{ backgroundImage: 'url("images/img3.png")' }}>
                        <h2>“Talent wins games, but teamwork and intelligence win championships.”</h2>
                        <p> -Michael Jordan</p>
                    </div>
                    <div className="carousel-item img-responsive" id="img4" style={{ backgroundImage: 'url("images/img4.jpg")' }}>
                        <h2>" The question isn’t who’s going to let me; it’s who is going to stop me? "</h2>
                        <p> —Ayn Rand</p>
                    </div>
                </div>
            </div>
            <div className="container">
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
            <div>
                <div style={{ fontFamily: "Libre Baskerville" }}>
                    <div>
                        <h1 style={{ textAlign: "center", fontFamily: "Tourney" }}>
                            Career
                        </h1>
                    </div>
                    <div className="container-fluid">
                        <div class="parallax-container">
                            <div class="parallax black-text">
                                <img src="images/career.jpg" id="paralaximg"></img>
                            </div>
                            <div style={{ margin: '10px', fontFamily: " 'Bona Nova', serif" }}>
                                <h4>Think outside the box.....!</h4>
                                <h4>Find the internship you deserve</h4>
                                <Link to="/internships" className="btn waves-effect white black-text darken-text-2" >Click to know more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className="page-footer grey">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h3 className="brand-logo left">TCE</h3>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Contact us</h5>
                                <ul>
                                    <li><Link className="grey-text text-lighten-3" to="#!">Phone: 2568974</Link></li>
                                    <li><Link className="grey-text text-lighten-3" to="#!">Email: tceofficial@tce.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container center">
                            © 2014 TCE copyright
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Home