import React from 'react'

export default function index({ selectedmoviesData:{opening_crawl}}) {
  const text = "A Long Time Ago in a Galaxy Far, Far Away…"
    return (
        <>
          <div className="bg-yellow-400 bg-opacity-70 rounded-md mt-4 animate-fade w-4/6">
              <h3 className={opening_crawl ? "p-4" : "p-4 text-center"}>
                {opening_crawl ? opening_crawl : text }  
              </h3>
          </div>
        </>
    )
}
