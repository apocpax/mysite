import React from "react";
import Typical from 'react-typical';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import Footer from '../../PortfolioContainer/footer/Footer';
import './ContactMe.css';



    export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



  return (
    <div className='main-container fade-in' id={props.id || ""}>
        <ScreenHeading subHeading={"Lets Keep In Touch"}
        title={"Contact Me"} />
        <div className='central-form'>
            <div className='col'>
                <h2 className='title'>
                    <Typical loop={Infinity}
                    steps={[
                        "Email richard.c.lummus90@gmail.com",
                        1000,
                    ]}
                    />
                </h2>{" "}
                          <a href='https://github.com/apocpax'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/richardlummus/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
            </div>
            </div>
      <Footer />
    </div>
  );
}
