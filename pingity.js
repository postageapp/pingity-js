
const username = "xE5Vj2EK503jtXPOfAQYo7Vb"
const password = "TepNhXkENEcrbpHBro54EzvffVkByHTDkiQF9loPCOyfkcICvfvCnHIPhRCgtRO2"

function ValidateWithPingity(input) {
  var request = $.ajax({
    url: 'https://pingity.com/api/v1/reports',
    type: 'POST',
    data: { resource: input } ,
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa("xE5Vj2EK503jtXPOfAQYo7Vb" + ':' + "TepNhXkENEcrbpHBro54EzvffVkByHTDkiQF9loPCOyfkcICvfvCnHIPhRCgtRO2")); 
    },
    dataType: "json"
  });

  request.done(function(data) {
    // your success code here
    console.log(data);    
  });

  request.fail(function(jqXHR, textStatus) {
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