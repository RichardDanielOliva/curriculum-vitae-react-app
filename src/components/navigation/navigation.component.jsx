import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import SECTION_DATA from '../../static-data/section.data';
import './navigation.style.scss';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" to="#page-top">
            <span className="d-block d-lg-none">Richard Daniel Oliva Denis</span>
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
                SECTION_DATA.map(({id, sectionName, urlLink}) => (
                    <li key={id} className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to={urlLink}>{sectionName}</Link>
                    </li>
                ))
            }
        </ul>
        </div>
    </nav>
);

export default withRouter(Navigation);