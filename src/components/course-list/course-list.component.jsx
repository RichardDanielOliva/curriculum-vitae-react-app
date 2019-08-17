import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import CourseCard from '../course-card/course-card.component';
import {CourseListContainer, TitleContainer, ListContainer, CourseCardContainer} from './course-list.style';

const CourseList = ({skills}) =>{
    const [ t ] = useTranslation();
    const coursesData = t('courses');

    return(
        <CourseListContainer>
            {/* <TitleContainer>
                <h1>Cursos</h1>
            </TitleContainer> */}

            <ListContainer>
                {coursesData
                    .filter((item, idx) => idx < 10)
                    .map(({id, ...otherProps}) => (
                        <CourseCardContainer>
                            <CourseCard key={id} id={id} {...otherProps}/>
                        </CourseCardContainer>     
                    )      
                )}
            </ListContainer>

        </CourseListContainer>
    );
} 

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(CourseList);