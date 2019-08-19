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
                <p>
                En constante reciclaje profesional y reinventándome día a día. En la actualidad me encuentro en proceso de aprendizaje para adquirir los conocimientos necesarios y asi ejercer como profesional de la programación. 
                </p>
                <p>
                Herramientas: Del lado del cliente, React y Redux. Del lado del servidor Java EE, con Spring, Hibernate y Maven.
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