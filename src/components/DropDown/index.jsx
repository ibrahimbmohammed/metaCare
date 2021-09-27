import React from 'react'

export default function index({ data, title, onMovieSelect}) {
    return (
        <>
            <label for={title}>{title}:</label>
            <select id="sw" name="star_wars" onChange={onMovieSelect}>
              <option value="">Select a Movie</option>
                {data?.map((item) => (<option value={item?.title}>{item?.title}</option> ))}
            </select>
        </>
    )
}
