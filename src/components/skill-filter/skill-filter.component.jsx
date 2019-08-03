import React from 'react';
import { connect } from 'react-redux';

import FrontEndIcons from '../skill-icons/frontend-icons.component';
import BackEndIcons from '../skill-icons/backend-icons.component';

import './skill-filter.style.scss';

const SkillFilter = ({filterHidden}) => {
    return (
        <div className="skill-filter-component">
            <h1 className={filterHidden ? 'hidden' : 'filter-title' }>Habilidades</h1>
            <h3 className={filterHidden ? 'hidden' : 'filter-subtitle'}>
                Lenguajes de programación y herramientas    
            </h3>
            <div className={filterHidden ? 'top-fixed-filter' : 'filter-core'}>
                <p className="text-muted">Selecciona para visualizar proyectos asociados!</p>
                <div className="icons-section">
                    <FrontEndIcons/>
                    <BackEndIcons/>
                </div>
            </div>
            <small className={filterHidden ? 'hidden' : 'text-muted' }>*Ciertas herramientas, como Java o Spring, transcienden el esquema cliente-servidor. Sin embargo, se colocan del lado donde se han utilizado mayormente </small>
    </div>
    )
}

const mapStateToProps = state => ({
    filterHidden: state.skill.filterHidden,
})

export default connect(mapStateToProps)(SkillFilter);