import React from 'react';
import { connect } from 'react-redux';

import ProyectList from '../../components/project-list/project-list.component';
import SkillFilter from '../../components/skill-filter/skill-filter.component';

import './skills.style.scss';
import {SkillsSectionContainer, FilterContainer, ProyectContainer} from './skills.style';

const Skills = ({proyectListHidden}) => {
    return (       
        <SkillsSectionContainer>
                <FilterContainer>
                    <SkillFilter/>
                </FilterContainer>
                <ProyectContainer proyectListHidden={proyectListHidden}>
                    <ProyectList/>
                </ProyectContainer>
        </SkillsSectionContainer>
    );
};

const mapStateToProps = state => ({
    proyectListHidden: state.skill.proyectListHidden
})

export default connect(mapStateToProps)(Skills);
