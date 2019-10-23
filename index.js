const { fetchMyIp } = require('./iss');
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

  console.log("IP:", body);
});
*/