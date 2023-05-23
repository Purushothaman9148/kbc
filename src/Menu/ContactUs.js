import React from 'react'
import Footer from '../Home/Footer'

export default function ContactUs() {
    return (
        <>
            <div className='contact-content'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9696727682517!2d77.6504469148227!3d13.037602390812632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1735650e7db7%3A0x34b700f57538d763!2sIPC%20Karnataka%20State%20Head%20Quarter!5e0!3m2!1sen!2sin!4v1684781025327!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='address'>
                    <b> Office : </b>
                    <p className='addresstext'>
                        IPC Karnataka State Headquarters,<br></br>
                        Near New Millenium School,<br></br>
                        Horamavu Agara,<br></br>
                        Bangalore-560113
                        <br></br>
                        <br></br>
                        <b>Phone :</b> 9845378981, 9964595468
                        <br></br>
                        <br></br>
                        <b>Email :</b> kbcipcks@gmail.com
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}
