const {
  fetchMyIp,
  fetchCoordsByIP
} = require('./iss');


const IP = fetchMyIp((error, response, body) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${body}`;
    return;
  }

  return body;
});

fetchCoordsByIP(IP, (error, data) => {
  console.log(error);
  console.log(data);
});