import React from 'react'
import CountryCard from './CountryCard'
import Country from './Country'

const SearchedCoutries = ({ searchedCountry, theme, expand, setExpand, setClicked}) => {
    return (
    <>
      <div className="container min-vh-100">
        <div className="row align-items-center mt-5">
            {searchedCountry.map((country, index) => {
                return(
                  <div className="col-md mb-5" key={index}>
                    <CountryCard 
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flags={country.flags} 
                                
                                theme={theme}
                                expand={expand}
                                setExpand={setExpand} 
                                setClicked={setClicked} />
                  </div>
                  
                )
            })}
           
        </div>
      </div>
    </>
  )
}

export default SearchedCoutries