import React from 'react';

import ContactInfo from '../../components/contact-info/contact-info.component';

const About = () => (
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">

        <ContactInfo/>

        <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

    </section>
);

export default About;