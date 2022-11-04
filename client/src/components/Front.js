import React from "react";
import './Front.css'
import logo from './logo.png'
import logo2 from './heroimg.png'
import about from './about.jpeg'
import value1 from './value1.png'
import value2 from './value2.png'
import value3 from './value3.png'
import feature1 from './feature1.jpeg'
import feature2 from './feature2.jpg'
import { NavLink } from "react-router-dom";
// import ContactFront from "./ContactFront";

const Front = () => {
    return(

        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
           

             <header id="header" class="header fixed-top">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" class="logo d-flex align-items-center" style={{textDecoration:"none"}}>
                        <img src={logo} alt="img"/>
                            <span>Healcap Technologies</span>
                    </a>
                    <nav id="navbar" class="navbar">
                        <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                        <li><a class="nav-link scrollto" href="#values">Services</a></li>
                        
                       <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><NavLink  style={{textDecoration:"none"}} class="getstarted" to="/login">Get Started</NavLink></li>
                        </ul>
                        
                    </nav>
                </div>
            </header>
            <section id="hero" class="hero d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">HealCap:Just Heal Your Patients,<br/>we'll manage your Capital</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We help Hospitals to manage Patients insurance claim digitally with advanced technology.</h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div class="text-center text-lg-start">
                                    <a href="/login"  style={{textDecoration:"none"}} class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src={logo2} class="img-fluid" alt="img"/>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                
                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">
                        <div class="row gx-0">
                            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                                <div class="content">
                                    <h3>Who We Are</h3>
                                    <h2>Healcap Technologies is a leading provider of software solutions focused on healthcare information exchange and authentication. we are leading Payer-Provider Network.</h2>
                                    <p>Healcap Technologies host the Electronic Preauthorization Manager (EPM) and Electronic Claims Manager (ECM)  which enables Providers and Payers to use an electronic data interchange (EDI) technology to exchange information electronically to manage the entire cashless claims process.</p>
                                    <div class="text-center text-lg-start">
                                        <a href="#" style={{textDecoration:"none"}} class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                            <span>Read More</span>
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                                <img src={about} class="img-fluid" alt="img"/>
                            </div>
                        </div>
                    </div>
                </section>   
                
                <section id="values" class="values">
                    <div class="container" data-aos="fade-up">
                        <header class="section-header">
                            <h2>Our Values</h2>
                            <p>Advanced Insurance Claim Management </p>
                        </header>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="box" data-aos="fade-up" data-aos-delay="200">
                                    <img src={value1} class="img-fluid" alt="value1"/>
                                    <h3>Best Technology for Information Interchange</h3>
                                    <p>Fill a Pre-authorization form, attach documents and send to the Insurance Company</p>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="box" data-aos="fade-up" data-aos-delay="400">
                                    <img src={value2} class="img-fluid" alt="value2"/>
                                    <h3>Track Status using the Dashboard</h3>
                                    <p>Access your patients info on a single page with our interactive dashboard</p>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="box" data-aos="fade-up" data-aos-delay="600">
                                    <img src={value3} class="img-fluid" alt="value3"/>
                                    <h3>Interact with the data</h3>
                                    <p>Export a CSV file or just checkout the Pie Chart </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="features" class="features">
                    <div class="container" data-aos="fade-up">
                        <header class="section-header">
                            <h2>Features</h2>
                            <p>Why Choose HealCap?</p>
                        </header>
                        <div class="row">
                            <div class="col-lg-6">
                                <img src={feature1} class="img-fluid" alt="featureimg"/>
                            </div>
                            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
                                <div class="row align-self-center gy-4">
                                    <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                                        <div class="feature-box d-flex align-items-center">
                                            <i class="fas fa-check"></i>
                                            <h3>Quicker settlement of claims</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                                        <div class="feature-box d-flex align-items-center">
                                            <i class="fas fa-check"></i>
                                            <h3>Discharge Patients Faster</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                                        <div class="feature-box d-flex align-items-center">
                                            <i class="fas fa-check"></i>
                                            <h3> Higher customer satisfaction</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                                        <div class="feature-box d-flex align-items-center">
                                            <i class="fas fa-check"></i>
                                            <h3>Reduce Manual and Physical Movement</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                                        <div class="feature-box d-flex align-items-center">
                                            <i class="fas fa-check"></i>
                                            <h3>Single window of operation</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                                        <div class="feature-box d-flex align-items-center">
                                            <i class="fas fa-check"></i>
                                            <h3>Quick Data Analysis</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row feture-tabs" data-aos="fade-up">
                           <div class="col-lg-6">
                                <h3>What is current system? How will healcap change it?</h3>
                              <br/>
                                <div class="tab-content">
                                    <div id="tab1" class="tab-pane fade show active" >
                                        <p>Currently claim settlement process is done manually and is a paper-based system leading to Legibility issues with handwritten claims forms.In the current system information is passed through unstructured medium – Fax / Email which leads to improper management of some of the important data required at the last minute. Being a manual process, status is also not visible to everyone and it is required to call the payer and check , potentially higher turn around time is required on payer side</p>
                                        <br/>
                                        <div class="d-flex align-items-center mb-2">
                                            <i class="bi bi-check2"></i>
                                            <h4>HealCap establishes a platform between the hospitals and the insurance companies/TPAs </h4>
                                        </div>
                                        <br/>
                                        <p>It facilitates capturing and exchanging of relevant data for the claim settlement process electronically.. It is a paperless solution which could be adopted by all hospitals and would not only benefit the Hospitals to manage patients claim efficiently but would also help the insurance companies in providing a smooth service to their customers when they need it the most.</p>
                                        <div class="d-flex align-items-center mb-2">
                                            <i class="bi bi-check2"></i>
                                            <h4></h4>
                                        </div>
                                        <p></p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src={feature2} class="img-fluid" alt="tabimg" style={{height:'500px',marginLeft:'50px'}}/>
                            </div>
                        </div>

                       


            </div>
            </section>
            {/* <ContactFront/> */}
           
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </header>
                    <div class="row gy-4">
                        <div class="col-lg-6">
                            <div class="row gy-4">
                                <div class="col-md-6">
                                    <div class="info-box">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <h3>Address</h3>
                                        <p>Navi Mumbai,<br/>India, IN 400604</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info-box">
                                        <i class="fas fa-phone-alt"></i>
                                        <h3>Call Us</h3>
                                        <p>+91 5589 55488 55<br/>+91 6678 254445 41</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info-box">
                                        <i class="far fa-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>healcap@gmail.com<br/>contacthealcap@gmail.com</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info-box">
                                        <i class="far fa-clock"></i>
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form action="" method="post" class="php-email-form">
                                <div class="row gy-4">
                                    <div class="col-md-6">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required/>
                                    </div>

                                    <div class="col-md-6 ">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
                                    </div>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
                                    </div>

                                    <div class="col-md-12">
                                        <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
        <footer id="footer" class="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" style={{textDecoration:"none"}} class="logo d-flex align-items-center">
                                <img src={logo} alt="logo"/>
                                <span>Healcap Technologies</span>
                            </a>
                            <p>We help Hospitals to manage Patients insurance claim digitally with advanced technology</p>
                            <div class="social-links mt-3">
                                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
          
                        <div class="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="fas fa-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        {/* <div class="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i class="fas fa-chevron-right"></i> <a href="#"></a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#"></a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#"></a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#"></a></li>
                                <li><i class="fas fa-chevron-right"></i> <a href="#"></a></li>
                            </ul>
                        </div> */}

                       <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                Nerul ,  <br/>
                                Navi Mumbai,<br/>
                                India <br/><br/>
                                <strong>Phone:</strong> +19 5589 55488 55<br/>
                                <strong>Email:</strong> healcap@gmail.com<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>

    )
}

export default Front