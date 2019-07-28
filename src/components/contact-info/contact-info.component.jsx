import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo = (props) => {
    const { t } = useTranslation();
    const { name, lastName, profile, address, stateAddress, prefixPhone, phone, mail, profileStrong, profileComplement} = t('contactInfo');

    return ( 
        <div className="contact-info-component">
            <h1 className="mb-0 name-and-lastName">{name}
                <span className="text-primary"> {lastName}</span>
            </h1>
            <h2>
                {profile} <span className="text-primary">{profileStrong} </span>{profileComplement}
            </h2>
            <div className="subheading mb-5"> {address} · {stateAddress} · {prefixPhone} {phone} ·
            <a href={`mailto:${mail}`}> {mail} </a>
            </div>
        </div>
    )
}

export default ContactInfo;