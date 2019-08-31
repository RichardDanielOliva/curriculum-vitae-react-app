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
                    .filter((item, idx) => idx < 20)
                    .sort((item, nextItem) => {
                        return sortByDate(
                            item.issueDateFormat,
                            nextItem.issueDateFormat
                        )
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

const sortByDate = (prevDate, nextDate) => {  
    var dateA = new Date(prevDate).getTime(); 
    var dateB = new Date(nextDate).getTime(); 
    return dateA > dateB ? -1 : 1;  
}

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(CourseList);