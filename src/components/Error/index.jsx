import React from 'react'
import errorImg from '../../assets/img/error.png'

const ErrorPage = () => {
    return (
        <>  
            <div className="flex flex-col items-center justify-center mt-20">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Refresh</strong>
                <span className="block sm:inline"> Something went wrong</span>
            </div>
            <div className="block">
                <img src={errorImg} className="img__logo mt-10 block" alt="error" />
            </div>
            </div>
        </>
    )
}

export default ErrorPage;