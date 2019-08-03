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

export const getIconComponent = (name, onCLickFunction) => {
    switch (name) {
        case 'html':
            return <Html5Logo onClick={() => onCLickFunction(name)} />;
        case 'css':
            return <CssLogo onClick={() => onCLickFunction(name)} />;
        case 'javascript':
            return  <JavaScriptLogo onClick={() => onCLickFunction(name)} />
        case 'bootstrap':
            return  <BootstrapLogo onClick={() => onCLickFunction(name)} />
        case 'react':
            return  <ReactLogo onClick={() => onCLickFunction(name)} />
        case 'yarn':
            return  <YarnLogo onClick={() => onCLickFunction(name)} />
        case 'maven':
            return <MavenLogo onClick={() => onCLickFunction(name)} />;
        case 'java':
            return  <JavaLogo onClick={() => onCLickFunction(name)} />
        case 'spring':
            return  <SpringLogo onClick={() => onCLickFunction(name)} />
        case 'hibernate':
            return  <HibernateLogo onClick={() => onCLickFunction(name)} />
        case 'sql':
            return  <SqlLogo onClick={() => onCLickFunction(name)} />
        default:
            break;
    }
}

export const logoSelectedStateClass = (logoName, skills) => {
    return skills.includes(logoName) ? 'logo': 'logoSelected' 
}