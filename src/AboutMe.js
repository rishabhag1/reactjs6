import React from "react";
import { aboutMe } from "./data";

const AboutMe = () => {
    return (
        <div>
            <h2>About Me</h2>
            <h3>{aboutMe.name}</h3>
            <p>{aboutMe.bio}</p>
        </div>
    );
};

export default AboutMe;