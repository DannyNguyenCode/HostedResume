import React from 'react';
import { Modal } from './Modal';

export const Projects = ({
  PhoneView,
  DesktopView,
  TabletView,
  LaptopView,
  ApiSample,
}) => (
  <React.Fragment>
    <div className='row justify-content-around'>
      <article className='col col-12 col-lg-6'>
        <div className='card text-center mb-4'>
          <div className='card-header'>Personal Project: PC-Builder</div>
          <div className='row no-gutters'>
            <div className='col-3'>
              <button
                type='button'
                className='btn btn-link p-0 project-img-btn'
                data-toggle='modal'
                data-target='#enlargePhonePhoto'
              >
                <img
                  className='card-img-top item'
                  src={PhoneView}
                  alt='Responsive view of website on phone screen'
                  style={{ width: 132.5 + 'px', height: 88.25 + 'px' }}
                />
              </button>
            </div>
            <div className='col-3'>
              <button
                type='button'
                className='btn btn-link p-0 project-img-btn'
                data-toggle='modal'
                data-target='#enlargeDesktopPhoto'
              >
                <img
                  className='card-img-top item'
                  src={DesktopView}
                  alt='Responsive view of website on tablet screen'
                  style={{ width: 132.5 + 'px', height: 88.25 + 'px' }}
                />
              </button>
            </div>
            <div className='col-3'>
              <button
                type='button'
                className='btn btn-link p-0 project-img-btn'
                data-toggle='modal'
                data-target='#enlargeTabletPhoto'
              >
                <img
                  className='card-img-top item'
                  src={TabletView}
                  alt='Responsive view of website on desktop screen'
                  style={{ width: 132.5 + 'px', height: 88.25 + 'px' }}
                />
              </button>
            </div>
            <div className='col-3'>
              <button
                type='button'
                className='btn btn-link p-0 project-img-btn'
                data-toggle='modal'
                data-target='#enlargeLaptopPhoto'
              >
                <img
                  className='card-img-top item'
                  src={LaptopView}
                  alt='Responsive view of website on laptop screen'
                  style={{ width: 132.5 + 'px', height: 88.25 + 'px' }}
                />
              </button>
            </div>
          </div>
          {/* row no-gutters */}
          <ul className='list-group list-group-flush text-left mt-3'>
            <li className='list-group-item'>
              Responsive Design using Bootstrap4 to increase accessibility
              through multiple mediums
            </li>
            <li className='list-group-item'>
              User interface using React to handle events, state and life
              cycles, forms, render elements, and implement components and props
            </li>

            <li className='list-group-item'>
              JSX used to embed expressions and help React render elements to
              the screen
            </li>
            <li className='list-group-item'>
              Fecthed data from a webservice using AJAX Fetch method
            </li>
          </ul>
          <div className='card-footer'>
            <a
              href='https://github.com/DannyNguyenCode/PCBuilder'
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to PCBuilder Github Repository
            </a>
            <a
              href='https://easycomputerbuilder.herokuapp.com/'
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to PCBuilder Site
            </a>
          </div>
          {/* card-footer */}
        </div>
        {/* card text-center mb-4 */}
      </article>
      {/* col col-12 col-lg-6 */}
      <article className='col col-12 col-lg-6'>
        <div className='card text-center mb-4'>
          <div className='card-header'>
            Personal Project: Application Programming Interface
          </div>
          <div className='row justify-content-center'>
            <button
              style={{ width: 80 + '%', height: 100 + '%' }}
              type='button'
              className='btn btn-link p-0 project-img-btn'
              data-toggle='modal'
              data-target='#enlargeAPISamplePhoto'
            >
              <img
                className='card-img-top w-50'
                src={ApiSample}
                alt='Sample of API service created'
                style={{ width: 226.19 + 'px', height: 96.7 + 'px' }}
              />
            </button>
          </div>
          <ul className='list-group list-group-flush text-left mt-2'>
            <li className='list-group-item'>
              RESTful API to make requests using http protocols (GET, POST, PUT,
              and DELETE)
            </li>
            <li className='list-group-item'>
              JSON format on data source to perform CRUD (Create, Read, Update,
              and Delete) operations
            </li>

            <li className='list-group-item'>
              Mongoose to allow communication with database stored on MongoAtlas
            </li>
            <li className='list-group-item'>
              Heroku to deploy API as a web service for applications to access
              data
            </li>
          </ul>
          <div className='card-footer'>
            <a
              href='https://github.com/DannyNguyenCode/computerAPI'
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to API Github Repository
            </a>
          </div>
          {/* card-footer */}
        </div>
        {/* card text-center mb-4 */}
      </article>
      {/* col col-12 col-lg-6 */}
      <article className='col col-12 col-lg-6'>
        <div className='card text-center mb-4'>
          <div className='card-header'>Personal Project: E-Commerce</div>
          <ul className='list-group list-group-flush text-left mt-2'>
            <li className='list-group-item'>
              Layout using Cascading Stylesheets' Flex Box and Grid System
            </li>
            <li className='list-group-item'>
              Event listener and Event Handling using JavaScript
            </li>

            <li className='list-group-item'>
              Hypertext Markup Language to display content onto screen.
              Organized using multiple element tags
            </li>
            <li className='list-group-item'>
              Responsive Design using Flex Box, Grid System, and Media Queries
            </li>
          </ul>
          <div className='card-footer'>
            <a
              href='https://github.com/DannyNguyenCode/e-commerce'
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to E-Commerce Source Code Repository
            </a>
          </div>
          {/* card-footer */}
        </div>
        {/* card text-center mb-4 */}
      </article>
      {/* col col-12 col-lg-6 */}
      <article className='col col-12 col-lg-6'>
        <div className='card text-center mb-4'>
          <div className='card-header'>
            Personal Project: Python3 Trading Algorithm
          </div>
          <ul className='list-group list-group-flush text-left mt-2'>
            <li className='list-group-item'>
              Used Linux (Ubuntu 20.10) operating system and Komodo IDE as the
              environment to code on
            </li>
            <li className='list-group-item'>
              Libraries and modules include Python3, Panda, Matplotlib,
              yfinanace, numpy, datetime, xml, and csv
            </li>

            <li className='list-group-item'>
              Created modules for different patterns and indicators to inform
              decision on stocks
            </li>
          </ul>
          <div className='card-footer'>
            <a
              href='https://github.com/DannyNguyenCode/tradingAlgorithm'
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Trading Algorithm Source Code Repository
            </a>
          </div>
          {/* card-footer */}
        </div>
        {/* card text-center mb-4 */}
      </article>
      {/* col col-12 col-lg-6 */}
      {/* 
      ****************************************************************
                      Modals - to enlarge picture on click
      **************************************************************** */}
      <Modal
        id='enlargePhonePhoto'
        title='Phone View'
        src={PhoneView}
        alt={'Responsive view of website on phone screen'}
      />
      <Modal
        id='enlargeDesktopPhoto'
        title='Desktop View'
        src={DesktopView}
        alt='Responsive view of website on desktop screen'
      />
      <Modal
        id='enlargeTabletPhoto'
        title='Tablet View'
        src={TabletView}
        alt='Responsive view of website on tablet screen'
      />
      <Modal
        id='enlargeLaptopPhoto'
        title='Laptop View'
        src={LaptopView}
        alt='Responsive view of website on laptop screen'
      />
      <Modal
        id='enlargeAPISamplePhoto'
        title='API Sample View'
        src={ApiSample}
        alt='Sample of API service created'
      />
    </div>
  </React.Fragment>
);
