import React from 'react';


import ContactInfo from '../../components/contact-info/contact-info.component';

const About = () => (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">

        <ContactInfo/>

        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

    </section>
);

export default About;