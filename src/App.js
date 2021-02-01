import React from 'react';
import './App.css';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { Nav } from './Nav';
import { HorizontalLine } from './HorizontalLine';
import PhoneView from './assets/images/PHONE_MOCK.jpg';
import DesktopView from './assets/images/DESKTOP_MOCK.jpg';
import TabletView from './assets/images/TABLET_MOCK.jpg';
import LaptopView from './assets/images/LATOP_MOCK.jpg';
import ApiSample from './assets/images/code_1.jpg';
import SenecaBanner from './assets/images/SenecaBanner.png';
import TimHortonBanner from './assets/images/TimHortonsBanner.png';

{
  /* npm run deploy */
}

let headings = ['Skills', 'Projects', 'Education', 'Employment', 'Contact'];
function App() {
  return (
    <div className='App bg-light'>
      {/* 
      ****************************************************************
                          Navagation Component
      **************************************************************** */}
      <Nav headings={headings} />
      {/* 
      ****************************************************************
                                    Jumbotron
      **************************************************************** */}
      <section
        className='container-fluid jumbotron jumbotron-fluid bg-light mb-0 pb-5'
        id='top'
      >
        <div className='container-fluid pl-5'>
          <h1 className='display-4 mb-4'>Danny Nguyen</h1>
          <p className='lead mt-4'>
            Seneca College graduate from the Computer Programming course
            <br />A passion in developing websites to help connect everyone and
            their communities via the internet
          </p>
        </div>
      </section>
      {/* 
        ****************************************************************
                            Horizontal Line Component
        **************************************************************** */}
      <HorizontalLine />
      {/* 
        ****************************************************************
                                    Skills
        **************************************************************** */}
      <div className='container-fluid bg-dark text-light py-4 px-md-5'>
        <div className='row mx-0 justify-content-center' id='skills'>
          <div className='h3'>{headings[0]}</div>
        </div>
        {/* 
        ****************************************************************
                              Skills Component
        **************************************************************** */}
        <Skills headings={headings} />
      </div>
      {/* 
        ****************************************************************
                            Horizontal Line Component
        **************************************************************** */}
      <HorizontalLine />
      {/* 
        ****************************************************************
                                    Projects
        **************************************************************** */}
      <div className='container-fluid'>
        <section className='row justify-content-center mt-3'>
          <div className='row' id='projects'>
            <div className='h3'>{headings[1]}</div>
          </div>
        </section>

        <section className='row mt-4'>
          <div className='container'>
            {/*
        ****************************************************************
                              Projects Component
        **************************************************************** */}
            <Projects
              PhoneView={PhoneView}
              DesktopView={DesktopView}
              TabletView={TabletView}
              LaptopView={LaptopView}
              ApiSample={ApiSample}
            />
          </div>
        </section>
        {/* container mt-4 */}
      </div>
      {/* container */}
      {/* 
        ****************************************************************
                            Horizontal Line Component
        **************************************************************** */}
      <HorizontalLine />
      {/* 
        ****************************************************************
                                    Education
        **************************************************************** */}
      <div className='container-fluid bg-dark text-light py-4 px-md-5'>
        <div className='row justify-content-center mt-3'>
          <div className='row' id='education'>
            <div className='h3'>{headings[2]}</div>
          </div>
        </div>
        {/* row justify-content-center mt-3 */}
        {/* 
        ****************************************************************
                            Education Component
        **************************************************************** */}
        {<Education />}
      </div>
      {/* container */}
      {/* 
        ****************************************************************
                            Horizontal Line Component
        **************************************************************** */}
      <HorizontalLine />
      {/* 
        ****************************************************************
                                Employment
        **************************************************************** */}
      <div className='container mb-4'>
        <div className='row justify-content-center mt-3'>
          <div className='row' id='employment'>
            <div className='h3'>{headings[3]}</div>
          </div>
        </div>
        <section className='row'>
          {/* 
        ****************************************************************
                          Employment Component
        **************************************************************** */}
          <div className='container'>
            <article className='row mt-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={SenecaBanner}
                  alt='Seneca College Banner'
                />
                <div className='card-body'>
                  <h2 className='card-title'>
                    Information Technology Service Desk - Technologist
                  </h2>
                  <h5 className='card-subtitle'>Team Lead</h5>
                  <p className='card-text'>
                    As a technologist, we are the first point of contact for
                    clients who are looking for inqueries for either general,
                    student, hardware, software, or financial. We were also
                    responsible for implimenting projects/visions that our
                    supervisor assigned to us. These projects/visions had
                    deadlines which provided us with an opportunity to showcase
                    our project management skills because we would have to
                    finish before the deadline while keeping up with the
                    day-to-day tasks at the service desk. Also, a report was
                    required by our supervisor on the progress and potential
                    features to be added from requirements gathering on a weekly
                    basis. We worked in an environment that required us to
                    communicate between multiple departments in our campus and
                    across all four major campuses of Seneca College. To work at
                    this job, we had to have analytical skills. Research and
                    problem-solving helps with keeping clients satisfied when
                    they come to us with a problem, whether it is for
                    information, hardware, or software.
                  </p>
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </article>
            {/* row mt-4 */}
            <article className='row mt-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={TimHortonBanner}
                  alt='Tim Hortons Banner'
                />
                <div className='card-body'>
                  <h2 className='card-title'>
                    Customer Service Representative
                  </h2>
                  <h5 className='card-subtitle'>Team Member</h5>
                  <p className='card-text'>
                    As a customer service representative, we were in constant
                    contact with the customers, whether it was by phone, mobile,
                    drive-thru, or face-to-face. We worked as a unit, rotation
                    between stations in preparing the incredients, producing the
                    product, and serving the product to the customer. In
                    preparing the ingredients, we would handle the delivery and
                    stock up the stations. When producing the product we would
                    bake the pasteries, make the sandwiches, and make the
                    beverages to be handed off to the person in charge of
                    delivering the order to the customer. When delivering the
                    order to the customer, we would receive the payment, whether
                    it is by cash, debit, or credit, and hand over the order to
                    the customer in a satisfactory manner, which means if the
                    order had two or more drinks, a tray would be used. We also
                    had to implement new methods of how customers ordered. In my
                    time working, we had just implemented mobile ordering
                    through the Tim Horton's app and kiosks within the
                    restaurant. Incorporating these new methods required
                    multi-tasking and an ability to quickly adapt because they
                    are vital to retaining/attracting customers.
                  </p>
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </article>
            {/* row mt-4 */}
          </div>
          {/* container */}
        </section>
        {/* row */}
      </div>
      {/* container mb-4 */}
      {/* 
        ****************************************************************
                            Horizontal Line Component
        **************************************************************** */}
      <HorizontalLine />
      {/* 
        ****************************************************************
                                    Contact
        **************************************************************** */}
      <div className='container-fluid bg-dark text-light py-4 px-md-5'>
        <div className='row justify-content-center mt-3'>
          <div className='row' id='contact'>
            <div className='h3'>{headings[4]}</div>
          </div>
        </div>
        <section className='row'>
          {/* 
        ****************************************************************
                                    Contact Component
        **************************************************************** */}
          <div className='container'>
            <div className='row'>
              <div className='col-6 d-flex justify-content-center'>
                <nav className='nav flex-column'>
                  <button
                    className='nav-link active btn btn-link contact-btn'
                    aria-disabled='true'
                    disabled
                  >
                    Danny Nguyen
                  </button>
                  <button
                    className='nav-link btn btn-link contact-btn'
                    aria-disabled='true'
                    disabled
                  >
                    email: gbnguyenw@gmail.com
                  </button>
                  <button
                    className='nav-link btn btn-link contact-btn'
                    aria-disabled='true'
                    disabled
                  >
                    phone: (647) 760-3458
                  </button>
                </nav>
              </div>
              {/* col-6 d-flex justify-content-center */}
              <div className='col-6 d-flex justify-content-center'>
                <nav className='nav flex-column'>
                  <a
                    className='nav-link contact-links'
                    href='https://www.linkedin.com/in/gia-bao-danny-nguyen/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn &nbsp;
                    <span className='fa fa-linkedin'></span>
                  </a>
                  <a
                    className='nav-link contact-links'
                    href='https://github.com/DannyNguyenCode'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github &nbsp;
                    <span className='fa fa-github'></span>
                  </a>
                  <a
                    className='nav-link contact-links'
                    href='https://twitter.com/BaoGiaNguyen'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Twitter &nbsp;
                    <span className='fa fa-twitter'></span>
                  </a>
                </nav>
              </div>
              {/* col-6 d-flex justify-content-center */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
        {/* row */}
      </div>
      {/* container-fluid bg-dark text-light py-4 px-md-5 */}
    </div> /* App */
  );
}

export default App;
