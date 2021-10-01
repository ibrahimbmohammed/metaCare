import React from 'react';
import loader from '../../assets/img/loader.gif'
const Loader = () => {
    return (
        <div className="flex justify-center mt-20">
             <img src={loader} className="img__logo mt-20" alt="logo" />
        </div>
    )
}

export default Loader;