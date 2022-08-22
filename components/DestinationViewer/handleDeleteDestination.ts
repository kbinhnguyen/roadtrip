import { LayoutAnimation } from 'react-native';
import axios from 'axios';
import config from '../../config.js';

export default function handleDeleteDestination(item, cities, setCities, tripId) {
  let beforeData = cities;
  let afterData = [];
  cities.forEach((city) => {
    if (city.cityName !== item.cityName) {
      afterData.push(city);
    }
  });

  const path = `${config.LOCALTUNNEL}/trips/${tripId}/destinations/${item.destination_id}`;

  axios.delete(path)
  .catch((err) => {
    console.error('errored when deleted destination', err)
    setCities(beforeData);
  })
  setCities(afterData);

  LayoutAnimation.configureNext(
    LayoutAnimation.create(
      150,
      LayoutAnimation.Types.linear,
      LayoutAnimation.Properties.scaleY
    )
  );
}