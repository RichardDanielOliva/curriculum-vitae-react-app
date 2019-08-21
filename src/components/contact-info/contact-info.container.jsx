import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from './contact-info.component';

const ContactInfoContainer = () => {
    const { t } = useTranslation();
    const contactInfo = t('contactInfo');

    return( 
        <ContactInfo contactInfo={contactInfo}/>
    )
}

export default ContactInfoContainer;