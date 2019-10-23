const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIp = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      console.log("Error:", error);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${body}`;
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request('https://ipvigilante.com/' + ip, (error, response, body) => {
    if (error) {
      console.log("Error:", error);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${body}`;
      return;
    }
    const IPInfo = JSON.parse(body);

    callback({ latitude: IPInfo.data.latitude, longitude: IPInfo.data.longitude });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`,
    (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP.  Response: ${body}`;
        console.log(msg);
        return;
      }
      callback(JSON.parse(body).response);
    });
};

/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results. 
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 */
const nextISSTimesForMyLocation = function(callback) {

};

module.exports = {
  fetchMyIp,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};