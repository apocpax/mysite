import React,{useEffect} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import "./AboutMe.css";

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description: "Hello my name is Richard Lummus. I am full stack developer mainly using MERN stack, a hard worker, and someone who always likes a challenge",
        highlights:{
            bullets:[
                "MERN full stack developer",
                "Javascript and Jquery",
                "Mobile front end design",
                "Handleing API calls",
                "quality HTML",
                "Fundamental and direct CSS",
            ],
            heading: "here are a few highlights:"
        }
    }

    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))

    }

  return (
    <div className='about-me-container screen-container fade-in'
    id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={"Why Chose Me"} />
        <div className='about-me-card'>
            <div className='about-me-profile'></div>
            <div className='about-me-details'>
                <span className='about-me-description'>
                    {SCREEN_CONSTSANTS.description}</span>
    <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
             <a href='Richards-Resume.pdf' download="Richards-Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
