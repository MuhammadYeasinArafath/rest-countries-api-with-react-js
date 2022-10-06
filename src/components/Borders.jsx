import React from 'react'
import { useState, useEffect } from 'react'
import BorderCountry from './BorderCountry'
const Borders = ({ country, theme, expand, clicked, setExpand, setClicked}) => {

    const [countryData, setCountryData] = useState([])
    const [borderCountries, setBorderCountries] = useState([]);

    const countryBorders = async (countryName) => {
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${countryName}`)
      const data = await response.json()
      setCountryData(data[0]);
      data[0]?.borders?.forEach((border) => {
        return forEachBorder(border);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const forEachBorder = async (border) => {
    try {
      const response = await fetch(`https://restcountries.com/v2/alpha/${border}`);
      const data = await response.json();
      setBorderCountries((currentCountries) => [...currentCountries, data.name]);
    } catch (error) {
      console.log(error);
    }
  };
 
  const newBorderCountries = [... new Set(borderCountries)]
  
  useEffect(() => {
    countryBorders(country)
  }, [country])

  function handleClick(country){
     setClicked(country)
     return currentCountry()
  }

  const currentCountry = () => {
    return <BorderCountry theme={theme} expand={expand} setExpand={setExpand} 
    setClicked={setClicked} clicked={clicked} newBorderCountries={newBorderCountries} />
  }
  return (
    <p className='card-text m-2'><span>Border Countries:</span>
        {newBorderCountries.length > 0 ? newBorderCountries.map((country, index) => {
            return (
              <button className={theme ? "btn bg-dark-element shadow px-4 py-2 m-1 rounded custom-font" 
              : "btn custom-light shadow custom-font px-4 py-2 m-1 rounded" }
              key={index}
              onClick={() => handleClick(country)}
              >
                {country}
              </button>
            )
        }) : <span className='ms-1'>No Border Countries to Show</span>}
    </p>
  )
}

export default Borders