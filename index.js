const {
  nextISSTimesForMyLocation
} = require('./iss');

/*
fetchMyIp((body) => {
  console.log(body);
  return body;
});


fetchCoordsByIP('162.245.144.188', (data) => {
  console.log(data);
  return { data };
});

fetchISSFlyOverTimes({ latitude: '49.26200', longitude: '-123.09230' }, (response) => {
  console.log(response);
  return response;
});
*/

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});