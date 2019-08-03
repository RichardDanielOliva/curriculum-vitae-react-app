import React from 'react';
// import { scroller } from 'react-scroll';
import { connect } from 'react-redux';

import ProyectList from '../../components/project-list/project-list.component';

import SkillFilter from '../../components/skill-filter/skill-filter.component';

import './skills.style.scss';

class Skills extends React.Component{
        // if(scroll) {
        //     const scrollType = {
        //         duration: 500,
        //         delay: 50,
        //         smooth: true, // linear “easeInQuint” “easeOutCubic” 
        //         offset: -10,
        //      };
        //     scroller.scrollTo("hello-element1", scrollType);
        // }

    render() {
        return (
            <section className="skill-section">
                <div className={this.props.filterHidden ? '' : 'skill-filter'}>
                    <SkillFilter/>
                </div>
                <div className={this.props.proyectListHidden ? 'hidden' : 'projects-section' }>
                    <ProyectList/>
                </div>
            </section>
        );
      }
}

const mapStateToProps = state => ({
    filterHidden: state.skill.filterHidden,
    proyectListHidden: state.skill.proyectListHidden
})

export default connect(mapStateToProps)(Skills);
