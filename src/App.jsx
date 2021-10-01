import React, { useState, useEffect } from 'react';
import './App.css';
import DropDown from '../src/components/DropDown';
import OpeningCrawl from '../src/components/OpeningCrawl';
import BackgroundStars from '../src/components/BackgroundStars'
import Loader from '../src/components/LoaderComponent'
import Table from '../src/components/Table';
import ErrorPage from '../src/components/Error';
import { getRequest } from './utils/axios';
import { genData, promiseApiCall } from './utils';
import logo from './assets/img/star-wars-4.svg'

function App() {

  const [moviesData, setMoviesData] = useState([])
  const [selectedmoviesData, setSelectedmoviesData] = useState([])
  const [charcterData, setCharcterData] = useState([])
  const [filCharcterData, setFilCharcterData] = useState([])
  const [loading, setLoading] = useState(false)
  const [charloading, setCharLoading] = useState(false)
  const [error, setError] = useState(false)
  const [charError, setCharError] = useState(false)

  const getAllMovies = async () => {
    setLoading(true)
    try {
      const { data: { results } } = await getRequest('films')
      setMoviesData(results)
      setLoading(false)
      setError(false)
    } catch ({ response, message }) {
      console.log(message)
      setError(true)
      setLoading(false)
      if (response && response.status === 403) {
        return
      }
    }
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  const charactersInMovies = async (charData) => {
    setCharLoading(true)
    const allCharacters = [];
    for (let i = 0; i < charData.length; i++) {
      const result = await promiseApiCall(charData[i], setCharError);
      if (result === undefined) {
        break;
      }
      allCharacters.push(result)
    }
    setCharcterData(allCharacters)
    setCharLoading(false)
    setFilCharcterData(null)
    genData(null)
    return allCharacters
  }

  const onMovieSelect = (e) => {
    const selectedMovie = e.target.value;
    const currentMovie = moviesData.find(({ title }) => (title === selectedMovie))
    setSelectedmoviesData(currentMovie)
    charactersInMovies(currentMovie.characters)
  }

  const onGenderSelect = (e) => {
    const selectedGender = e.target.value;
    const currentGender = charcterData?.filter(({ gender }) => (gender === selectedGender))
    setFilCharcterData(currentGender)
  }

  return (
    <div className="App">
      <BackgroundStars />
      {loading ? <Loader /> : <>{error ? <ErrorPage />
        : <div className="container mx-auto px-4 mt-6 overflow-auto" >
          <div className="flex  flex-col items-center">
            <img src={logo} className="img__logo" alt="logo" />
            <DropDown data={moviesData} title={"Please Select a Movie"} onMovieSelect={onMovieSelect} />
            <OpeningCrawl selectedmoviesData={selectedmoviesData} />
            <DropDown genderData={genData(charcterData)} title={"Select Gender"} onGenderSelect={onGenderSelect} />
            {charcterData && <Table charloading={charloading} charError={charError} filCharcterData={filCharcterData} charcterData={charcterData} setCharcterData={setCharcterData} />}
          </div>
        </div>}
      </>
      }
    </div>
  );
}

export default App;
