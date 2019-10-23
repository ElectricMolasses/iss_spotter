const {
  fetchMyIp,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
} = require('./iss');


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