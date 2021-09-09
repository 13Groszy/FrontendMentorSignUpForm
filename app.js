var claim = document.querySelector(".claimTrial");
var firstName = document.querySelector(".name");
var lastName = document.querySelector(".surname");
var email = document.querySelector(".email");
var password = document.querySelector(".pass");
var contains  = document.querySelector(".contains")


claim.addEventListener("click", function(inputs){
    var inputs = [firstName, lastName, password];
    inputs.forEach(input => {
        if(input.value){
            input.style.border = '1px solid gray';
            input.nextElementSibling.style.display = 'none';
            console.log("The value: " + input.value + " will go to database.");
        }else{
            input.style.border = '1px solid red';
            input.nextElementSibling.style.display = 'block';
        }
    });
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(email.value) ){
        console.log("Valid email: " + email.value + " will go to database.");
        email.style.border = '1px solid gray';
        contains.style.display = 'none';
      } else {
        console.log("This is not valid email!");
        email.style.border = '1px solid red';
        contains.style.display = 'block';
      }
})
