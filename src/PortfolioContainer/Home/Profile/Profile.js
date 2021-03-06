import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../Utilities/ScrollService';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://github.com/apocpax'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/richardlummus/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, i'm <span className='highlighted-text'>Richard</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Ethhusiastic Dev",
                                1000,
                                "React MEAN stack",
                                1000,
                                "Ready To Learn",
                                1000,
                                "CSS Wizard",
                                1000,
                                "Creative Problem Solver",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Hard working engineer whos ready to code
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='Richards-Resume.pdf' download="Richards-Resume.pdf">
                        <button className='btn highlighted-btn'>get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
