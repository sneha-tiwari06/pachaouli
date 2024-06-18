import React from 'react'

function Form() {
    return (
        <div className='w-100 padding form-main'>
            <div className='w-50 container'>
                <h4 className='text-center'>Get in Touch</h4>
                <p className='text-center'> feel free to contact us for more information or to book your consultation</p>
              
                <form>
                    <div className='row contact-form'>
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control form-control-bg" placeholder='Name'  />
                        </div>
                        <div class="col-md-12 form-group">
                            <input type="text" class="form-control form-control-bg" placeholder='Time' />
                        </div>
                        <div class="col-md-6 form-group">
                            <input type="text" class="form-control form-control-bg" placeholder='Phone' />
                        </div>
                        <div class="col-md-6 form-group">
                            <input type="text" class="form-control form-control-bg" placeholder='Email' />
                        </div>
                        <div class="col-md-12 form-group">
                            <textarea type="text" class="form-control form-control-bg" placeholder='Describe Your Needs' />
                        </div>
                      
                    </div>
                    <div class="text-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                </form>

            </div>
        </div>
    )
}

export default Form