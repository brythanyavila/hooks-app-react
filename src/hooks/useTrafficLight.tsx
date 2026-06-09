/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (color: TrafficLightColor = 'red') => {
  const [light, setLight] = useState<TrafficLightColor>(color);
  const [countdow, setCountdow] = useState(5);

  // Countdow effect
  useEffect(() => {
    if (countdow === 0) return;

    const intervalId = setInterval(() => {
      setCountdow((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdow]);

  //Change light color effect
  useEffect(() => {
    if (countdow > 0) return;

    setCountdow(5);

    if (light === 'red') {
      setLight('green');
      return;
    }

    if (light === 'yellow') {
      setLight('red');
      return;
    }

    if (light === 'green') {
      setLight('yellow');
      return;
    }
  }, [countdow, light]);

  return {
    // Props / Values
    countdow,
    light,
    colors,

    //Computed
    porcentage: (countdow / 5) * 100,
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',

    // Methods / Actions
  };
};
