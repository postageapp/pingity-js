
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
    json: true // Automatically stringifies the body to JSON
  };  

  request(options) 
    .then(function (report){
      //success
      result = report[0].status.code;
      return displayResult(result); 
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
    console.log("Format valid");
  } else {
    console.log("You have entered an invalid email address!");
  }
}

function displayResult(result) {
  switch (result) {
    case "pass":
      console.log("Address valid, passing all tests");
      break;
    case "fail_critical":
      console.log("Address not valid");
      break;
    case "warning":
      console.log("Address valid, some tests failing.");
      break;
  }
}


printMsg = function() {
  console.log("Hello from pingity-js");
}

module.exports = {
  printMsg: printMsg,
  validate: ValidateWithPingity,
  basic: ValidateWithRegex 
};
