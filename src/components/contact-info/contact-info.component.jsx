import React from 'react';

import './contact-info.style.scss'

const ContactInfo = ({contactInfo}) => {
    const {name, lastName, profile, address, stateAddress, prefixPhone, phone, mail, profileStrong, profileComplement} = contactInfo
    return ( 
        <div className="contact-info-component">
            <h1 className="mb-0">{name}
                <span className="text-strong"> {lastName}</span>
            </h1>   
            <h3>
                {profile} <span className="text-strong">{profileStrong} </span>{profileComplement}
            </h3>
            <div className="subheading mb-5"> {address} · {stateAddress} · {prefixPhone} {phone} ·
                <a href={`mailto:${mail}`}> {mail} </a>
            </div>
        </div>
    )
}

export default ContactInfo;