import React, { useEffect } from "react";
import './index.css';
import NavBar from "../../commen/navBar";
import ServicesCard from "../../commen/services";
import DevelopersCard from "../../card/aboutDevelopersCard";
import AboutStatusCard from "../../card/aboutStatus";
import TopPath from "../../commen/topPath";
import { useLocation, useNavigate } from "react-router-dom";

function About() {

    const Developers = [{
        Name : 'Abel Tadesse',
        Image : 'https://avatars.githubusercontent.com/u/72024981?v=4',
        Position : 'Backend(Django) Developer',
        Facebook : '',
        Instagram : '',
        Linkedin : '',
        Github : ''
    },
    {
        Name : 'Chala Amenu',
        Image : 'https://avatars.githubusercontent.com/u/83205080?v=4',
        Position : 'Project Manager, Android(flutter) Developer',
        Facebook : '',
        Instagram : '',
        Linkedin : '',
        Github : ''
    },{
        Name : 'Tadesse Ageru',
        Image : 'https://media.licdn.com/dms/image/C4E03AQH_kA7bV3yrVQ/profile-displayphoto-shrink_800_800/0/1659866407877?e=2147483647&v=beta&t=Yf3yL1NEn30a7PkyiNHqFoR6DfY2gFl76RQfN7rB7Fk',
        Position : 'UI Designer, Adroid(flutter) Developer',
        Facebook : '',
        Instagram : '',
        Linkedin : '',
        Github : ''
    },{
        Name : 'Yosef Sahle',
        Image : 'https://media.licdn.com/dms/image/D4E03AQEivfg8KrMwYQ/profile-displayphoto-shrink_800_800/0/1700838946066?e=2147483647&v=beta&t=DEbpdgnSWpwmsnTyMLslczhNeb3jrMqVhKDNU_fc4IU',
        Position : 'Web(React) Developer',
        Facebook : '',
        Instagram : '',
        Linkedin : '',
        Github : ''
    },
    
]
    return(
        <>
        <div className="about-page">
            <TopPath 
            prepath="Home / "
            mainpath="About"
            />
            <div className="about-page-description">
                <div className="about-page-text-description">
                    <h1>Our Story</h1>
                    <p>
                    Launced in 2024, APM is East African premier Agricultural products online shopping makterplace with an active presense in Ethiopia. Supported by wide range of tailored marketing, data and service solutions, APM has 1000 sellers and 300 PRODUCTS and serves 3 millions customers across the region. <br /><br />
                    APM has more than 1 Million products to offer, growing at a very fast. APM offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="about-page-description-image">
                    <img src="https://cdn.dribbble.com/users/2279668/screenshots/9011709/online-shopping-vector-illustration1.webp" alt="" />
                </div>
            </div>
            <AboutStatusCard />
{/*             <div className="about-page-developers">
            {Developers.map((developer, index) => (
                        <DevelopersCard
                            key={index}
                            Name={developer.Name}
                            Image={developer.Image}
                            Position={developer.Position}
                            Facebook={developer.Facebook}
                            Linkedin={developer.Linkedin}
                            Instagram={developer.Instagram}
                            Github={developer.Github}
                        />
                    ))}
            </div> */}
            <ServicesCard />
        </div>
        </>
    )
}

export default About;
