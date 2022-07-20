import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import education from '../../assets/Resume/education.svg';
import workHistory from '../../assets/Resume/work-history.svg';
import programmingSkills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import interests from '../../assets/Resume/interests.svg';
import './Resume.css';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

const resumeBullets = [
    { label: 'Education', logoSrc: education },
    { label: 'Work History', logoSrc: workHistory },
    { label: 'Programming Skills', logoSrc: programmingSkills },
    { label: 'Projects', logoSrc: projects },
    { label: 'Interests', logoSrc: interests },
];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "jqeury", ratingPercentage: 75},
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, CSS",
    },
    {
      title: "Mastermind",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A game based on the board game Mastermind that i built for a Linkedin interview",
      subHeading:
        "Technologies Used:  HTML, CSS, Javascript, Jquery. ",
    },
    {
      title: "Social",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Social media website with photo posting, comments, and real time chatting",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, socket, CSS. ",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"General Assembly"}
        subHeading={"Software Engineering Bootcamp"}
        fromDate={"2020"}
        toDate={"2021"}
      />

    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Lowe's"}
          subHeading={"Customer Service Manager"}
          fromDate={"2011"}
          toDate={"2018"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently I am looking for a job to use my new coding skills on.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - In charge of a large team with over 30 members. I was
            in charge of the development, teamwork building, and scheduling of all of them.
          </span>
          <br />
          <span className="resume-description-text">
            - I was responsible for creating and growing the internet
            orders at the store level. When this rolled out it was new to all
            of us and I think it was a great lesson to build a team from nothing.
          </span>
          <br />
          <span className="resume-description-text">
            - I had to be very responsible with time management as not
            only did I have my team, but I had to help all other departments in
            the store with their customer service issues.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="biking"
        description="I like to bike most places, i often bike over 50 miles a week."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to almost any music is something I am almost always doing. No matter if it is biking or coding i usually have my headphones on."
      />
      <ResumeHeading
        heading="Gaming"
        description="I like a lot of games but games i can play with friends are the best!"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className='bullet-logo' src={bullet.logoSrc} alt='oppsss' />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
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
