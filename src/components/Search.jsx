import regionNames from '../regionNames'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

 function Search( { searchText, filterCountry, setCountries, theme } ){

    const [region, setRegion] = useState("Filter By Region")

    const filterRegion = async (regionName) => {
        if (regionName === "all") {
          const response = await fetch('https://restcountries.com/v2/all')
          const data = await response.json()
          setCountries(data)
        } else {
          const response = await fetch(`https://restcountries.com/v2/region/${regionName}`)
          const data = await response.json()
          setCountries(data)
        }
      }
    return(
        <div className="container pt-5 pb-5">
            <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                <div>
                    <FaSearch style={
                        {color: 'hsl(0, 0%, 52%)', position: 'absolute', marginLeft: '1rem', marginTop: '1.2rem'}}/>
                    <input 
                        type='search' 
                        className={theme ? "bg-dark-element custom-input shadow-sm text-start custom-font px-5 py-3" 
                        : "custom-input shadow-sm text-start custom-font px-5 py-3"}
                        placeholder="  Search for a country..." 
                        name="searchText"
                        value={searchText}
                        onChange={(e) => {
                            filterRegion("all")
                            setRegion("Filter By Region")
                            filterCountry(e.target.value)
                        }}
                    /> 
                </div>

                <div className="mt-5 mt-lg-0">
                    <div className="dropdown">
                        <button className={theme ? 
                            "bg-dark-element btn dropdown-toggle shadow-sm custom-dd custom-dark custom-font" : 
                            "btn dropdown-toggle shadow-sm custom-dd custom-light custom-font"} 
                            type="button" 
                            id="dropdownMenuButton2" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">{region}
                        </button>
                        <ul className={theme ? "dropdown-menu dropdown-menu-dark custom-font" 
                        : "dropdown-menu dropdown-menu-light custom-font"} 
                        aria-labelledby="dropdownMenuButton2">
                            
                            {
                                regionNames.map((region) => {
                                    return <li className="dropdown-item" key={region.id} onClick={() => {
                                        filterCountry("")
                                        filterRegion(region.name)
                                        setRegion(region.name)
                                    }}>{region.name}</li>
                                })
                            }
                                
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search