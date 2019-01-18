
const request = require('request-promise');

const PINGITY_ID = "xE5Vj2EK503jtXPOfAQYo7Vb"
const PINGITY_SECRET = "TepNhXkENEcrbpHBro54EzvffVkByHTDkiQF9loPCOyfkcICvfvCnHIPhRCgtRO2"

function ValidateWithPingity(input) {

  console.log(input)

  let options = {
    method: 'POST',
    uri: 'https://pingity.com/api/v1/reports',
    auth: {
      'user': PINGITY_ID,
      'pass': PINGITY_SECRET,
    },
    body: { resource: input },
    json: true, // Automatically stringifies the body to JSON
    resolveWithFullResponse: true // Make sure to return everything, not just response body
  };  

  return request(options) 
    .then(function (response){
      //success
      result = response.toJSON();
      report = result.body[0].status.code;
      return {
        response: result.statusCode,
        body: result.body,
        result: displayResult(report)
      }; 
    })
    .catch(function (err){
      //fail
      console.log(err);
      return ValidateWithRegex(input);
    });

}


function ValidateWithRegex(input) {
  let mailformat = /^\S+@\S+$/;
  if(input.match(mailformat)) {
    return "Format valid";
  } else {
    return "You have entered an invalid email address!";
  }
}

function displayResult(result) {
  switch (result) {
    case "pass":
      return "Address valid, passing all tests";
    case "fail_critical":
      return "Address not valid";
    case "warning":
      return "Address valid, some tests failing.";
  }
}


module.exports = {
  validate: ValidateWithPingity,
  basic: ValidateWithRegex 
};
