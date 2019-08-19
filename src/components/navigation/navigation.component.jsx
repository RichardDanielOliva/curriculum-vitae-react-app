import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {collapseNavBar} from '../../redux/navigation/navigation.action';
import './navigation.style.scss';


const Navigation = ({navbarCollapse, collapseNavBar}) => {
    const { t } = useTranslation();
    const  navigationSection  = t('navigationSection');
    const { name, lastName} = t('contactInfo');
    const firtname = name.split(" ")[0];

    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger" to="#page-top">
                    <span className="d-block d-lg-none">{firtname} {lastName}</span>

                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.jpg" alt=""/>
                    </span>
                </Link>

                <button className="navbar-toggler" type="button" onClick={() => collapseNavBar("collapse navbar-collapse show")}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className={navbarCollapse} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {
                            navigationSection.map(({id, sectionName, urlLink}) => (
                                <li key={id} className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" onClick={() => collapseNavBar("collapse navbar-collapse")} to={urlLink}>{sectionName}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        
    );
}

const mapStateToProps = state => ({
    navbarCollapse: state.navigation.navigationClassName,
})

const mapDispatchToProps = dispatch => ({
    collapseNavBar: (navbarClassName) => dispatch(collapseNavBar(navbarClassName))
  });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));