import React, { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Navbar from './components/Navbar'
import Search from './components/Search';
import Country from './components/Country';
import SearchedCoutries from './components/SearchedCoutries'


function App() {
  const [searchedCountry, setSearchedCountry] = useState([])
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("")
  const [expand, setExpand] = useState(false)
  const [clicked, setClicked] = useState("")
  
  //true for dark theme
  const [theme, setTheme] = useState(false)

  const searchTextLength = searchText.length
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
    
  useEffect(() => {
    fetchCountries()
  }, [])

  const filterCountry = (name) => {
    setSearchText(name)
    setSearchedCountry(countries.filter((country) =>
      Object.values(country).join("").toLowerCase().includes(name.toLowerCase())
  ))
  }
  
  if(isLoading){
    return <><Navbar />
    <h2 className="text-center custom-font mt-5">Loading...</h2></>
  }
  return(
      <>
        <Navbar theme={theme} setTheme={setTheme} />

        <div className={ theme ? "dark-mode-bg" : "bg-light"}>
          {!expand && 
          <Search theme={theme} 
                  searchText={searchText} 
                  filterCountry={filterCountry} 
                  setCountries={setCountries} />}
                  
          {searchTextLength > 0 && !expand ? 
            <SearchedCoutries theme={theme} 
                    searchedCountry={searchedCountry} 
                    expand={expand} 
                    setExpand={setExpand} 
                    setClicked={setClicked} /> : 
            expand ? 
            <Country theme={theme} 
                    expand={expand} 
                    setExpand={setExpand} 
                    setClicked={setClicked} 
                    clicked={clicked} 
                    countries={countries} /> :

            <Countries theme={theme} 
                    countries={countries} 
                    expand={expand} 
                    setExpand={setExpand} 
                    setClicked={setClicked} />}          
        </div>
      </>
  )
}

export default App;