const {
  fetchMyIp,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
} = require('./iss');

/*
fetchMyIp((error, response, body) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${body}`;
    return;
  }
  console.log(body);
  return body;
});
*/
/*
fetchCoordsByIP('162.245.144.188', (error, response, data) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${data}`;
    return;
  }


  return {
    latitude: data.data.latitude,
    longitude: data.data.longitude
  };
});
*/
fetchISSFlyOverTimes({ latitude: '49.26200', longitude: '-123.09230' }, (response) => {
  console.log(response);
  return response;
});