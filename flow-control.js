'use strict';

//Now, in flow-control.js let's write a function basicTeenager that accepts an age as a parameter.
//The function should contain an if-statement that checks to see if the age is a teenager.
//If the age is a teenager, it should return "You are a teenager!"
function  basicTeenager(age)
  {if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  }
basicTeenager(13);



//Define a function teenager that accepts an age as a parameter. If the age is between 13-19 it should return "You are a teenager!".
// Otherwise, the function should return "You are not a teenager".
function teenager(age){
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }else{
    return "You are not a teenager";
  }
}

//Define a function ageChecker that takes in an age as a parameter. If the age is between 13-19 it should return "You are a teenager!".
//If the age is 12 or below, it should return "You are a kid". If the age is above 19, it should return "You are a grownup"
function ageChecker(age){
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }else if (age < 13){
    return "You are a kid";
  }else{
    return "You are a grownup";
  }
}


//Define a function ternaryTeenager that accepts age as a parameter.
//The body of the function should use the ternary operator to return "You are a teenager" if age is between 13-19
//and returns "You are not a teenager" if the age is anything else.

function ternaryTeenager(age){
  return (age >= 13 && age <= 19)? "You are a teenager" : "You are not a teenager";
}

//


//+ Define a function `switchAge` that accepts an age as a parameter.
//The case statement should switch on `age` and return `"You are a teenager"` if the age is 13, 14, 15, 16, 17, 18, or 19,
//and return `"You have an age"` as the default.
//function filter(value) {
//    switch (value) {




function  switchAge(age){
  switch(age){
    case 13:
    return ("You are a teenager");
    break;
  case 14:
      return ("You are a teenager");
    break;
  case 15:
      return ("You are a teenager");
    break;
  case 16:
      return ("You are a teenager");
    break;
  case 17:
      return ("You are a teenager");
      break;
  case 18:
      return ("You are a teenager");
      break;
  case 19:
      return ("You are a teenager");
      break;
  default:
    return ("You have an age");
  }
}
