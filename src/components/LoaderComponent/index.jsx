import React from 'react';
import './index.scss';

const Loader = ({ className = 'black', page, withText }) => {
    return (
        <div className={page ? 'page' : ''}>
            <div className={"lds-ring " + className || ''}><div></div><div></div><div></div><div></div></div>
            {withText && <p className="text-large text-center">{withText}</p>}
        </div>
    )
}

export default Loader;