import React from 'react';

import './school-card.style.scss';

import {getIconComponent} from '../utils/icons.utils';

const SchoolCard = (({school, degree, fieldOfStudy, startYear, endYear, grade, description, imgUrl}) => (
    <div className='school-card-component'>
        <div className="school-logo">
            <div className="school-icon">
            {getIconComponent(imgUrl)}
            </div>
        </div>
        <div className="school-info">
            <div className="main-info"> 
                <div>
                    <h3>{degree}</h3>
                    <h5>{school}</h5>
                </div>
                    <div className="">
                        <p>{fieldOfStudy}</p>
                    </div>
                </div>
                <div className="dates">
                    <h5>{startYear} - {endYear}</h5>
                </div>
        </div>
    </div>)
);

export default SchoolCard;