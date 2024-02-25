import React from "react";
import videoBg from './backgroundNature.mp4';
import './Landing.css'
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <main id="hero">
            <div className="promo">
                <h1>Web Connect</h1>
                <p>«La tecnología hace posible lo que antes era imposible. El diseño hace que sea real.» — Michael Gagliano</p>
                <Link to={"/home"}>
                    <button type="button">start</button>
                </Link>
            </div>
            <video src={videoBg} muted loop autoPlay></video>
            <div className="capa"></div>
        </main>
    )
}

export default Landing;