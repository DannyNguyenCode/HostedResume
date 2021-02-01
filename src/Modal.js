import React from 'react';

export const Modal = ({ id, title, src, alt }) => (
  <div
    className='modal fade'
    id={id}
    tabIndex='-1'
    role='dialog'
    aria-labelledby={id + 'Label'}
    aria-hidden='true'
  >
    <div className='modal-dialog' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' id={id + 'Label'}>
            {title}
          </h5>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='modal-body'>
          <img style={{ width: 100 + '%' }} src={src} alt={alt} />
        </div>
        <div className='modal-footer'>
          <button
            type='button'
            className='btn btn-secondary'
            data-dismiss='modal'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
