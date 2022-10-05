import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        console.log("Getting some country data");
        fetch("https://restcountries.com/v3.1/all")
        .then((response)=> response.json())
        .then((response)=> setDog(response.message));
    
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    return(
        <>
            <h1>I'm a country container!</h1>
            <CountriesList />
            <VisitedCountriesList/>
        </>
    );
}

export default CountriesContainer;