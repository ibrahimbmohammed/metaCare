import React from 'react'

export default function index({ data, genderData, title, onMovieSelect, onGenderSelect }) {

    return (
        <>
            <div className="relative inline-block text-left dropdown mt-4 ">
                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
                <select id="sw" name="star_wars" onChange={onMovieSelect ? onMovieSelect : onGenderSelect} className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                    <option value="">{title}</option>
                    {data && data?.map((item, i) => (<option key={i} value={item?.title}>{item?.title}</option>))}
                    {genderData && genderData?.map((item) => (<option key={item} value={item}>{item}</option>))}
                </select>
            </div>
        </>
    )
}

