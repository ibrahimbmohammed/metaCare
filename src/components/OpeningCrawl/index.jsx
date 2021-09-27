import React from 'react'

export default function index({ selectedmoviesData:{opening_crawl}}) {
    return (
        <>
          <div>
              <h3>
                {opening_crawl}  
              </h3>
          </div>
        </>
    )
}
