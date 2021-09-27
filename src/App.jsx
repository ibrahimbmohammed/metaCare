import React, { useState, useEffect } from 'react';
import './App.css';
import DropDown from '../src/components/DropDown';
import OpeningCrawl from '../src/components/OpeningCrawl';
import Table from '../src/components/Table';
import { getRequest } from './utils/axios';

function App() {

  const [moviesData, setMoviesData] = useState([])
  const [selectedmoviesData, setSelectedmoviesData] = useState([])
  const [loading, setLoading] = useState(false)

  const resetLoading = () => {
    return setLoading(!loading)
  }
  // const borderCountr = new Promise.all(
  //   borders.map(async (border) => {
  //     const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${border}`);
  //     return await response.json();
  //   })
  // );
  // useEffect(() => {

  //   const getRepresentatives = async () => {
  //     try {
  //       const promises = await Promise.all([getRepresentativesById(repIds[0]), getRepresentativesById(repIds[1])]);
  //       setRepresentative([...promises[0].data], [...promises[1].data]);
  //     } catch (error) {
  //       console.log("Catch Err: " + error);
  //     } finally {
  //     }
  //   }
  // }, [])

  //console.log(borderCountr[0], borderCountr[1]);
  const getAllMovies = async () => {
    try {
      const { data: { results } } = await getRequest('films')
      setMoviesData(results)
    } catch ({ response, message }) {
      if (response && response.status === 403) {
        return
      }
    } finally {
      resetLoading()
    }
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  const onMovieSelect = (e) => {
    const selectedMovie = e.target.value;
    const currentMovie = moviesData.find(({ title }) => (title === selectedMovie))
    setSelectedmoviesData(currentMovie)
    console.log(selectedmoviesData)
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <DropDown data={moviesData} title={"Please Select a Movie"} onMovieSelect={onMovieSelect} />
      <OpeningCrawl selectedmoviesData={selectedmoviesData} />
      <Table/>
    </div>
  );
}

export default App;
