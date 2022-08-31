import React from "react"
import interactImg from "../images/desktop/image-interactive.jpg"
import world from "../images/desktop/image-deep-earth.jpg"
import night from "../images/desktop/image-night-arcade.jpg"
import player from "../images/desktop/image-soccer-team.jpg"
import car from "../images/desktop/image-grid.jpg"
import river from "../images/desktop/image-from-above.jpg"
import aurora from "../images/desktop/image-pocket-borealis.jpg"
import mars from "../images/desktop/image-curiosity.jpg"
import fisheye from "../images/desktop/image-fisheye.jpg"

import worldMob from "../images/mobile/image-deep-earth.jpg"
import nightMob from "../images/mobile/image-night-arcade.jpg"
import playerMob from "../images/mobile/image-soccer-team.jpg"
import carMob from "../images/mobile/image-grid.jpg"
import riverMob from "../images/mobile/image-from-above.jpg"
import auroraMob from "../images/mobile/image-pocket-borealis.jpg"
import marsMob from "../images/mobile/image-curiosity.jpg"
import fisheyeMob from "../images/mobile/image-fisheye.jpg"

export default function Main() {
    return (
        <main>
            <section className="top--section">
                <div className="overlay">
                    <div className="hero--text">
                        IMMERSIVE<br/> EXPERIENCES<br/> THAT DELIVER
                    </div>
                </div>
            </section>
            <section className="second--section">
                <img className="inter--img" alt="" src={interactImg}/>
                <div className="text--box">
                    <h2>THE LEADER IN<br/> INTRACTIVE VR</h2>
                    <p>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                    </p>
                </div>
            </section>
            <section className="third--section">
                <div className="heading--div">
                    <h2>OUR CREATIONS</h2>
                    <button>SEE ALL</button>
                </div>
                <div className="grid--cont">
                    <div>
                        <img alt="" src={world}/>
                        <div className="grid--overlay">
                            <h3>DEEP<br/>EARTH</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={night}/>
                        <div className="grid--overlay">
                            <h3>NIGHT<br/>ARCADE</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={player}/>
                        <div className="grid--overlay">
                            <h3>SOCCER<br/>TEAM VR</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={car}/>
                        <div className="grid--overlay">
                            <h3>THE<br/>GRID</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={river}/>
                        <div className="grid--overlay">
                            <h3>FROM UP<br/>ABOVE VR</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={aurora}/>
                        <div className="grid--overlay">
                            <h3>POCKET<br/>BOREALIS</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={mars}/>
                        <div className="grid--overlay">
                            <h3>THE<br/>CURIOSITY</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={fisheye}/>
                        <div className="grid--overlay">
                            <h3>MAKE IT<br/>FISHEYE</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mobthird--section">
                <div className="heading--div">
                    <h2>OUR CREATIONS</h2>
                </div>
                <div className="grid--cont">
                    <div>
                        <img alt="" src={worldMob}/>
                        <div className="grid--overlay">
                            <h3>DEEP<br/>EARTH</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={nightMob}/>
                        <div className="grid--overlay">
                            <h3>NIGHT<br/>ARCADE</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={playerMob}/>
                        <div className="grid--overlay">
                            <h3>SOCCER<br/>TEAM VR</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={carMob}/>
                        <div className="grid--overlay">
                            <h3>THE<br/>GRID</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={riverMob}/>
                        <div className="grid--overlay">
                            <h3>FROM UP<br/>ABOVE VR</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={auroraMob}/>
                        <div className="grid--overlay">
                            <h3>POCKET<br/>BOREALIS</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={marsMob}/>
                        <div className="grid--overlay">
                            <h3>THE<br/>CURIOSITY</h3>
                        </div>
                    </div>
                    <div>
                        <img alt="" src={fisheyeMob}/>
                        <div className="grid--overlay">
                            <h3>MAKE IT<br/>FISHEYE</h3>
                        </div>
                    </div>
                    <button className="mob--btn">SEE ALL</button>
                </div>
            </section>
        </main>
    )
}