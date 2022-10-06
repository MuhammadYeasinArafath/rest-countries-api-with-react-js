import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Borders from './Borders'

const BorderCountry = ({ expand, clicked, setExpand, setClicked, theme, newBorderCountries }) => {

  return (
    <>
      <button className={theme ? "btn bg-dark-element shadow px-4 py-2 rounded custom-font m-5" 
      : "btn custom-light shadow custom-font px-4 py-2 rounded m-5" } 
      onClick={() => {
        setExpand(!expand)
        setClicked("")
      }}><FaArrowLeft className='me-2'/>Go back</button>
      {newBorderCountries.map((country) => {

        if(country.name === clicked){
          return(
            <div className="container min-vh-100">
              <div className={theme ? 
                "d-flex flex-column flex-lg-row justify-content-lg-center bg-dark-single text-light m-5 mb-0" 
                : "d-flex flex-column flex-lg-row justify-content-lg-center bg-light m-5 mb-0"} 
                style={{height: "auto", width: '100%'}}>
                
                <img src={country.flags.svg} className="card-img-top" alt='' style={
                  { maxHeight: "20rem", maxWidth: '50%',  objectFit:'cover'}
                  }/>
                  
                <div className="card-body m-4 custom-font">
                    <h5 className="card-title">{country.name}</h5>
                    <div className="row">
                      <div className="col-md">
                        <p className="card-text mt-4 m-2"><span>Native Name:</span> {country.nativeName}</p>
                        <p className="card-text m-2"><span>Population:</span> {country.population}</p>
                        <p className="card-text m-2"><span>Region:</span> {country.region}</p>
                        <p className="card-text m-2"><span>Sub Region:</span> {country.subregion}</p>
                        <p className="card-text m-2"><span>Capital:</span> {country.capital}</p>
                      </div>
                      <div className="col-md">
                        <p className="card-text mt-4 m-2"><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                        <p className="card-text m-2"><span>Currencies:</span> {country.currencies.map((currrency) => {
                          return currrency.name})}</p>
                        <p className="card-text m-2"><span>Language:</span> {country.languages.map((language) => {
                          return language.name})}</p>
                      </div>
                    </div>
                    <Borders theme={theme} country={country.name}  />
                </div>
              </div>
            </div>
          )
        }
      })}
    </>
  )
}

export default BorderCountry