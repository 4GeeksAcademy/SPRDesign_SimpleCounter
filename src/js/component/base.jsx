import React from "react";
import Buttons from "./buttons";

export const Base = (props) => {
    return (
        <div class="d-flex justify-content-center align-items-center vh-100" style={{ fontFamily: 'Roboto Mono' }}>
            <div class="rounded-pill col-md-8 card border border-dark border-2 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body d-flex justify-content-around align-items-center">
                    <div class="countdown-section">
                        <i class="fas fa-stopwatch display-1"></i>
                    </div>

                    <div class="countdown-section d-flex flex-column align-items-center">
                        <div class="d-flex">
                            <div class="digit display-1">{props.digitSix || 0}</div>
                            <div class="digit display-1">{props.digitFive || 0}</div>
                        </div>
                        <div class="countdown-label">Hours</div>
                    </div>
                    <div class="display-3">:</div>
                    <div class="countdown-section d-flex flex-column align-items-center">
                        <div class="d-flex">
                            <div class="digit display-1">{props.digitFour || 0}</div>
                            <div class="digit display-1">{props.digitThree || 0}</div>
                        </div>
                        <div class="countdown-label">Minutes</div>
                    </div>
                    <div class="display-3">:</div>
                    <div class="countdown-section d-flex flex-column align-items-center">
                        <div class="d-flex">
                            <div class="digit display-1">{props.digitTwo || 0}</div>
                            <div class="digit display-1">{props.digitOne || 0}</div>
                        </div>
                        <div class="countdown-label">Seconds</div>
                    </div>

                    <div class="countdown-section">
                        <Buttons startCounter={props.startCounter} pauseInterval={props.pauseInterval} resetInterval={props.resetInterval} />
                    </div>
                </div>
            </div>
        </div>
    );
};



