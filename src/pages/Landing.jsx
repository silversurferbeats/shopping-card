import React from "react";
import videoBg from './backgroundNature.mp4';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import toast from 'react-hot-toast';


const Landing = () => {
    const { isAuthenticated } = useAuth0();

    const handleStartClick = () => {
        toast.error("Pleace, Login!")
    };

    return (
        <main className="Landing-container">
            <video src={videoBg} muted loop autoPlay></video>
            <div className="Landing-wrapper">
                <h1 className="sm:text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-50 to-orange-700">EaseShop</h1>
                <p>«Tu destino de compras sin esfuerzo.»</p>
                { isAuthenticated ? (
                    <Link to="/home">
                        <button type="button">start</button>
                    </Link>
                ) : (
                    <button type="button" onClick={handleStartClick}>start</button>
                )}
            </div>
            <div className="capa"></div>
        </main>
    )
}

export default Landing;