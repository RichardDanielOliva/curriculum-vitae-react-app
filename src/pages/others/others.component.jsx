import React from 'react';

import './others.style.scss';

import OthersFilter from '../../components/others-filter/others-filter.component'
import CourseList from '../../components/course-list/course-list.component'

const Others = () =>{

    return(
        <section className='others-section'>
            <OthersFilter/>
            <h1>Otros</h1>
            <CourseList/>
        </section>
    );
} 

export default Others;