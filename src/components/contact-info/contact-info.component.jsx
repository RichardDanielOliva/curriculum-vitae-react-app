import React from 'react';

import {ContactInfoContainerStyle, TitleContainerStyle, SubTitleContainerStyle, TextStrongStyle, LocationContainerStyle} from './contact-info.style';

const ContactInfo = ({contactInfo}) => {

    const {name, lastName, profile, address, stateAddress, prefixPhone, phone, mail, profileStrong, profileComplement} = contactInfo;

    return ( 
        <ContactInfoContainerStyle>
            <TitleContainerStyle>
                <h1>
                    {name}{' '}
                    <TextStrongStyle>
                        {lastName}
                    </TextStrongStyle>
                </h1>
            </TitleContainerStyle>   
            <SubTitleContainerStyle>
                <h3>
                    {profile}{' '}
                    <TextStrongStyle>
                        {profileStrong}{' '}
                    </TextStrongStyle>
                    {profileComplement}
                </h3>
            </SubTitleContainerStyle>
            <LocationContainerStyle>
                <p>
                    {` ${address} · ${stateAddress} · ${prefixPhone} ${phone} ·`}
                    {' '}
                    <a href={`mailto:${mail}`}>{mail}</a>
                </p>
            </LocationContainerStyle>
        </ContactInfoContainerStyle>
    )
}

export default ContactInfo;