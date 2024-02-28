import React from "react";
import videoBg from './backgroundNature.mp4';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <main className="Landing-container">
            <video src={videoBg} muted loop autoPlay></video>
            <div className="Landing-wrapper">
                <h1>Web Connect</h1>
                <p>«La tecnología hace posible lo que antes era imposible. El diseño hace que sea real.» — Michael Gagliano</p>
                <Link to={"/home"}>
                    <button type="button">start</button>
                </Link>
            </div>
            <div className="capa"></div>
        </main>
    )
}

export default Landing;