import React from 'react'

function Treatment() {
  return (
    <div className='w-100  pb-0 treatment'>
        <div className='container'>
            <div className='row align-items-center'>
            <div className='col-md-6 text-area-treatment'>
                <h3 className='heading h1 head-treatment'>Treatment Areas</h3>
                <div className='row'>
                    <div className='col-2'>
                        <img src='https://ecis.in/pachaouli-landing-page/assets/face.png' alt='' />
                    </div>
                    <div className='col-9'>
                        <h3 className='treatment-img d-flex mb-0'>Face</h3><span>Reveal your radiant skin with our advanced laser treatments. Experience rejuvenation and a flawless complexion today!</span>                        
                    </div>
                    </div>
                    <div className='row mt-4'>
                    <div className='col-2'>
                    <img src='https://ecis.in/pachaouli-landing-page/assets/slim-body.png' alt='' />
                    </div>
                    <div className='col-9'>
                        <h3 className='treatment-img d-flex mb-0'> Body</h3><span>Unveil your best self with our full-body laser treatments. Achieve smooth, youthful skin from head to toe!</span>                        
                    </div>
                </div>
                <div class="readmore padding mt-0 w-auto"><a href="/" class="button">Book Appointment <i class="fa fa-arrow-right" aria-hidden="true"></i></a></div>
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