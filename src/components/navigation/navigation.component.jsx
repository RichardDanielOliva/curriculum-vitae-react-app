import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import './navigation.style.scss';

const Navigation = () => {
    const { t } = useTranslation();
    const  navigationSection  = t('navigationSection');
    const { name, lastName} = t('contactInfo');

    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger" to="#page-top">
                    <span className="d-block d-lg-none">RICHARD {lastName}</span>

                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.jpg" alt=""/>
                    </span>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {
                            navigationSection.map(({id, sectionName, urlLink}) => (
                                <li key={id} className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to={urlLink}>{sectionName}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        
    );
}

export default withRouter(Navigation);