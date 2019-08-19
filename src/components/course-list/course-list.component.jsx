import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import CourseCard from '../course-card/course-card.component';
import {CourseListContainer, ListContainer, CourseCardContainer} from './course-list.style';

const CourseList = ({skills}) =>{
    const [ t ] = useTranslation();
    const coursesData = t('courses');

    return(
        <CourseListContainer>
            <ListContainer>
                {coursesData
                    .filter((item, idx) => idx < 10)
                    .sort((a,b) => {
                        let element1 = a.issueDate
                        let element2 = b.issueDate
                        return element1 ? element2.substring(element1.length-5, element1.length)-element1.substring(element2.length-5, element2.length) : element1.substring(element2-5, element2.length)-2020
                    }
                    )
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