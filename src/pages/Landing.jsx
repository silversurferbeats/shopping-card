import React from "react";
import videoBg from './backgroundNature.mp4';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <main className="Landing-container">
            <video src={videoBg} muted loop autoPlay></video>
            <div className="Landing-wrapper">
                <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-50 to-orange-700">EaseShop</h1>
                <p>«Tu destino de compras sin esfuerzo.»</p>
                <Link to={"/home"}>
                    <button type="button">start</button>
                </Link>
            </div>
            <div className="capa"></div>
        </main>
    )
}

export default Landing;