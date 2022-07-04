import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='https://github.com/apocpax'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/richardlummus/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, i'm <span className='highlighted-text'>Richard</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
