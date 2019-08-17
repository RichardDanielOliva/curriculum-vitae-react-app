import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from '../../components/contact-info/contact-info.component';
import { ReactComponent as GithubLogo } from '../../assets/logos/mark-github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/logos/linkedin.svg';

import {AboutSectionContainer, ContactInfoContainer, ProfileTextContainer, LogosContainer, LogoItemContainer} from './about.styles';

const About = () => {
    const { t } = useTranslation();
    const contactInfo = t('contactInfo');

    return( 
      <AboutSectionContainer>
            <ContactInfoContainer>
                <ContactInfo contactInfo={contactInfo}/>
            </ContactInfoContainer>
          
            <ProfileTextContainer>
                <p>I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                </p>
            </ProfileTextContainer>

            <LogosContainer>
                <a href="https://www.linkedin.com/in/richard-daniel-oliva-denis-1a706a107/" >
                    <LogoItemContainer>
                        <LinkedinLogo/>
                    </LogoItemContainer>   
                </a>
                <a href="https://github.com/RichardDanielOliva" >
                    <LogoItemContainer>
                        <GithubLogo/>
                    </LogoItemContainer> 
                </a>
            </LogosContainer>
      </AboutSectionContainer>
    )
}

export default About;