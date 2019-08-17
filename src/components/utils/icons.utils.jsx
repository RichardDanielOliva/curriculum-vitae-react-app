import React from 'react';

import { ReactComponent as CssLogo } from '../../assets/logos/css-3.svg';
import { ReactComponent as Html5Logo } from '../../assets/logos/html-5-logo.svg';
import { ReactComponent as JavaScriptLogo } from '../../assets/logos/javascript.svg';
import { ReactComponent as BootstrapLogo } from '../../assets/logos/Boostrap_logo.svg';
import { ReactComponent as ReactLogo } from '../../assets/logos/react.svg';
import { ReactComponent as YarnLogo } from '../../assets/logos/iconfinder_yarn_4691251.svg';
import { ReactComponent as JavaLogo } from '../../assets/logos/java-logo.svg';
import { ReactComponent as SpringLogo } from '../../assets/logos/springio-icon.svg';
import { ReactComponent as HibernateLogo } from '../../assets/logos/hibernate-icon.svg';
import { ReactComponent as SqlLogo } from '../../assets/logos/sql-file-symbol.svg';
import { ReactComponent as MavenLogo } from '../../assets/logos/maven.svg';
import { ReactComponent as GithubLogo } from '../../assets/logos/mark-github.svg';
import { ReactComponent as WirtzLogo } from '../../assets/logos/wirtz.svg';
import { ReactComponent as USCLogo } from '../../assets/logos/usc.svg';
import { ReactComponent as USBLogo } from '../../assets/logos/usb.svg';
import { ReactComponent as ExtracurricularActivitiesLogo } from '../../assets/logos/others-section/activities.svg';
import { ReactComponent as HobbiesLogo } from '../../assets/logos/others-section/bike.svg';
import { ReactComponent as RunningLogo } from '../../assets/logos/others-section/running.svg';
import { ReactComponent as CoursesLogo } from '../../assets/logos/others-section/courses.svg';
import { ReactComponent as LanguagesLogo } from '../../assets/logos/others-section/languages.svg';
import { ReactComponent as WorkExperiencesLogo } from '../../assets/logos/others-section/work-experience.svg';
import { ReactComponent as ListeningLogo } from '../../assets/logos/listening.svg';
import { ReactComponent as ReadingLogo } from '../../assets/logos/reading.svg';
import { ReactComponent as SpeakingLogo } from '../../assets/logos/speaking.svg';
import { ReactComponent as WritingLogo } from '../../assets/logos/writing.svg';

import AgaliLogo  from '../../assets/logos/agali.svg';
import ELHatilloLogo  from '../../assets/logos/elhatillo.svg';
import IndraLogo from '../../assets/logos/indra.svg';
import PDVSALaEstanciaLogo  from '../../assets/logos/pdvsaLaEstancia.svg';

export const getFrontEndIcons = () => {
    return [
        {name:"html", id:"0"},
        {name:"css", id:"1"},
        {name:"javascript", id:"2"},
        {name:"bootstrap", id:"3"},
        {name:"react", id:"4"},
        {name:"yarn", id:"5"}
    ]
} 

export const getBackEndIcons = () => {
    return [
        {name:"java", id:"0"},
        {name:"spring", id:"1"},
        {name:"hibernate", id:"2"},
        {name:"sql", id:"3"},
        {name:"maven", id:"4"}
    ]
} 

export const getIconComponent = (name) => {
    switch (name) {
        case 'html':
            return <Html5Logo />;
        case 'css':
            return <CssLogo />;
        case 'javascript':
            return  <JavaScriptLogo />
        case 'bootstrap':
            return  <BootstrapLogo />
        case 'react':
            return  <ReactLogo />
        case 'yarn':
            return  <YarnLogo />
        case 'maven':
            return <MavenLogo />;
        case 'java':
            return  <JavaLogo />
        case 'spring':
            return  <SpringLogo />
        case 'hibernate':
            return  <HibernateLogo />
        case 'sql':
            return  <SqlLogo />
        case 'github':
            return  <GithubLogo />
        case 'wirtz':
            return  <WirtzLogo />
        case 'usc':
            return  <USCLogo />
        case 'usb':
            return  <USBLogo /> 
        case 'others-experience':
            return  <WorkExperiencesLogo />
        case 'courses':
            return  <CoursesLogo />
        case 'languages':
            return  <LanguagesLogo />
        case 'publications':
            return  <ExtracurricularActivitiesLogo />  
        case 'hobbies':
            return  <HobbiesLogo />
        case 'running':
                return  <RunningLogo />
        case 'python':
                return  <HobbiesLogo />
        case 'listening':
            return  <ListeningLogo />
        case 'reading':
            return  <ReadingLogo />  
        case 'speaking':
            return  <SpeakingLogo />
        case 'writing':
                return  <WritingLogo />                       
        default:
            break;
    }
}

    export const getIconImg = (name) => {
        switch (name) {
            case 'agali': 
                return  <img src={AgaliLogo} className="company-icon" alt="AGALILogo" />
            case 'indra': 
                return  <img src={IndraLogo} className="company-icon" alt="IndraLogo" />
            case 'elhatillo': 
                return  <img src={ELHatilloLogo} className="company-icon" alt="ElHatilloLogo" />
            case 'pdvsaLaEstancia': 
                return  <img src={PDVSALaEstanciaLogo} className="company-icon" alt="PDVSALaEstanciaLogo" />
            default:
                break;
        }
    }


