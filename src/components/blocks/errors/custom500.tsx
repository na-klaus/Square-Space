import React from "react";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";

function Custom500() {
    const router = useRouter();

    const handleRefresh = () => {
        window.location.reload(); // refresh page
    };

    return (
        <div className="image404">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="centered-image404">
                <Player
                    autoplay
                    loop
                    src="/lottie/looking.json"
                    style={{
                        width: "50%",
                        height: "50%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                    }}
                />
                <h1 className="not-found-title404">500 - Internal Server Error Occurred!</h1>
                <p className="not-found-text404">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Oops! It seems like we've encountered a server error on my
                    architectural website.
                </p>
                <p style={{ fontSize: '14px' }}>
                    If you think this is an issue or bug, please report it{' '}
                    <a href="mailto:connect@square-space.in">here</a>.
                </p>
                <button className="go-back-button404" onClick={handleRefresh}>
                    Refresh Page
                </button>
            </div>
            <div className="anim">
                <div className="ufo">
                    <Player
                        autoplay
                        loop
                        src="/lottie/ufo.json"
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    />
                </div>
                <div className="ghost">
                    <Player
                        autoplay
                        loop
                        src="/lottie/ghost.json"
                        style={{
                            width: "80px",
                            height: "80px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Custom500;
