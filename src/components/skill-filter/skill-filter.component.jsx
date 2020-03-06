import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import FrontEndIcons from './icons/frontend-icons.component';
import BackEndIcons from './icons/backend-icons.component';

import './skill-filter.style.scss';

const SkillFilter = ({filterHidden}) => {
    const { t } = useTranslation();
    const headers = t('page_headers');
    return (
        <div className="skill-filter-component">
            <h1 className={filterHidden ? 'hidden' : 'filter-title' }>
                {headers.skills.title}
            </h1>
            <h3 className={filterHidden ? 'hidden' : 'filter-subtitle'}>
                {headers.skills.subtitle}    
            </h3>
            <div className={filterHidden ? 'top-fixed-filter' : 'filter-core'}>
                <p className="text-muted text-selection">
                    {headers.skills.filterTitle}
                </p>
                <div className="icons-section">
                    <div className="icon-item">
                        <FrontEndIcons/>
                    </div>
                    <div className="icon-item">
                        <BackEndIcons/>
                    </div>
                </div>
            </div>
            <small className={filterHidden ? 'hidden' : 'text-muted' }>
            {headers.skills.filterText}
            </small>
    </div>
    )
}

const mapStateToProps = state => ({
    filterHidden: state.skill.filterHidden,
})

export default connect(mapStateToProps)(SkillFilter);