import { useEffect, useState } from "react";

const CountryCard = ({name, flagimg, flagAltTxt}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            padding: "10px",
            margin: "10px",
            border: "1px solid black",
            borderRadius: "8px",
            width: "200px",
            height: "200px"
        }}>
            <img src={flagimg}
            alt={flagAltTxt}
            style={{width:"100px", height:"100px" }}
            />
            <h2>{name}</h2>
        </div>
    );
}

function Countries() {
    const API_URL = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error:", error));
    }, []);
    // console.log(countries.map((country) => (<CountryCard name={country.name} flagimg={country.flag} flagAltTxt={country.abbr}/>)));

    return (<div style={{
        display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        height:"100vh",
        justifyContent:"center",
    }}>
    {countries.map((country) => (<CountryCard name={country.name} flagimg={country.flag} flagAltTxt={country.abbr}/>))}
    </div>
);

}

export default Countries