import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from '../../components/contact-info/contact-info.component';
import { ReactComponent as GithubLogo } from '../../assets/logos/mark-github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/logos/linkedin.svg';

import './about.style.scss';

const About = () => {
    const { t } = useTranslation();
    const contactInfo = t('contactInfo');

    return( 
      <section className="about-section">
          <ContactInfo className="about-section-item" contactInfo={contactInfo}/>

          <p className="about-section-item">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          
          <div className="about-section-item logo-container">
              <a href="https://www.linkedin.com/in/richard-daniel-oliva-denis-1a706a107/" >
                  <LinkedinLogo className="logo-item"/>
              </a>
              <a href="https://github.com/RichardDanielOliva" >
                  <GithubLogo className="logo-item"/>
              </a>
        </div>
      </section>
    )
}

export default About;