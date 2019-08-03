import React from 'react';

import './work-card.style.scss'

const WorkCard = (({title, company, companyImgUrl, location, startDate, endDate, description}) => {
    return (
        <div className='work-card-component'>
            <div className="company-logo">
                <img src={companyImgUrl} class="card-img" alt="..."/>
            </div>
            <div className="work-info">
                <div className="main-info"> 
                    <div>
                        <h3>{title}</h3>
                        <h5>{company}</h5>
                    </div>
                    <div className="">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="dates">
                        <h5>{startDate} - {endDate}</h5>
                </div>
            </div>
        </div>)
    }
);

export default WorkCard;