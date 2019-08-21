import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfoContainer from '../../components/contact-info/contact-info.container';
import { ReactComponent as GithubLogo } from '../../assets/logos/mark-github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/logos/linkedin.svg';

import {AboutSectionContainer, ContactContainer, ProfileTextContainer, LogosContainer, LogoItemContainer} from './about.styles';

const About = () => {
    const { t } = useTranslation();

    const profileParagraphs = t('profileParagraphs');
    const linkedInUrl = 'https://www.linkedin.com/in/richard-daniel-oliva-denis-1a706a107/';
    const GithubUrl = 'https://github.com/RichardDanielOliva';

    return( 
      <AboutSectionContainer id="AboutSectionContainer">

            <ContactContainer>
                <ContactInfoContainer />
            </ContactContainer>
          
            <ProfileTextContainer>
                {
                    profileParagraphs.map((paragraphs) =>
                        <p>{paragraphs}</p>)
                }
            </ProfileTextContainer>

            <LogosContainer>
                <a href={linkedInUrl} >
                    <LogoItemContainer>
                        <LinkedinLogo/>
                    </LogoItemContainer>   
                </a>
                <a href={GithubUrl} >
                    <LogoItemContainer>
                        <GithubLogo/>
                    </LogoItemContainer> 
                </a>
            </LogosContainer>

      </AboutSectionContainer>
    )
}

export default About;