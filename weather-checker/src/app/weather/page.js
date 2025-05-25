'use client';
import { useState } from "react";
import WeatherApi from "./components/WeatherApi";
import CitySelectorWrapper from "./components/CitySelectorWrapper";
import React from "react";
import "./globals.css"

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState("");


  return (
    <>
      <div
        className="container"
      >
        <WeatherApi city={selectedCity}/>
        <CitySelectorWrapper onCityChange={setSelectedCity}/>
      </div>
    </>
  );
}
