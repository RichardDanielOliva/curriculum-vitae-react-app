import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import './course-list.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CourseCard from '../course-card/course-card.component';

const CourseList = ({skills}) =>{
    const [ t ] = useTranslation();
    const coursesData = t('courses');

    return(
        <div className="course-list-component-selected">
            <CustomButton onClick="" className="display-course-button"><h3>Cursos</h3></CustomButton>
            <div className="course-list-card">
                {coursesData
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherProps}) =>
                        <CourseCard key={id} id={id} {...otherProps}/>
                )}
            </div>
            <div class="project-card-footer" onClick="">
                <p class="project-card-text">Mostrar todos </p>
            </div>
        </div>
    );
} 

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(CourseList);