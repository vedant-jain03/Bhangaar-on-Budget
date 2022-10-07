import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import { Link } from "react-router-dom"
import Logo from "../Logo1.png"
import Earth from "../Earth.png"
import Garbage2 from "../Garbage2.png"

function Homepage() {
    return (
        <div>
            <div className="landing-page">
                <div className="left">
                <div>
                <img src={Logo} style={{ width: '30rem', borderRadius: '10px', marginRight:'2rem' }} alt="" />
                </div>
                    <p className="para">
                        Don't know what to do with the pile of garbage? <br />
                        <b><i>Sell or Donate</i></b> us in <b><i>Bhangaar on Budget</i></b> and get exciting and reasonable refunds.
                        Reach out to numerous NGOs. <br />
                        Get your garbage recycled and reused! <br />
                        <i>Save the environment, help the mankind!</i>
                    </p>
                    <div className="buttons">
                        <Link className="primary-button" to="sell-scrap">Sell your Scrap</Link>
                        <Link className="secondary-button" to="products">Buy Product</Link>
                    </div>
                </div>
                <div>
                    <img src={Earth} style={{ width: '37rem', borderRadius: '10px', marginRight:'2rem' }} alt="" />
                </div>
            </div>
            
            <div className="landing-page about">
                <div>
                <img src={Garbage2} style={{ width: '33rem', borderRadius: '10px', marginRight:'2rem' }} alt="" />
                </div>
                <div className="left">
                <center><h1 className="sub-heading" id="about">About Us</h1></center>
                    <div className="para">We in Bhangaar on Budget are working towards a green and clean environment by reusing and recycling the waste materials found in our house. The waste products or "Kabaad" of someone can turn out to be useful for someone else. Without disrupting the livelihood of the "kabaadiwalas" we are trying to work with/for them to make the connection between the buyer and the seller more smooth and transparent.</div>
                </div>
            </div>
            <div className="section services" style={{ height: '70vh' }}>

                <center><h1 className="sub-heading" id="services">Our Services</h1></center>
                <p className="para" style={{ width: '70%' }}>Bhangaar on Budget offer variety of services to dispose your scrap at it upmost value and contribute to the environment!</p>
                <div className="card-wrapper">
                    <div className="service-card">
                        
                        <img src="https://www.thekabadiwala.com/images/landing/hand.svg" alt="" />
                        <h3>Helping Hands</h3>
                        <p>We provides you a great opportunities to help others. Donate your old books,Clothes and will be used by NGO's.</p>
                    </div>
                    <div className="service-card">
                        <img src="https://www.thekabadiwala.com/images/landing/weight-machine.svg" alt="" />
                        <h3>Fixed and standard Prices</h3>
                        <p>Trust us when we talk about fair and transparent deal with you.  Standard prices are our priority.</p>
                    </div>
                    <div className="service-card">
                        <img src="https://www.thekabadiwala.com/images/landing/rupee-arrow.svg" alt="" />
                        <h3>Easy Accessible</h3>
                        <p>Our user friendly website ensures you comfort and a hassle free scrap selling experience like never before!</p>
                    </div>
                </div>
            </div>
            <div className="section about">
                <center><h1 className="sub-heading" id="sell-donate">Sell your Scrap</h1></center>
                <div className="services-step-container" style={{ display: 'flex', margin: '2rem 0' }}>
                    <div className="sell-scarp-steps">
                        <div className="center-line"></div>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-1.svg" alt="" />
                            <h1 className="card-h">1. Select Scrap You want to Sell.</h1>
                        </div>
                        <span className="line"></span>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-2.svg" alt="" />
                            <h1 className="card-h">2. Choose the Date to pick up the scrap.</h1>
                        </div>
                        <div className="step-card">
                            <img src="https://www.thekabadiwala.com/images/landing/step-3.svg" alt="" />
                            <h1 className="card-h">3. "Kabadiwala" will arrive at your Door-step.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="/"> BhangaarOnBudget.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Homepage
