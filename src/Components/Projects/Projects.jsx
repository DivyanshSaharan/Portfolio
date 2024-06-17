import React, { useState } from 'react';
import "./projects.css";
const Projects = () => {
    const [toggleState,setToggleState]=useState(0);
    const toggleTab=(ind)=>{
        setToggleState(ind)
    }
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title diffTitle">Projects</h2>
        {/* <span className="section__subtitle">My technical level</span> */}
        <div className="projects__container container grid">
            <div className="project__content">
                <div>
                    <i className='bx bx-cart services__icon'></i>
                    <h3 className="project__title">Ecommerce <br /> Website</h3>
                </div>
                <span className="project__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState===1?"project__modal active-modal":"project__modal"}>
                    <div className="project__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="project__modal-title">Ecommerce Website</h3>
                        <p className="project__modal-description"><a href="https://ecommerce-k81t.onrender.com/" className="button button--flex project__link" target="_blank">Project Link</a><a href="https://github.com/DivyanshSaharan/Ecommerce" className="button button--flex project__link" target="_blank">Source Code</a></p>

                        <ul className="project__modal-services grid">
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>User-friendly platform:</b> Simplifies online shopping with an intuitive interface.
                                </p>
                            </li>
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>Secure payment options:</b> Ensures safe transactions.
                                </p>
                            </li>
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>Responsive design:</b> Guarantees easy access and a consistent experience across various devices.
                                </p>
                            </li>
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>Dual marketplace functionality:</b> Enables sellers to list products and buyers to make purchases, fostering a dynamic commercial environment.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project__content">
                <div>
                    <i className='bx bxl-graphql services__icon'></i>
                    <h3 className="project__title">Graph Algorithm <br /> Visualizer</h3>
                </div>
                <span className="project__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState===2?"project__modal active-modal":"project__modal"}>
                    <div className="project__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="project__modal-title">Graph Algorithm Visualizer</h3>
                        <p className="project__modal-description">3 years experience</p>

                        <ul className="project__modal-services grid">
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>User-friendly platform:</b> Simplifies online shopping with an intuitive interface.
                                </p>
                            </li>
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>Secure payment options:</b> Ensures safe transactions.
                                </p>
                            </li>
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>Responsive design:</b> Guarantees easy access and a consistent experience across various devices.
                                </p>
                            </li>
                            <li className="project__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   <b>Dual marketplace functionality:</b> Enables sellers to list products and buyers to make purchases, fostering a dynamic commercial environment.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects