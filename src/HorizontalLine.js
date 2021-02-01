import React from 'react';

export const HorizontalLine = () => (
  <div className='progress' style={{ height: 5 + 'px' }}>
    <div
      className='progress-bar progress-bar-striped progress-bar-animated bg-info'
      role='progressbar'
      aria-valuenow='75'
      aria-valuemin='0'
      aria-valuemax='100'
      style={{ width: 100 + '%', height: 5 + 'px' }}
    ></div>
    {/* progress-bar progress-bar-striped progress-bar-animated bg-info */}
  </div>
  /* progress */
);
