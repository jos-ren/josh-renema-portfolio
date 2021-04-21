import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Hero from "../comps/Hero";
import Footer from '../comps/Footer';
import NavbarComp from '../comps/Navbar';
import Spacer from "../comps/Spacer";
import { Button } from "shards-react";


const Page = styled.div`
position: relative;
min-height: 100vh;
`;

const Details = styled.div`
// height:50px;
`;

const Projects = ({ frameworks, role, overview, ideation, design, development, takeaways, conclusion, timeline, features }) => {

    const params = useParams();
    const [project, setProject] = useState({});

    const GetProject = async () => {
        const resp = await axios.get("https://josh-portfolio-backend.herokuapp.com/api/projects/" + params.id);
        setProject({ ...resp.data.projects[0] })
    };

    useEffect(() => {
        GetProject();
        console.log("project", project)
    }, [])

    return <Page>
        <NavbarComp />
        <Hero img_src={project.hero_img} />
        <div className="top">
            <div className="inner_top">
                <div className="title">
                    <h1 >{
                        project.title ||
                        <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton height={55} /></SkeletonTheme>}</h1>
                    <div>
                        <Button target="_blank" href={project.app_link}>Check Out Project</Button>
                    </div>
                </div>
                <div className="info">
                    <div className="left">
                        <div>
                            <h3>{overview || <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton height={45} /></SkeletonTheme>}</h3>
                            <p>{
                                project.overview ||
                                <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton count={3} /></SkeletonTheme>}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="timeline">
                            <h3>{timeline || <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton height={45} /></SkeletonTheme>}</h3>
                            <p>{
                                project.timeline ||
                                <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton count={3} /></SkeletonTheme>}</p>
                        </div>
                        <div className="role">
                            <h3>{role || <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton height={45} /></SkeletonTheme>}</h3>
                            <p>{
                                project.role ||
                                <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton count={3} /></SkeletonTheme>}</p>
                        </div>
                        <div className="frameworks">
                            <h3>{frameworks || <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton height={45} /></SkeletonTheme>}</h3>
                            <p>{
                                project.frameworks ||
                                <SkeletonTheme color="#9d9aa1" highlightColor="#b4b0b1"><Skeleton count={3} /></SkeletonTheme>}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="inner_bottom">
                <div>
                    <h2>{features || <Skeleton height={50} />}</h2>
                    <ul className="features">
                        <li>{project.feature1}</li>
                        <li>{project.feature2}</li>
                        <li>{project.feature3}</li>
                        <li>{project.feature4}</li>
                        <li>{project.feature5}</li>
                        <li>{project.feature6}</li>
                        <li>{project.feature7}</li>
                        <li>{project.feature8}</li>
                        <li>{project.feature9}</li>
                        <li>{project.feature10}</li>
                    </ul>
                </div>
                <h2> {ideation || <Skeleton height={50} />} </h2>
                <p>{
                    project.ideation ||
                    <Skeleton count={3} />}</p>
                <h2>{design || <Skeleton height={50} />}</h2>
                <p>{
                    project.design ||
                    <Skeleton count={3} />}</p>
                <h2>{development || <Skeleton height={50} />}</h2>
                <p>{
                    project.development ||
                    <Skeleton count={3} />}</p>
                <h2>{takeaways || <Skeleton height={50} />}</h2>
                <p>{
                    project.takeaways ||
                    <Skeleton count={3} />}</p>
                <h2>{conclusion || <Skeleton height={50} />}</h2>
                <p>{
                    project.conclusion ||
                    <Skeleton count={3} />}</p>
            </div>
        </div>
        <Spacer />
        <Footer />
    </Page>

};

Projects.defaultProps = {
    frameworks: "Frameworks",
    role: "Role",
    overview: "Overview",
    timeline: "Timeline",
    features: "0. Features",
    ideation: "1. Ideation",
    design: "2. Design",
    development: "3. Development",
    takeaways: "4. Takeaways",
    conclusion: "5. Conclusion",
};

export default Projects;