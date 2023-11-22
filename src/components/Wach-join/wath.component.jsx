import React from "react";
import "./watch.style.css"

const WatchJoin = () => {
    return (
        <div className="container">
            <div className="watch-join">
                <div className="watch-container">
                    <div className="logo-content">
                        <span className="logo"><svg class="value-prop-logo" focusable="false" viewBox="225 0 552 1000"
                            aria-hidden="true" data-uia="n-logo"><defs><   radialGradient id="9f8d7ad6-602a-4a28-81a3-f2fc8f97e556-a"
                                r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop
                                    offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path
                                        d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579"
                                            fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                                                fill="url(#9f8d7ad6-602a-4a28-81a3-f2fc8f97e556-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
                                                    fill="#e50914"></path></svg>
                        </span>
                        <p>Watch all you want.</p>
                    </div>
                </div>
                <div>
                    <button>JOIN NOW</button>
                </div>
            </div>
        </div>
    );
}

export default WatchJoin;