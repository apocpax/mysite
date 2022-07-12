import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Resume.css';

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

     let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                            </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
            </div>
        </div>
        );
    };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];


  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];
    const projectsDetails =[
        {
            title: "first project",
            description:
            "",
            subHeading: "",
        },
        {
            title: "first project",
            description:
            "",
            subHeading: "",
        },
        {
            title: "first project",
            description:
            "",
            subHeading: "Technologies Used:",
        },
    ];

 const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Legon Accra, Ghana"}
        subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"National Youth Service Corps"}
        subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Command Secondary School Mbiri"}
        fromDate={"2007"}
        toDate={"2012"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ehizeex Technoloy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,



        <div className='resume-screen-sontainer programming-skills-container'
        key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentafe'>
                        <div style={{ width: skill.ratingPercentage + "%"}}
                        className='active-perscentage-bar'
                        ></div>
                    </div>
                </div>
            ))}
        </div>,
                <div className='resume-screen-container' key="projects">
                    {projectsDetails.map((projectsDetails, index)=>(
                        <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                        />
                    ))}
                </div>,

            <div className='resume-screen-container' key="interests">
                <ResumeHeading
                        heading='a'
                        description='b'
                />
                <ResumeHeading
                        heading='a'
                        description='b'
                />
                <ResumeHeading
                        heading='a'
                        description='b'
                />
     </div>
    ];

    const handleCarousal =(index)=>{
        let offsetHeight = 360;
        let newCarousalOffset ={
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index)=>(
            <div
            onClick={()=>handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            >
   <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
    const getResumeScreens = () => {
        return(
            <div
            style={carousalOffsetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
                </div>
        );
    };

          useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
