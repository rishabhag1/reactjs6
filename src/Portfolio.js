import React from "react";
import { projects } from "./data";

const Portfolio = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Technologies: {project.technologies.join(", ")}</p>
                    <a href={project.github}>GitHub</a>
                    <a href={project.live}>Live Demo</a>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;