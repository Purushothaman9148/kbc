import { useState } from "react";
import logoimg from "../Assets/images/logo1.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


export default function Menu() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            {/* <header>
                <div className='logo'>
                    <img src={logoimg} alt="logo" height={80} width={80} />
                    <h1 className="logo-name">Karnataka Bible College</h1>
                </div>
                <div className='hamburger' >
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>

            </header> */}

            <nav className="navbar">
                <div className="logo">
                    <img src={logoimg} alt="logo" height={80} width={80} />
                    <h1 className="logo-name">Karnataka Bible College</h1>
                </div>
                <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <MenuIcon /> : <MenuIcon />}
                </button>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>
                    <Link to="/" className="home">
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className="about">
                        <li>About Us</li>
                    </Link>
                    {/* <Link to="/admission" className="admission">
                        <li>Admission</li>
                    </Link> */}
                    <Link to="/courses" className="faculty">
                        <li>Courses</li>
                    </Link>
                    <Link to="/contactus" className="contactus">
                        <li>Contact Us</li>
                    </Link>
                </ul>

            </nav>
        </>
    )
}
