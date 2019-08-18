import React from 'react';
import { connect } from 'react-redux';

import OthersFilter from '../../components/others-filter/others-filter.component';
import OtherExperienceList from '../../components/other-experiences-list/other-experiences-list.component';
import CourseList from '../../components/course-list/course-list.component';
import LanguagesList from '../../components/language-list/language-list.component';
import PublicationList from '../../components/publication-list/publication-list.component';
import HobbiesList from '../../components/hobbies-list/hobbies-list.component';
import CommingSoon from '../../components/coming-soon/coming-soon.component';

import {OtherContainer, FilterContainer, SectionContainer} from './others.styles';

const Others = ({optionSelected, filterHidden}) => {
    return(
        <OtherContainer>
            <OthersFilter/>
            <SectionContainer optionSelected={optionSelected} sectionName="others-experience">
                <OtherExperienceList/>
            </SectionContainer>
            <SectionContainer optionSelected={optionSelected} sectionName="courses">
                <CourseList/>
            </SectionContainer>
            <SectionContainer optionSelected={optionSelected} sectionName="languages">
                <LanguagesList/>
            </SectionContainer> 
            <SectionContainer optionSelected={optionSelected} sectionName="publications">
                <CommingSoon/>
            </SectionContainer> 
            <SectionContainer optionSelected={optionSelected} sectionName="hobbies">
                <HobbiesList/>
            </SectionContainer> 
        </OtherContainer>
    );
} 

const mapStateToProps = state => ({
    filterHidden: state.others.filter.hidden,
    optionSelected: state.others.filter.optionSelected
})


export default connect(mapStateToProps)(Others);