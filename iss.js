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
    const ip = JSON.parse(body).ip;
    callback(error, response, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  
};

module.exports = {
  fetchMyIp,
  fetchCoordsByIP,
};