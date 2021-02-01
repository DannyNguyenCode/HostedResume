import React from 'react';

export const Nav = ({ headings }) => (
  <nav className='navbar navbar-expand-sm navbar-dark bg-dark sticky-top border border-top-0 border-right-0 border-left-0'>
    <div className='container-fluid pl-5'>
      <a className='navbar-brand' href='#top'>
        Resume
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navHeadings'
        aria-controls='navHeadings'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navHeadings'>
        <div className='navbar-nav'>
          {headings.map((heading, key) => {
            return (
              <a
                key={key}
                className='nav-item nav-link'
                href={'#' + heading.toLowerCase()}
              >
                {heading}
              </a>
            );
          })}
        </div>{' '}
        {/* navbar-nav */}
      </div>{' '}
      {/* collapse navbar-collapse */}
    </div>{' '}
    {/* container */}
  </nav>
);
