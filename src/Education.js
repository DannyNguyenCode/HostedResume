import React from 'react';

export const Education = () => (
  <React.Fragment>
    <section className='row'>
      <article className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='h4'>Seneca College</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6'>
            <div className='h5'>Computer Programming</div>
          </div>
          <div className='col-12 col-md-12 col-lg-6'>
            <p className='lead mb-0'>GPA 3.8</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 offset-lg-6'>
            <p className='lead'>President's Honour List</p>
          </div>
        </div>
        {/* <hr className='my-4' /> */}
      </article>
      <div
        className='progress my-2'
        style={{ width: 100 + '%', height: 2 + 'px' }}
      ></div>
      <article className='container text-dark mb-4'>
        <div className='row'>
          <div className='col h3 text-center mb-4'>Relevant Courses</div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-6 mb-3'>
            <div className='card'>
              <div className='card-header text-center'>Web Development</div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Web Programming Principles</li>
                <li className='list-group-item'>
                  Web Programming Tools and Frameworks
                </li>
                <li className='list-group-item'>
                  Web Programming for Apps and Services
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-6 mb-3'>
            <div className='card'>
              <div className='card-header text-center'>Project Management</div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  Requirements Gathering using Object Oriented Models
                </li>
                <li className='list-group-item'>
                  Analysis and Design using Object Oriented Models
                </li>
                <li className='list-group-item'>
                  Project Planning and Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  </React.Fragment>
);
