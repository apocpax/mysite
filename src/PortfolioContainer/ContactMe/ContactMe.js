import React from 'react';
import Typical from 'react-typical';
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './ContactMe.css';


export default function ContactMe(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='main-container' id={props.id || ""}>
        <ScreenHeading subHeading={"Lets Keep In Touch"}
        title={"Contact Me"} />
        <div className='central-form'>
            <div className='col'>
                <h2 className='title'>
                    <Typical loop={Infinity}
                    steps={[
                        "Get In Touch",
                        1000,
                    ]}
                    />
                </h2>
                          <a href='https://github.com/apocpax'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/richardlummus/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
            </div>
        </div>
    </div>
  )
}
