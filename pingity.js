
const PINGITY_ID = "xE5Vj2EK503jtXPOfAQYo7Vb"
const PINGITY_SECRET = "TepNhXkENEcrbpHBro54EzvffVkByHTDkiQF9loPCOyfkcICvfvCnHIPhRCgtRO2"

function ValidateWithPingity() {
  let input = document.getElementById('pingity-address').value
  console.log(input)

  $(document).ajaxStart(function() {
    $( "#success" ).hide();
    $( "#warning" ).hide();
    $( "#fail" ).hide();
    $( "#working" ).show();
  });

  var request = $.ajax({
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
    $( "#oops" ).show();
      return ValidateWithRegex(input);
  });
}


function ValidateWithRegex(input) {
  let mailformat = /^\S+@\S+$/;
  if(input.match(mailformat)) {
    alert("Format valid");
  } else {
    alert("You have entered an invalid email address!");
  }
}

function displayResult(result) {
  switch (result) {
    case "pass":
      $( "#working" ).hide();
      $( "#warning" ).hide();
      $( "#fail" ).hide();
      $( "#success" ).show();
      break;
    case "fail_critical":
      $( "#working" ).hide();
      $( "#success" ).hide();
      $( "#warning" ).hide();
      $( "#fail" ).show();
      break;
    case "warning":
      $( "#working" ).hide();
      $( "#success" ).hide();
      $( "#fail" ).hide();
      $( "#warning" ).show();
      break;
  }
}


