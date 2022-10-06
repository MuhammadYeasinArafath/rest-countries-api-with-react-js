import React from 'react'
import CountryCard from './CountryCard'

const Countries = ({ countries, theme, expand, setExpand, setClicked }) => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            {countries.map((country, index) => {
                return(
                  <div className="col-md mb-5 d-flex justify-content-center" key={index}>
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

export default Countries