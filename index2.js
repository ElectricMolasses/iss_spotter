const { 
  nextISSTimesForMyLocation
} = require('./iss_promised');

const flightTimes = nextISSTimesForMyLocation();

flightTimes.then((times) => {
  console.log(times);
})
  .catch((error) => {
    console.log("ERROR:", error.message);
  });