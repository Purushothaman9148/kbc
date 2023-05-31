import React from 'react'
import Footer from '../Home/Footer';
import Application from '../Assets/images/Application.pdf';
import Fees from '../Assets/images/fees.jpg'
import KBCFEE from '../Assets/images/KBCFEE.pdf'

export default function Admission() {
    return (
        <>
            <div style={{ 'padding': '20px', 'marginTop': '20px' }}>
                <h5 style={{ 'color': '#ed0303' }}>Application Form</h5>
                <p></p>
                <p>
                    Click the download button to download the application form
                </p>
                <a href={Application} download style={{ 'textDecoration': 'none', 'color': 'white' }}>
                    <button style={{ 'padding': '10px', 'borderRadius': '5px', 'backgroundColor': 'rgb(0 42 153)', 'color': 'white' }}> Download</button>
                </a>
            </div>
            <div style={{ 'padding': '20px', 'marginTop': '20px' }}>
                <h5 style={{ 'color': '#ed0303' }}>Admission Requirements </h5>
                <ol style={{ listStyleType: 'decimal' }}>
                    <li><span>Application form duly filled by the applicant.</span></li>
                    <li><span>Produce the following documents while coming for interview.</span></li>
                    <ul style={{ listStyleType: 'square' }}>
                        <li><span style={{ lineHeight: '107%' }}>Original Certificates (Secular);</span></li>
                        <li><span style={{ lineHeight: '107%' }}>Original Certificates (Theological)</span></li>
                        <li><span style={{ lineHeight: '107%' }}>Address Proof</span></li>
                        <li><span style={{ lineHeight: '107%' }}>Reference from Centre Pastor</span></li>
                        <li><span style={{ lineHeight: '107%' }}>Reference of the local church Pastor</span></li>
                        <li><span style={{ lineHeight: '107%' }}>Your Personal Testimony</span></li>
                        <li><span style={{ lineHeight: '107%' }}>Recent Photos 3 copies</span></li>
                    </ul>
                </ol>
            </div >
            <div style={{ 'padding': '20px', 'marginBottom': '20px' }}>
                <h5 style={{ 'color': '#ed0303' }}>Bank details to pay the fees </h5>
                <p></p>

                <img src={Fees} alt='fees' height={250} >
                </img>

            </div>

            <Footer />
        </>
    )
}
