import React from 'react'

const Fetch = () => {
    fetch ('https://restcountries.com/v3.1/name/argentina')
    .then((res)=>res.json())
    .then((data)=> console.log(data)
    )

    return (
        <div>FetchCountry</div>
    )
}

export default FechtCountrys