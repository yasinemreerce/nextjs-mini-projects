'use client';

import dynamic from 'next/dynamic';

const CitySelector = dynamic(() => import('./CitySelector'), {
  ssr: false,
});

export default function CitySelectorWrapper({ onCityChange }) {
  return <CitySelector onCityChange={onCityChange}/>;
}
