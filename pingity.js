
const PINGITY_ID = "xE5Vj2EK503jtXPOfAQYo7Vb"
const PINGITY_SECRET = "TepNhXkENEcrbpHBro54EzvffVkByHTDkiQF9loPCOyfkcICvfvCnHIPhRCgtRO2"

function ValidateWithPingity(input) {

  console.log(input)

  let request = $.ajax({
    url: 'https://pingity.com/api/v1/reports',
    type: 'POST',
    data: { resource: input } ,
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(PINGITY_ID + ':' + PINGITY_SECRET)); 
    },
    dataType: "json"
  });

  request.done(function(report) {
    // your success code here
    result = report[0].status.code;
    return displayResult(result);    
  });

  request.fail(function(jqXHR, textStatus) {
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
