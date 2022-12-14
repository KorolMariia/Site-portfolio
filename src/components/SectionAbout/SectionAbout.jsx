import React from 'react';
import './SectionAbout.scss';
import ListEducation from './ListEducation/ListEducation';
import SchoolIcon from '@mui/icons-material/School';

export default function SectionAbout() {
  return (
    <div className="section">
      <div>
        <h2 className="section-about-title">
          About <span className="color">Me</span>
        </h2>
        <img
          className="section-about-foto"
          src="/images/img-about.webp"
          alt="Foto"
        />
      </div>
      <div>
        <h4 className="section-about-subtitle color">
          <SchoolIcon sx={{ marginRight: '5px' }} />
          Education
        </h4>
        <ul className="section-about-list">
          <ListEducation
            title={'FRONT END PRO'}
            time={'2022'}
            place={'Hillel IT School'}
            link={'https://certificate.ithillel.ua/ru/view/98330361'}
            desc={'Click here to view a Cetrificate'}
          />
          <ListEducation
            title={'FRONT END BASIC'}
            time={'2022'}
            place={'Hillel IT School'}
            link={'https://certificate.ithillel.ua/view/23624442'}
            desc={'Click here to view a Cetrificate'}
          />
          <li className="about-item">
            <h5 className="about-item-title">BUSINESS AND MANAGEMENT</h5>
            <div className="about-item-subtitle">
              <time>2007-2012 </time>
              <span className="vertical-dilimiter">&#124;</span>
              <span> Mechnikov National University (Odesa, Ukraine)</span>
            </div>
            <p className="about-item-description">
              Obtained the Master’s degree
            </p>
          </li>
        </ul>
        <p className="section-about-content color">
          {'< I try to code beautiful simple things and I love what I do />'}
        </p>
        <p className="section-about-content">
          I’m a Manager-economist who decided to reload career and restart it as
          a Front End Developer.{' '}
        </p>
        <p className="section-about-content">
          My goal is to become a successful developer and build my career in IT.{' '}
        </p>
        <p className="section-about-content">
          {' '}
          Previously, I worked as a Top-manager in retail, so I have good
          experience in teamwork, I know how to find solutions in any
          problematic situation and take full responsibility for the results of
          my own work.{' '}
        </p>
      </div>
    </div>
  );
}
