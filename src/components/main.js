import React from 'react';
import Form from './form'
import Treatment from './treatment';
import Faq from '../faq';
import Testimonials from './testimonials';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='appointment' style={{textAlign:"center", fontSize:"1.7rem"}}>
                    Book Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='form-main1'>

                    <form>


                        <div className='appointment-text'>
                            <span>Please fill the form below and expedite your consultation process.</span></div>
                        <div className='row contact-form-fields'>
                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control banner-control-bg" placeholder='Full Name:' />
                            </div>

                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control banner-control-bg" placeholder='Mobile Number:' />
                            </div>
                            <div className="col-md-12 form-group">
                                <input type="email" className="form-control banner-control-bg" placeholder='Email:' />
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="agreeCheckbox" />
                                    <label class="form-check-label" for="agreeCheckbox">
                                        By submitting, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center pt-2">
                            <button type="submit" class="submit-banner">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </Modal.Body>

        </Modal>
    );
}
function Main() {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <main>
            <div className="header">
                <div className="header-inside">
                    <div className="logo"><a href="#"><img src="https://ecis.in/pachaouli-landing-page/assets/logo1.png" alt="Pachaouli" /></a></div>
                    <div class="d-flex justify-content-end head-contact-section">
                        <div className='d-flex phone-area'>
                            <img class="icons-phone" src="https://ecis.in/pachaouli-landing-page/assets/phone.png" alt='' />
                            <a href="tel:+917802028028" class="phone-number">78020 28028</a></div>
                        <div class="readmore mt-0 w-auto">
                            <Button className="button" variant="primary" onClick={() => setModalShow(true)}>
                                Book Appointment<i className="fa fa-arrow-right"></i>
                            </Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>


                </div>
            </div>

            <div id="banner" className="banner w-100 carousel slide" data-pause="false" data-timeout="3000" data-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item h-100 active">
                        <picture>
                            <source media="(max-width:425px)" srcSet="https://ecis.in/pachaouli-landing-page/assets/mbanner3.jpg" />
                            <img src="https://ecis.in/pachaouli-landing-page/assets/banner2.jpg" className="h-100 object-cover" alt="" />
                        </picture>
                        <div className="bannerText container-md">
                            <div className="row">
                                <div className="col-xl-10">
                                    <h1 className="h1 mb-0">Pachouli Wellness Clinics  <p className="sub-text mb-0">India's No. 1 Unwanted Hair Removal Destination</p></h1>

                                    <div className="readmore d-flex">
                                        <Button className="button1" variant="primary" onClick={() => setModalShow(true)}>
                                            Book Appointment<i className="fa fa-arrow-right"></i>
                                        </Button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-form-banner'>
                <div className='form-main'>

                    <form>
                        <h4 className='text-center appointment'>Book Appointment</h4>
                        <div className='appointment-text'>
                            <span>Please fill the form below and expedite your consultation process.</span></div>
                        <div className='row contact-form-fields'>
                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control banner-control-bg" placeholder='Full Name:' />
                            </div>

                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control banner-control-bg" placeholder='Mobile Number:' />
                            </div>
                            <div className="col-md-12 form-group">
                                <input type="email" className="form-control banner-control-bg" placeholder='Email:' />
                            </div>

                            <div class="col-md-12 form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="agreeCheckbox" />
                                    <label class="form-check-label" for="agreeCheckbox">
                                        By submitting, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center pt-2">
                            <button type="submit" class="submit-banner">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="w-100 position-relative banner-iconsContainer-wrapper">
                <div className="container-md ">
                    <div className="banner-iconsContainer shadow">
                        <div className="row gap-row">
                            <div className="col-md-3 col-sm-6 banner-icon">
                                <div className="inner">
                                    <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                    <span className='stats-heading'>INDIA'S Most <br />TRUSTED CLINIC</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 banner-icon">
                                <div className="inner">
                                    <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                    <span className='stats-heading'>FDA<br /> Approved</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 banner-icon">
                                <div className="inner">
                                    <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                    <span className='stats-heading'>Painless <br />technology</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 banner-icon">
                                <div className="inner">
                                    <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                    <span className='stats-heading'>permanent <br />results</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 pb-0 scrollto">
                <div className="container-md">
                    <div className="row gap-row">

                        <div className="col-lg-6 overviewBox">
                            <div className="inner">
                                <div className="heading">
                                    <h2 className="mb-0">Why Choose Pachouli Wellness</h2>
                                </div>
                                <div className="overviewContainer ">
                                    <p>Laser hair reduction is a non-invasive cosmetic procedure that uses laser technology to reduce unwanted hair growth.Device emits a gentle beam of light that targets the melanin in the hair follicle, heating it up and damaging the follicle to inhibit hair growth.</p>
                                    <img src="https://ecis.in/pachaouli-landing-page/assets/about5.jpg" className="h-100 mb-2 object-cover d-sm-none" alt="" />
                                    <p>Laser hair reduction is a painless and comfortable procedure. Laser appliances at Pachouli are equipped with a cooling tip that cools the skin during the treatment, minimizing discomfort and reducing the risk of burns or other adverse effects. Laser Hair Reduction is a safe and effective treatment that has been approved by the FDA for permanent hair reduction.</p>
                                    <div className="readmore"><a href="#" className="button" id="bookAppointmentBtn" onClick={(e) => { e.preventDefault(); setModalShow(true); }}>
                                        Book Appointment <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 overview-img">
                            <img src="https://ecis.in/pachaouli-landing-page/assets/about5.jpg" className="h-100 object-cover d-none d-sm-block" alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <Treatment />
            <div className="w-100 padding service-wrapper">
                <div className=" container-md">
                    <div className="heading mx-auto text-center">
                        <h2 className="mb-0">Why are we the <b style={{ color: "#0A1D5C" }}>First Choice</b> for Laser Hair Reduction?</h2>
                    </div>
                    <div className="row gap-row">
                        <div className="col-lg-6 serviceBox">
                            <div className="inner">
                                <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                <article>
                                    <h5 className='service-sub-heading'>Reduced Hair Growth</h5>
                                    <p className='service-sub-text'>One of the primary benefits of laser hair reduction is that it can significantly reduce hair growth in the treated areas.</p>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6 serviceBox">
                            <div className="inner">
                                <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                <article>
                                    <h5 className='service-sub-heading'>Precision</h5>
                                    <p className='service-sub-text'> Laser hair reduction technology is highly precise, meaning that it can target only the hair follicles without damaging the surrounding skin.</p>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6 serviceBox">
                            <div className="inner">
                                <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                <article>
                                    <h5 className='service-sub-heading'>Cost-Effective</h5>
                                    <p className='service-sub-text'>While laser hair reduction may seem expensive at first, it can actually save you money in the long run. Shaving, waxing, and other temporary hair.</p>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6 serviceBox">
                            <div className="inner">
                                <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                <article>
                                    <h5 className='service-sub-heading'>Saves Time</h5>
                                    <p className='service-sub-text'> Laser hair reduction treatments are typically quick and can be done during a lunch break. With each treatment, the amount of hair in the treated. </p>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6 serviceBox">
                            <div className="inner">
                                <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                <article>
                                    <h5 className='service-sub-heading'>Reduced Ingrown Hairs</h5>
                                    <p className='service-sub-text'>Laser hair reduction can significantly reduce the occurrence of ingrown hairs, which can be painful and unsightly. By reducing hair growth</p>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6 serviceBox">
                            <div className="inner">
                                <img className="stats" src='https://ecis.in/pachaouli-landing-page/assets/icon2.jpg' alt='' />
                                <article>
                                    <h5 className='service-sub-heading'>Improved Skin Texture</h5>
                                    <p className='service-sub-text'>Laser hair reduction can help to improve the texture and appearance of your skin by reducing the appearance of folliculitis, a condition that causes</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Testimonials />



            <Faq />
            <Form />
            <footer className="footer-area overflow-hidden bg-secondary-gradient w-100">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className="col-md-3">
                            <p className='mt-2'>&copy; Pachouli Wellness Clinics</p>
                        </div>

                    </div>
                </div>

            </footer>
            <div class="footer-enquiryBtn d-flex d-sm-none">
                <a href="tel:+917802028028" class="phone-number"><i class="fa-solid fa-phone"></i>78020 28028</a>
                <a href="#" className="button" id="bookAppointmentBtn" onClick={(e) => { e.preventDefault(); setModalShow(true); }}>
                    Book Appointment <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </main>




    )
}

export default Main