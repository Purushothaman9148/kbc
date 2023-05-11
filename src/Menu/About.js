import React from 'react'
import ttJoseph from '../Assets/images/ttJoseph.jpg'
import Samuel from '../Assets/images/Samuel.jpg'

export default function About() {
    return (
        <div className='aboutUsContainer'>
            <div className='aboutUsContent'>
                <div className='aboutTextContent'>
                    <h3 className='aboutUsHeader'>History of Karnataka Bible College</h3>
                    <p >
                        Remembering the founder: In this juncture we remember the labour of the great visionary late Pr T.T Joseph and others whose leadership was helpful for this institution. By trusting in the Lord, KBC started in a hired facility at IPC Viveknagar in the year 1991. Brother K.C Pappachan and Bro. P.M Thomas and believers of Vivekanagar church supported him to start KBC. First batch of 20 students with G Th were graduated in 1993. Pastor A M Jacob was served as the warden cum supervision of the college then. In 1995 this institute was shifted to the newly constructed building of late Bro. K I Abraham at Horamavu. After the completion of IPC Headquarters building at Agara in 1998, the college began to function with all the facilities available there. We praise God for His Faithfulness throughout these years and we remember all the past and present faculty members for their valuable contribution that helped KBC to stand as a unique institution.
                        We started our journey with 20 students in the year of 1991, and we were able to send out hundreds of trained graduates to the vineyard of the Lord in Karnataka and throughout the globe.
                        When Pr. T.T Joseph was promoted to Glory in 2010, according to his desire Pr. Sam George (the present IPC General Secretary) became the Principal and Pastor John Mathew assisted him. We remember Bro. Tom Joseph the eldest son of T T Joseph who came forward to sponsor KBC financially. Every member of  the Thottumalil family encouraged KBC with prayer and moral support. We also remember Late Pastor T.T Thomas, Pr. Valson Abraham (present IPC General President), Pr. M.J David who were also a great support to us in all manner.
                    </p>
                </div>
                <div className='photoContent'>
                    <img
                        className='ttJoseph'
                        src={ttJoseph}
                        alt="TT_Joseph"
                    />
                </div>
            </div>

            <div className='aboutUsContent'>
                <div className='aboutTextContent'>
                    <h3 className=''>From Principal's Desk</h3>
                    <p>
                        The IPC Karnataka Bible College is one of the prominent theological institutions in Karnataka,
                        specialized in equipping students with the Word of God to "reach the unreached people groups". Late Pastor T.T.Joseph handed over the institute
                        in the year 2010 and from then onwards God enabled me to hold the post of Principal. The contributions from Thottumalil family, especially Bro.Tom Joseph,
                        Pr.M.J.David, Bahrain, and IPC churches in Karnataka are the financial resources for the smooth functioning of the institution.
                        At present 100 students, both Residential and Non Residential are getting trainning for entering into various ministries in Karnataka.
                        <br></br>
                        The College is well supported by eminent faculties and office bearers. We emphasis the Command of our Lord Jesus Christ to preach the Gospel to the World(Matt 28:18)
                        <br></br>
                        <br></br>
                        <b>Pr.Samuel George</b>
                        <br></br>
                        Principal
                    </p>
                </div>
                <div className='photoContent'>
                    <img
                        className='ttJoseph'
                        src={Samuel}
                        alt="TT_Joseph"
                    />
                </div>
            </div>
        </div>
    )
}
