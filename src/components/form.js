import React from 'react';

function Form() {
    return (
        <div className='w-100 padding form-main'>
            <div className='w-100 container'>
            <h4 className='text-center'>Get in Touch</h4>
                        <p className='text-center'>
                            Feel free to contact us for more information or to book your consultation
                        </p>
                <div className='row'>
                <div className='col-md-6 contactus-img'>
                        <img src='https://ecis.in/pachaouli-landing-page/assets/contact.png' alt='' />
                    </div>
                    <div className='col-md-6'>
                       
                        <form>
                            <div className='row contact-form'>
                                <div className='col-md-12 form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-bg'
                                        placeholder='Name'
                                    />
                                </div>
                                <div className='col-md-12 form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-bg'
                                        placeholder='Time'
                                    />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-bg'
                                        placeholder='Phone'
                                    />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-bg'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='col-md-12 form-group'>
                                    <textarea
                                        className='form-control form-control-bg'
                                        placeholder='Describe Your Needs'
                                    ></textarea>
                                </div>
                                <div className='pt-4 text-center'>
                                <button type='submit' className='btn btn-secondary' style={{backgroundColor: "#0A1D5C"}}>
                                    Submit
                                </button>
                            </div>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Form;
