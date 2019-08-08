import React from 'react';

import './custom-button.style.scss'

const CustomButton = ({
  children,
  selected,
}) => (
    <div className={selected ? 'selected-custom-button' : 'custom-button' }>
        <div className={'card-image-button' }
            style={{
                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`
              }}/>
        <button
            className={selected ? 'selected-button' : 'button' }>
                {children}
        </button>
    </div>
);

export default CustomButton;