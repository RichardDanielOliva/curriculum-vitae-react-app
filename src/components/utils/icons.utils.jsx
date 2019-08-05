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
        case 'github':
            return  <GithubLogo onClick={() => onCLickFunction(name)} />
        case 'wirtz':
            return  <WirtzLogo onClick={() => onCLickFunction(name)} />
        case 'usc':
            return  <USCLogo onClick={() => onCLickFunction(name)} />
        case 'usb':
            return  <USBLogo onClick={() => onCLickFunction(name)} /> 
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

