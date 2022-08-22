import axios from 'axios';
import config from '../../config.js';

export default function updateDestinationOrder (afterData:any, cities, setCities, tripId) {
  const beforeData = cities;
    const path = `${config.LOCALTUNNEL}/trips/${tripId}/destinations`

    const axiosObj = {}
    for (var i = 0; i < afterData.length; i++) {
      axiosObj[afterData[i].destination_id] = i + 1;
    }
    axios.put(path, axiosObj)
    .catch((err) => {
      console.error('errored in the POI put request', err);
      setCities(beforeData);
    })
    setCities(afterData);
}
