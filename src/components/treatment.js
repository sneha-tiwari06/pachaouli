import React from 'react'

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
function Treatment() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='w-100  pb-0 treatment'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-area-treatment'>
                        <h2 className='heading'>Treatment Areas</h2>
                        <div className='row'>
                            <div className='col-2'>
                                <img src='https://ecis.in/pachaouli-landing-page/assets/face.png' alt='' />
                            </div>
                            <div className='col-9'>
                                <h3 className='treatment-img d-flex mb-0'>Face</h3><span className='treatment-text'>Reveal your radiant skin with our advanced laser treatments. Experience rejuvenation and a flawless complexion today!</span>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-2'>
                                <img src='https://ecis.in/pachaouli-landing-page/assets/slim-body.png' alt='' />
                            </div>
                            <div className='col-9'>
                                <h3 className='treatment-img d-flex mb-0'> Body</h3><span className='treatment-text'>Unveil your best self with our full-body laser treatments. Achieve smooth, youthful skin from head to toe!</span>
                            </div>
                        </div>
                        <div class="readmore padding mt-0 w-auto"><a href="#" className="button" id="bookAppointmentBtn" onClick={(e) => { e.preventDefault(); setModalShow(true); }}>
                            Book Appointment <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /></div>
                    </div>
                    <div className='col-md-6 '>
                        <img src='https://ecis.in/pachaouli-landing-page/assets/banner7.png' alt=''></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Treatment