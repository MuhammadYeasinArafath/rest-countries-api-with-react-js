import React from 'react'

function CountryCard({ name, population, region, capital, flags, theme, expand, setExpand, setClicked}){
    return(
        <div className={theme ? "card shadow bg-dark-element" : "card shadow"} style={{width: "18rem", cursor: 'pointer'}} 
            onClick={() => {
                setExpand(!expand)
                setClicked(name)
                }} >
            <img src={flags.svg} className="card-img-top" alt='' style={{ height:'10rem', objectFit:'cover'}}/>
               
            <div className="card-body m-4 custom-font">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mt-4 m-0"><span>Population:</span> {population}</p>
                <p className="card-text m-0"><span>Region:</span> {region}</p>
                <p className="card-text m-0"><span>Capital:</span> {capital}</p>
                   
            </div>
        </div>
    )
}

export default CountryCard