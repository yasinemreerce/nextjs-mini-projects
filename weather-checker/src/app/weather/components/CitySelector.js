'use client'
import React, { useEffect, useState } from "react";
import styles from "./CitySelector.module.css";


export default function CitySelector({ onCityChange }) {
        const [cityNames, setCityNames] = useState([])
        const [selectedCity, setSelectedCity] = useState("")

        useEffect(() => {
                const fetchCities = async () => {
                const res = await fetch("https://turkiyeapi.dev/api/v1/provinces");
                const data = await res.json();

                const names = data.data.map(city => city.name);
                setCityNames(names);
                }

                fetchCities(); //api için yazdığım functions çalışıyor.
        }, []);

        const handleChange = (event) => {
                const selectedValue = event.target.value;
                setSelectedCity(selectedValue);

                if (onCityChange){
                        onCityChange(selectedValue)
                }
        }

        return (
                <>
                        <select
                                onChange={handleChange}
                        >
                                {cityNames.map((city) => (
                                        <option key={city} value={city} className={styles.select_option}>{city}</option>
                                ))}
                        </select>

                        <p>Seçilen Şehir: {selectedCity}</p>
                </>
        )
}